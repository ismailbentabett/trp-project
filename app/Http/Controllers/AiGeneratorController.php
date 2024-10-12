<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request as GuzzelHttpRequest;
use Illuminate\Http\Request;
use OpenAI;

class AiGeneratorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function generateImage(Request $request)
    {
        $client = new Client([
            'verify' => false,
        ]);
        $headers = [
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer '.config('services.chatgpt'),
        ];
        $body = json_encode($request->all());

        $req = new GuzzelHttpRequest('POST', 'https://api.openai.com/v1/images/generations', $headers, $body);
        $res = $client->sendAsync($req)->wait();

        return response()->json(json_decode($res->getBody()->getContents()));
    }

    public function AiContentGenerator(Request $request)
    {

        $type = $request->type;
        $title = $request->title;
        $length = $request->length;
        $topic = $request->topic;
        $tone = $request->tone;
        $platform = $request->platform;
        $language = $request->language;
        $client = OpenAI::client(env('OPENAI_API_KEY'));

        if ($type == 'Social Media') {
        }

        $prompt = '';

        switch ($type) {
            case 'Social Media Post':
                $prompt = "Craft an attention-grabbing $length-word social media post on $platform, discussing effective marketing strategies for $title, and infuse it with a $tone that engages and educates your audience.";
                break;
            case 'Marketing Plan':
                $prompt = "Develop a comprehensive $length-word marketing plan for $title, outlining key tactics and strategies to achieve business growth, and maintaining a $tone that conveys professionalism and strategy.";
                break;
            case 'Content Creation Strategy':
                $prompt = "Create a $length-word content creation strategy for $platform, focusing on optimizing content for $topic, and adopting a $tone that emphasizes creativity and engagement.";
                break;
            case 'Business Proposal':
                $prompt = "Write a persuasive $length-word business proposal for $title, showcasing your services or products, and using a $tone that emphasizes value and credibility.";
                break;
            case 'Market Research Report':
                $prompt = "Compile a detailed $length-word market research report on $topic, presenting key findings and insights, and maintaining a $tone that is data-driven and analytical.";
                break;
            case 'Email Marketing Campaign':
                $prompt = "Design a compelling $length-word email marketing campaign for $title, emphasizing the benefits and value proposition, and adopting a $tone that encourages click-throughs and conversions.";
                break;
            case 'Business Blog Post':
                $prompt = "Write an informative $length-word blog post for your business on the topic of $topic, offering valuable insights and adopting a $tone that positions your brand as an industry authority.";
                break;
            case 'Content Calendar':
                $prompt = "Create a $length-word content calendar for $platform, mapping out content topics and publication dates, and using a $tone that ensures consistency and engagement.";
                break;
            case 'Advertising Strategy':
                $prompt = "Develop an effective $length-word advertising strategy for $title, outlining budget allocation and targeting options, and maintaining a $tone that conveys ROI and results.";
                break;
            case 'Business Presentation':
                $prompt = "Prepare a compelling $length-word business presentation on $topic, incorporating visual aids and adopting a $tone that keeps your audience engaged and informed.";
                break;
            case 'Custom':
                $prompt = $request->prompt;
                break;
        }

        $result = $client->completions()->create([
            'model' => 'text-davinci-003',
            'max_tokens' => 100,
            'temperature' => 0.7,
            'top_p' => 1,
            'frequency_penalty' => 0,
            'presence_penalty' => 0,
            'best_of' => 1,
            'prompt' => $prompt.' '.'in '.$language.' language',

        ]);
        $content = trim($result['choices'][0]['text']);

        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Your content has been generated successfully.',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return response()->json([
            'content' => $content,
            'prompt' => $prompt,
        ]);
    }
}
