<?php

namespace App\Http\Controllers;

use FFMpeg\Coordinate\Dimension;
use FFMpeg\Filters\Video\VideoFilters;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Storage;
use Laravel\Socialite\Facades\Socialite;
use ProtoneMedia\LaravelFFMpeg\Support\FFMpeg;

class FacebookPageController extends Controller
{
    private string $base_url = 'https://graph.facebook.com/v16.0/';

    private string $app_id;

    private string $secret;

    public function __construct()
    {
        $this->app_id = config('providers.app_id');
        $this->secret = config('providers.app_secret');
    }

    private string $page_id = 'diginftars';

    private string $page_token;

    private string $instagram_id;

    private string $user_token;

    public function redirectUser()
    {
        $scopes = [
            'pages_show_list',
            'pages_manage_posts',
            'pages_read_engagement',
            'pages_manage_metadata',
            'public_profile',
            'catalog_management',
            'instagram_basic',
            'instagram_manage_insights',
            'instagram_manage_comments',
            'instagram_content_publish',
            'publish_video',
        ];

        return Socialite::driver('facebook')
            ->scopes($scopes)
            ->redirect();
    }

    public function authenticateUser()
    {
        return Socialite::driver('facebook')
            ->setScopes([
                'pages_show_list',
                'pages_manage_posts',
                'pages_read_engagement',
                'pages_manage_metadata',
                'public_profile',
                'catalog_management',
                'instagram_basic',
                'instagram_manage_insights',
                'instagram_manage_comments',
                'instagram_content_publish',
                'publish_video',

            ])

            ->redirect();
    }

    public function handleCallback()
    {
        $user = Socialite::driver('facebook')->user();

        $long_lived_user_token_url = $this->base_url.'oauth/access_token?grant_type=fb_exchange_token&client_id='.$this->app_id.'&client_secret='.$this->secret.'&fb_exchange_token='.$user->token;

        $user_token_response = json_decode(file_get_contents($long_lived_user_token_url), true);

        $page_token_url = $this->base_url.$this->page_id.'?fields=access_token&access_token='.$user_token_response['access_token'];

        $page_token_response = json_decode(file_get_contents($page_token_url), true);
        $instagram_token_url = $this->base_url.$this->page_id.'?fields=instagram_business_account&access_token='.$user_token_response['access_token'];
        $instagram_token_response = json_decode(file_get_contents($instagram_token_url), true);
        $this->setPageToken($page_token_response['access_token']);

        $this->setUserToken($user_token_response['access_token']);

        $this->setInstagramId($instagram_token_response['instagram_business_account']['id']);
        $user_data = [
            'id' => $user->getId(),
            'email' => $user->getEmail(),
            'name' => $user->getName(),
            'long_lived_access_token' => $this->user_token,
        ];

        $page_data = [
            'id' => $page_token_response['id'],
            'access_token' => $this->page_token,
        ];

        $instagram_data = [
            'id' => $instagram_token_response['instagram_business_account']['id'],
            'access_token' => $instagram_token_response['instagram_business_account'],
        ];

        $this->setPgaeId($page_token_response['id']);

        //route name aigenerate
        return redirect()->route('aigenerate', [
            'user_data' => $user_data,
            'page_data' => $page_data,
            'instagram_data' => $instagram_data,
        ]);
    }

    private function setUserToken($token)
    {
        $this->user_token = $token;
    }

    private function setPgaeId($id)
    {
        Cookie::queue('page_id', $id, 60 * 24 * 30);
    }

    private function setInstagramId($id)
    {
        Cookie::queue('instagram_id', $id, 60 * 24 * 30);
    }

    //get instagram id
    private function getInstagramId()
    {
        return Cookie::get('instagram_id');
    }

    private function setPageToken($token)
    {
        $this->page_token = $token;
        //store in cookie
        Cookie::queue('page_token', $token, 60 * 24 * 30);
    }

    private function getPageId()
    {
        return Cookie::get('page_id');
    }

    private function getPageToken()
    {
        return Cookie::get('page_token');
    }

    private function getUserToken()
    {
        return $this->user_token;
    }

    private function sendPostRequest($url, $data)
    {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        $response = curl_exec($ch);
        curl_close($ch);

        return json_decode($response, true);
    }

    // Create a Facebook post with text, images, and videos

    public function uploadImagesToCloudinary(Request $request)
    {

        $images = $request->file('images');
        $imageUrls = [];

        foreach ($images as $image) {
            $path = Storage::disk('s3')->put('images', $image, 'public');
            // Generate a URL for the uploaded image
            $url = Storage::disk('s3')->url($path);
            $imageUrls[] = $url;
        }

        return $imageUrls;
    }

    public function UploadVideoToCloudinary(Request $request)
    {
        $video = $request->file('video');

        // Step 1: Upload the original video to Amazon S3
        $originalVideoPath = Storage::disk('s3')->putFile('videos', $video, 'public');

        // Step 2: Generate a URL for the uploaded video
        $originalVideoUrl = Storage::disk('s3')->url($originalVideoPath);

        // Step 3: Transcode the video with FFmpeg
        $ffmpeg = FFMpeg::fromDisk('s3');
        /* -fpsmax 60 -preset ultrafast -c:a aac -b:a 128k -ac 1 -pix_fmt yuv420p -movflags +faststart -t 59 -y */
        $format = (new \FFMpeg\Format\Video\X264())->setAdditionalParameters(['-pix_fmt', 'yuv420p']);
        $randomStr = substr(str_shuffle('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 0, 10);

        $ffmpeg->open($originalVideoPath)
            ->export()

            ->addFilter(function (VideoFilters $filters) {
                $filters->custom('scale=iw*min(1280/iw\,720/ih):ih*min(1280/iw\,720/ih)')->resize(new Dimension(1024, 490), $mode = \FFMpeg\Filters\Video\ResizeFilter::RESIZEMODE_INSET, true)
                    ->crop(new \FFMpeg\Coordinate\Point(0, 0), new \FFMpeg\Coordinate\Dimension(1024, 490));

            })

            ->addFilter(function (VideoFilters $filters) {
                $filters->custom('pad=1280:720:(1280-iw)/2:(720-ih)/2');

            })

            ->addFilter('-fpsmax', '60', '-preset', 'ultrafast', '-c:a', 'aac', '-b:a', '128k', '-ac', '1', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-t', '59', '-y')

            ->toDisk('s3')
            ->inFormat($format)
            ->save('transcoded/'.pathinfo($originalVideoPath, PATHINFO_FILENAME).$randomStr.'.mp4');

        // Step 4: Generate the URL for the transcoded video
        $transcodedVideoPath = 'transcoded/'.pathinfo($originalVideoPath, PATHINFO_FILENAME).$randomStr.'.mp4';

        // Make the transcoded video public
        Storage::disk('s3')->setVisibility($transcodedVideoPath, 'public');
        $transcodedVideoUrl = Storage::disk('s3')->url($transcodedVideoPath);

        return $transcodedVideoUrl;
    }

    public function createFacebookPostWithImages(Request $request)
    {
        // Your Facebook Page access token
        $accessToken = $this->getPageToken();

        // Your Facebook Page ID
        $pageId = $this->getPageId();

        // Upload images and videos and get their media IDs

        $imageUrls = $request->images;
        $iMAGEmediaIds = [];
        foreach ($imageUrls as $imageUrl) {
            $imagePostData = [
                'url' => $imageUrl,
                'caption' => $request->caption,
                'access_token' => $accessToken,
                'published' => 'false', // Set published to false
            ];
            $imagePostUrl = "https://graph.facebook.com/v14.0/{$pageId}/photos";
            $imagePostResponse = $this->sendPostRequest($imagePostUrl, $imagePostData);

            $iMAGEmediaIds[] = [$imagePostResponse['id']];
        }

        $url = "https://graph.facebook.com/v14.0/{$pageId}/feed";

        $data = [
            'message' => $request->caption,
            'access_token' => $accessToken,
        ];

        $attached_media = [];

        foreach ($iMAGEmediaIds as $key => $value) {
            $data['attached_media['.$key.']'] = json_decode('{"media_fbid":"'.$value[0].'"}');
        }
        $response = $this->sendPostRequest($url, $data);
        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Post created successfully.',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return response()->json([
            'response' => $response,
        ]);
    }

    public function createFacebookPostWithVideo(Request $request)
    {
        // Your Facebook Page access token
        $accessToken = $this->getPageToken();

        // Your Facebook Page ID
        $pageId = $this->getPageId();

        // URL of the video you want to share
        $videoUrl = $request->video;

        // Create an array with the video data
        $videoData = [
            'file_url' => $videoUrl,
            'description' => $request->caption,
            'access_token' => $accessToken,
        ];

        // Build the URL for uploading the video
        $videoUploadUrl = "https://graph-video.facebook.com/v14.0/{$pageId}/videos";

        // Use cURL or another HTTP library to send a POST request to upload the video
        $response = $this->sendPostRequest($videoUploadUrl, $videoData);

        // Send a POST request to create the post

        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Post created successfully.',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return response()->json([
            'response' => $response,
        ]);
    }

    //instagram
    //post on instagram
    public function postOnInstagram(Request $request)
    {
        $url = $this->base_url.$this->getInstagramId().'/media?image_url='.$request->image_url.'&caption='.$request->caption.'&access_token='.$this->getPageToken();
        $response = json_decode(file_get_contents($url), true);

        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Post created successfully.',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return response()->json([
            'response' => $response,
        ]);
    }

    public function PostIntagramCarousel(Request $request)
    {
        // Instagram user ID (replace with your user ID)
        $igUserId = $this->getInstagramId();

        // Instagram access token (replace with your access token)
        $accessToken = $this->getPageToken();

        // Initialize an empty array to store item container IDs
        $itemContainerIds = [];

        // Define your carousel items with image URLs and video URLs
        $carouselItems = $request->items;
        // Step 1: Create item containers
        foreach ($carouselItems as $item) {
            $mediaType = $item['type'] === 'image' ? 'IMAGE' : 'VIDEO';
            $mediaUrl = $item['url'];
            $itemContainerData = [
                'media_type' => $mediaType,
                'image_url' => $mediaUrl,
                'video_url' => $mediaUrl,
                'access_token' => $accessToken,
                'is_carousel_item' => 'true',
            ];
            $itemContainerUrl = "https://graph.facebook.com/v14.0/{$igUserId}/media";
            $itemContainerResponse = $this->sendPostRequest($itemContainerUrl, $itemContainerData);
            $itemContainerIds[] = $itemContainerResponse['id'];
        }

        $children = implode(',', $itemContainerIds);
        $carouselContainerData = [
            'access_token' => $accessToken,
            'caption' => $request->caption,
            'media_type' => 'CAROUSEL',
            'children' => $children,
        ];

        $carouselContainerUrl = "https://graph.facebook.com/v14.0/{$igUserId}/media";

        $carouselContainerResponse = $this->sendPostRequest($carouselContainerUrl, $carouselContainerData);

        // Step 3: Publish the carousel post
        $publishData = [
            'creation_id' => $carouselContainerResponse['id'],
            'access_token' => $accessToken,
        ];

        $publishUrl = "https://graph.facebook.com/v14.0/{$igUserId}/media_publish";

        $publishResponse = $this->sendPostRequest($publishUrl, $publishData);
        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Post created successfully.',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return response()->json([
            'response' => $publishResponse,
        ]);
    }

    public function SingleImagePostOnInstagram(Request $request)
    {

        $image = $request->image[0];
        $url = $this->base_url.$this->getInstagramId().'/media?image_url='.$image.'&caption='.$request->caption.'&access_token='.$this->getPageToken();
        $imageResponse = $this->sendPostRequest($url, []);
        //publish
        $publishUrl = $this->base_url.$this->getInstagramId().'/media_publish?creation_id='.$imageResponse['id'].'&access_token='.$this->getPageToken();
        $publishResponse = $this->sendPostRequest($publishUrl, []);

        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Post created successfully.',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return response()->json([
            'response' => $publishResponse,
        ]);
    }

    public function PostInstagramReel(Request $request)
    {
        $apiVersion = 'v14.0';
        $igUserId = $this->getInstagramId();
        $videoUrl = $request->video[0];
        $pageAccessToken = $this->getPageToken();
        $caption = $request->caption;

        // Build the URL with placeholders
        $url = "https://graph.facebook.com/{$apiVersion}/{$igUserId}/media?media_type=REELS&video_url={$videoUrl}&caption={$caption}&share_to_feed=false&access_token={$pageAccessToken}";

        // Create a Guzzle HTTP client

        //curl
        $client = new Client();
        $response = $client->post($url);
        $MediaResponse = json_decode($response->getBody(), true);

        $mediaId = $MediaResponse['id'];

        //container status

        $url = "https://graph.facebook.com/{$apiVersion}/{$mediaId}?fields=status_code,status&access_token={$pageAccessToken}";

        $response = $client->get($url);

        $status = json_decode($response->getBody(), true);

        if ($status['status_code'] == 'FINISHED') {
            $url = "https://graph.facebook.com/{$apiVersion}/{$igUserId}/media_publish?creation_id={$mediaId}&access_token={$pageAccessToken}";
            $response = $client->post($url);
            $PublishResponse = json_decode($response->getBody(), true);

            return response()->json([
                'response' => $PublishResponse,
            ]);
        } else {
            //wait for status to be finished
            sleep(60);
            $url = "https://graph.facebook.com/{$apiVersion}/{$mediaId}?fields=status_code,status&access_token={$pageAccessToken}";

            $response = $client->get($url);

            $status = json_decode($response->getBody(), true);

            if ($status['status_code'] == 'FINISHED') {
                $url = "https://graph.facebook.com/{$apiVersion}/{$igUserId}/media_publish?creation_id={$mediaId}&access_token={$pageAccessToken}";
                $response = $client->post($url);
                $PublishResponse = json_decode($response->getBody(), true);

                return response()->json([
                    'response' => $PublishResponse,
                ]);
            } else {
                sleep(60);
                $url = "https://graph.facebook.com/{$apiVersion}/{$mediaId}?fields=status_code,status&access_token={$pageAccessToken}";

                $response = $client->get($url);

                $status = json_decode($response->getBody(), true);

                if ($status['status_code'] == 'FINISHED') {
                    $url = "https://graph.facebook.com/{$apiVersion}/{$igUserId}/media_publish?creation_id={$mediaId}&access_token={$pageAccessToken}";
                    $response = $client->post($url);
                    $PublishResponse = json_decode($response->getBody(), true);
                    $alerts = [
                        [
                            'type' => 'success',
                            'title' => 'Success',
                            'message' => 'Post created successfully.',
                        ],
                    ];
                    // Flash the array of alerts to the session
                    request()->session()
                        ->flash('alert', $alerts);

                    return response()->json([
                        'response' => $PublishResponse,
                    ]);
                } else {
                    $alerts = [
                        [
                            'type' => 'error',
                            'title' => 'Error',
                            'message' => 'Something went wrong.',
                        ],
                    ];
                    // Flash the array of alerts to the session
                    request()->session()
                        ->flash('alert', $alerts);

                    return response()->json([
                        'response' => $status,
                    ]);
                }
            }
        }
    }

    //check if cookie is set

    public function PostInstagramImageStory(Request $request)
    {
        // Instagram user ID (replace with your user ID)
        $igUserId = $this->getInstagramId();

        // Instagram access token (replace with your access token)
        $accessToken = $this->getPageToken();

        // Initialize an empty array to store item container IDs

        $itemContainerData = [
            'image_url' => $request->image[0],
            'media_type' => 'STORIES',
            'access_token' => $accessToken,
        ];

        $itemContainerUrl = "https://graph.facebook.com/v14.0/{$igUserId}/media";
        $itemContainerResponse = $this->sendPostRequest($itemContainerUrl, $itemContainerData);

        // Step 3: Publish the carousel post
        $publishData = [
            'creation_id' => $itemContainerResponse['id'],
            'access_token' => $accessToken,
        ];

        $publishUrl = "https://graph.facebook.com/v14.0/{$igUserId}/media_publish";

        $publishResponse = $this->sendPostRequest($publishUrl, $publishData);
        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Post created successfully.',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return response()->json([
            'response' => $publishResponse,
        ]);
    }

    public function PostInstagramVideoStory(Request $request)
    {
        // Instagram user ID (replace with your user ID)
        $igUserId = $this->getInstagramId();

        // Instagram access token (replace with your access token)
        $accessToken = $this->getPageToken();
        $pageAccessToken = $this->getPageToken();

        // Initialize an empty array to store item container IDs

        $itemContainerData = [
            'video_url' => $request->video[0],
            'media_type' => 'STORIES',
            'access_token' => $accessToken,
        ];

        $itemContainerUrl = "https://graph.facebook.com/v14.0/{$igUserId}/media";
        $itemContainerResponse = $this->sendPostRequest($itemContainerUrl, $itemContainerData);

        $client = new Client();

        $mediaId = $itemContainerResponse['id'];
        // Step 3: Publish the carousel post

        //container status
        $apiVersion = 'v14.0';

        $url = "https://graph.facebook.com/{$apiVersion}/{$mediaId}?fields=status_code,status&access_token={$pageAccessToken}";

        $response = $client->get($url);

        $status = json_decode($response->getBody(), true);

        if ($status['status_code'] == 'FINISHED') {
            $url = "https://graph.facebook.com/{$apiVersion}/{$igUserId}/media_publish?creation_id={$mediaId}&access_token={$pageAccessToken}";
            $response = $client->post($url);
            $PublishResponse = json_decode($response->getBody(), true);
            $alerts = [
                [
                    'type' => 'success',
                    'title' => 'Success',
                    'message' => 'Post created successfully.',
                ],
            ];
            // Flash the array of alerts to the session
            request()->session()
                ->flash('alert', $alerts);

            return response()->json([
                'response' => $PublishResponse,
            ]);
        } else {
            //wait for status to be finished
            sleep(60);
            $url = "https://graph.facebook.com/{$apiVersion}/{$mediaId}?fields=status_code,status&access_token={$pageAccessToken}";

            $response = $client->get($url);

            $status = json_decode($response->getBody(), true);

            if ($status['status_code'] == 'FINISHED') {
                $url = "https://graph.facebook.com/{$apiVersion}/{$igUserId}/media_publish?creation_id={$mediaId}&access_token={$pageAccessToken}";
                $response = $client->post($url);
                $PublishResponse = json_decode($response->getBody(), true);
                $alerts = [
                    [
                        'type' => 'success',
                        'title' => 'Success',
                        'message' => 'Post created successfully.',
                    ],
                ];
                // Flash the array of alerts to the session
                request()->session()
                    ->flash('alert', $alerts);

                return response()->json([
                    'response' => $PublishResponse,
                ]);
            } else {
                sleep(60);
                $url = "https://graph.facebook.com/{$apiVersion}/{$mediaId}?fields=status_code,status&access_token={$pageAccessToken}";

                $response = $client->get($url);

                $status = json_decode($response->getBody(), true);

                if ($status['status_code'] == 'FINISHED') {
                    $url = "https://graph.facebook.com/{$apiVersion}/{$igUserId}/media_publish?creation_id={$mediaId}&access_token={$pageAccessToken}";
                    $response = $client->post($url);
                    $PublishResponse = json_decode($response->getBody(), true);
                    $alerts = [
                        [
                            'type' => 'success',
                            'title' => 'Success',
                            'message' => 'Post created successfully.',
                        ],
                    ];
                    // Flash the array of alerts to the session
                    request()->session()
                        ->flash('alert', $alerts);

                    return response()->json([
                        'response' => $PublishResponse,
                    ]);
                } else {
                    $alerts = [
                        [
                            'type' => 'error',
                            'title' => 'Error',
                            'message' => 'Something went wrong.',
                        ],
                    ];
                    // Flash the array of alerts to the session
                    request()->session()
                        ->flash('alert', $alerts);

                    return response()->json([
                        'response' => $status,
                    ]);
                }
            }
        }
    }
}
