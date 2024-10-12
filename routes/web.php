<?php

use App\Http\Controllers\AccessoryController;
use App\Http\Controllers\ActivitySectorController;
use App\Http\Controllers\AiGeneratorController;
use App\Http\Controllers\ApplicationContactController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\CarouselController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ContactUsFormController;
use App\Http\Controllers\ContentGeneratorController;
use App\Http\Controllers\FacebookPageController;
use App\Http\Controllers\FaviconController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\GenericController;
use App\Http\Controllers\GlobalFilterController;
use App\Http\Controllers\HeaderController;
use App\Http\Controllers\LandingVideoController;
use App\Http\Controllers\LinkedInController;
use App\Http\Controllers\LogoController;
use App\Http\Controllers\newsLetterController;
use App\Http\Controllers\OfferController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServiceContactController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SocialAuthController;
use App\Http\Controllers\SpecialOrderController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\UploadTemporaryImageController;
use App\Models\Brand;
use App\Models\Carousel;
use App\Models\Category;
use App\Models\Menu;
use App\Models\Offer;
use App\Models\Post;
use App\Models\Product;
use App\Models\SpecialOrder;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('auth')->group(function () {

    Route::get('/cart/count', [CartController::class, 'getCartCount'])->name('getCartCount');
    Route::get('/activity-sector/{id}', [ActivitySectorController::class, 'show'])->name('activitysector.show');
    Route::post('/activity-sector/reserve', [ActivitySectorController::class, 'reserve'])->name('activitysector.reserve');
    Route::post('/application/reserve', [ApplicationController::class, 'reserve'])->name('application.reserve');

    Route::post('/generic/reserve', [GenericController::class, 'reserve'])->name('generic.reserve');

    Route::get('/globalfilter/products', [GlobalFilterController::class, 'FilterProducts'])->name('FilterProductsGet');
    Route::get('/globalfilter/accessories', [GlobalFilterController::class, 'FilterAccessories'])->name('FilterAccessoriesGet');

    Route::post('/globalfilter/products', [GlobalFilterController::class, 'FilterProducts'])->name('FilterProductsPost');
    Route::post('/globalfilter/accessories', [GlobalFilterController::class, 'FilterAccessories'])->name('FilterAccessoriesPost');

    Route::get('/globalfilter', [GlobalFilterController::class, 'index'])->name('globalfilterindex');

    Route::get('/globalfilter/get-product-accessories-by-id/{id}', [GlobalFilterController::class, 'GetProductAccessories'])->name('GetProductAccessories');

    Route::post('/logo', [LogoController::class, 'store'])->name('logo.store');

    Route::get('/application/{id}', [ApplicationController::class, 'show'])->name('application.show');
    Route::get('/service/{id}', [ServiceController::class, 'show'])->name('service.show');

    /******************************************* ECOMMERCE *******************************************/
    //Product
    Route::get('/product/{id}', [ProductController::class, 'show'])->name('product.show');

    Route::post('/landing-video', [LandingVideoController::class, 'store'])->name('landing.video.store');

    Route::post('/favicon', [FaviconController::class, 'store'])->name('favicon.store');

    /******************************************* SOCIAL MEDIA *******************************************/
    //Facebook & Instagram

    Route::get('auth/facebook', [FacebookPageController::class, 'authenticateUser'])->name('social.pages.auth.facebook');
    Route::get('auth/facebook/callback', [FacebookPageController::class, 'handleCallback']);
    Route::get('facebook/page/catalogs', [FacebookPageController::class, 'getCatalogs']);

    Route::get('facebook/page/operations', [FacebookPageController::class, 'performOperations']);
    Route::post('facebook/post/images', [FacebookPageController::class, 'createFacebookPostWithImages'])->name('facebook.post.images');
    Route::post('facebook/post/images/cloudinary', [FacebookPageController::class, 'uploadImagesToCloudinary'])->name('facebook.post.images.cloudinary');
    Route::post('facebook/post/video/cloudinary', [FacebookPageController::class, 'UploadVideoToCloudinary'])->name('facebook.post.video.cloudinary');
    Route::post('facebook/post/videos', [FacebookPageController::class, 'createFacebookPostWithVideo'])->name('facebook.post.videos');

    Route::post('instagram/post/carousel', [FacebookPageController::class, 'PostIntagramCarousel'])->name('instagram.post.carousel');
    Route::post('instagram/post/reel', [FacebookPageController::class, 'PostInstagramReel'])->name('instagram.post.reel');
    Route::post('instagram/story/image', [FacebookPageController::class, 'PostInstagramImageStory'])->name('instagram.post.story.image');
    Route::post('instagram/story/video', [FacebookPageController::class, 'PostInstagramVideoStory'])->name('instagram.post.story.video');
    Route::post('instagram/post/image', [FacebookPageController::class, 'SingleImagePostOnInstagram'])->name('instagram.post.image');

    //LinkedIn
    Route::get('/linkedin/login', [LinkedInController::class, 'redirectToProvider']);
    Route::get('/linkedin/callback', [LinkedInController::class, 'handleProviderCallback']);
    Route::get('/linkedin/share', [LinkedInController::class, 'sharePost']);

    /* Temporary Image Upload */
    Route::post('/upload', UploadTemporaryImageController::class);

    //filtering
    Route::get('accessories', [AccessoryController::class, 'index'])->name('accessories.index');
    Route::post('accessories/filter', [AccessoryController::class, 'FilterAccessories'])->name('accessories.filter');
    Route::get('products', [ProductController::class, 'index'])->name('products.index');
    Route::post('products/filter', [ProductController::class, 'FilterProducts'])->name('products.filter');
    Route::get('products/featured', [ProductController::class, 'getFeaturedProducts'])->name('products.featured');
    //CustomersAlsoBoaght OrderController
    Route::get('products/also-bought/{id}', [OrderController::class, 'CustomersAlsoBoaght'])->name('products.also-bought');

    Route::get('product/{id}/feedback/create', [FeedbackController::class, 'create'])->name('product.feedback.create');
    Route::post('product/feedback/store', [FeedbackController::class, 'store'])->name('product.feedback.store');

    //accessory
    Route::get('/accessory/{id}', [AccessoryController::class, 'show'])->name('accessory.show');

    //RadiocommunicationForm
    Route::get('/radiocommunication', function () {
        return Inertia::render('Services/RadiocommunicationForm');
    })->name('radiocommunication');

    /*** Profile ***/

    Route::get('/settings', [ProfileController::class, 'edit'])->name('settings.edit');
    Route::patch('/settings', [ProfileController::class, 'update'])->name('settings.update');
    Route::delete('/settings', [ProfileController::class, 'destroy'])->name('settings.destroy');

    Route::get('/settings/profile', function () {
        return Inertia::render('Profile/Partials/Profile');
    })->name('settings.profile');
    Route::get('/settings/security', function () {
        return Inertia::render('Profile/Partials/Security');
    })->name('settings.security');
    Route::get('/settings/account', function () {
        return Inertia::render('Profile/Partials/Account');
    })->name('settings.account');

    Route::get('/profile', function () {

        return Inertia::render('Profile/Profile');
    })->middleware(['auth', 'verified'])->name('user');

    Route::post('/profile/upload-avatar', [ProfileController::class, 'uploadAvatar'])->name('user.upload.avatar');

    Route::post('/profile/upload-cover', [ProfileController::class, 'uploadCover'])->name('user.upload.cover');

    //offer
    Route::get('/offer/{id}', [OfferController::class, 'show'])->name('offer.show');

    //Oredrs
    Route::prefix('orders')->group(
        function () {

            Route::post('/checkout', [OrderController::class, 'checkout'])->name('checkout');
            Route::get('/checkout', [OrderController::class, 'CheckoutPage'])->name('checkout.show');
            Route::get('/', [OrderController::class, 'index'])->name('orders');
            Route::get('/purchase-history', [OrderController::class, 'PurchaseHistory'])->name('purchase-history');
            Route::get('/my', [OrderController::class, 'getMyOrderItems'])->name('getMyOrderItems');
            Route::get('/myorder', [OrderController::class, 'getMyOrder'])->name('getMyOrder');
            Route::get('/{order}', [OrderController::class, 'show'])->name('orders.show');
            Route::get('/{order}/edit', [OrderController::class, 'EditOrderPage'])->name('orders.EditOrderPage');
            Route::post('/{order}/edit', [OrderController::class, 'EditOrderData'])->name('orders.EditOrderData');
            Route::delete('/{order_id}/item/{id}', [OrderController::class, 'removeOrderItem'])->name('orders.removeOrderItem');
        }
    );

    //Cart

    Route::prefix('cart')->group(function () {
        Route::post('add', [CartController::class, 'addToCart'])->name('cart.add');
        Route::post('remove/{product}', [CartController::class, 'removeFromCart'])->name('cart.remove');
        Route::get('/', [CartController::class, 'index'])->name('cart.index');
        Route::get('/my', [CartController::class, 'getMyCartItems'])->name('cart.getMyCartItems');
        Route::delete('/{id}', [CartController::class, 'destroy'])->name('cart.destroy');
        Route::post('/update-quantity/{id}', [CartController::class, 'updateCatyItemQuantity'])->name('cart.updateCatyItemQuantity');
    });

    //speacial order
    Route::prefix('special')->group(function () {
        Route::post('add-accessory', [SpecialOrderController::class, 'addAccessory'])->name('special-order.add-accessory');
        Route::post('add-offer', [SpecialOrderController::class, 'addOffer'])->name('special-order.add-offer');

        //speacial cjeckout inertia
        Route::get('/checkout', function () {
            $accessoryId = request()->query('accessory_id');
            $offerId = request()->query('offer_id');

            return Inertia::render(
                'SpecialOrder/Checkout',
                [
                    'accessoryId' => $accessoryId,
                    'offerId' => $offerId,
                ]
            );
        })->name('special-order.checkout');

        //speacial order
        Route::get('/orders', function () {
            $speacialOrders = SpecialOrder::where('user_id', auth()->user()->id)
                ->with('accessory.medias')
                ->with('offer.products.medias')
                ->latest()
                ->paginate(10);

            return Inertia::render(
                'SpecialOrder/Orders',
                [
                    'orders' => $speacialOrders,
                ]
            );
        })->name('special-order');

        Route::get('/accessory/{id}', [SpecialOrderController::class, 'getAccessory'])->name('special-order.get-accessory');
        Route::get('/offer/{id}', [SpecialOrderController::class, 'getOffer'])->name('special-order.get-offer');
    });

    //ticketing
    Route::prefix('tickets')->group(
        function () {
            Route::get('/create', [TicketController::class, 'create'])->name('tickets.create');
            Route::post('/store', [TicketController::class, 'store'])->name('tickets.store');
            Route::get('/discussion/{id}', [TicketController::class, 'show'])->name('tickets.show');
            Route::post('/close-as-resolved', [TicketController::class, 'closeTicketAsResolved'])->name('tickets.close.as.resolved');
            Route::post('/close-as-unresolved', [TicketController::class, 'closeTicketAsUnresolved'])->name('tickets.close.as.unresolved');
            Route::post('/reopen', [TicketController::class, 'reopenTicket'])->name('tickets.reopen');
            Route::post('/reopen-as-unresolved', [TicketController::class, 'reopenTicketAsUnresolved'])->name('tickets.reopen.as.unresolved');
            Route::post('/message', [TicketController::class, 'sendMessage'])->name('tickets.message');
            Route::get('/my', [TicketController::class, 'myTickets'])->name('myTickets');
            Route::get('/closed', [TicketController::class, 'myTicketsClosed'])->name('closedTickets');
            Route::get('/opened', [TicketController::class, 'myTicketsOpen'])->name('openTickets');
            Route::post('/assign', [TicketController::class, 'assignToUser'])->name('tickets.assign');
        }
    );

    Route::middleware(['CheckRole'])->group(function () {

        Route::prefix('tickets')->group(
            function () {
                Route::get('/', [TicketController::class, 'index'])->name('index');

                Route::get('/assigned-to-me', [TicketController::class, 'assignedToMe'])->name('getAssignedToMe');
            }
        );
        //AiGenerator
        Route::get('/generate-content', [ContentGeneratorController::class, 'generateContent']);
        Route::post('/generate', [AiGeneratorController::class, 'AiContentGenerator'])->name('generate');
        Route::get('/aigenerate', function () {

            $instagram_id = Cookie::get('instagram_id');
            $page_token = Cookie::get('page_token');
            $page_id = Cookie::get('page_id');
            $facebookCookies = $instagram_id && $page_token && $page_id;

            return Inertia::render('AiGenerator/AiGenerator', [
                'facebookCookies' => $facebookCookies,
            ]);
        })->name('aigenerate');
    });
});

//haeder
Route::get('/header', [HeaderController::class, 'index'])->name('header.index');
Route::get('/faq', function () {
    return Inertia::render('FAQ');
})->name('faq');
Route::get('/support', function () {
  return Inertia::render('Support');
})->name('support');


Route::get('/', function () {
    $carousel = Carousel::with('media')->get();
    $featuredProducts = Product::with('medias')->where('featured', 1)->take(5)->get();
    $offers = Offer::with('media')->with('products.medias')->take(4)->get();

    $mostViewedandLiked = Post::published()
        ->with(['author', 'category'])
        ->orderBy('view_count', 'desc')
        ->take(3)
        ->get();

    return Inertia::render('Landing', [
        'carousel' => $carousel,
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'featuredProducts' => $featuredProducts,
        'offers' => $offers,
        'posts' => $mostViewedandLiked,
    ]);
})->name('home');

//sendNewsletter
Route::get('newsletter/send', [newsLetterController::class, 'sendNewsletter']);
Route::get('/contact-us', function () {
    return Inertia::render('Contact/ContactUs');
})->name('contact-us');

Route::get('/contact', [ContactUsFormController::class, 'index']);
Route::post('/contact', [ContactUsFormController::class, 'ContactUsForm'])->name('contact.store');

Route::post('/application/contact', [ApplicationContactController::class, 'ContactUsForm'])->name('application.contact.store');
Route::post('/service/contact', [ServiceContactController::class, 'ContactUsForm'])->name('service.contact.store');

//blog
Route::get('/blog', [PostController::class, 'index'])->name('blog');
Route::get('/blog/category/{id}', [PostController::class, 'category'])->name('blog.category');
Route::get('/blog/post/{id}', [PostController::class, 'show'])->name('blog.post');

//like post
Route::post('/like/{post}', [PostController::class, 'likePost'])->name('like.post');
Route::post('/unlike/{post}', [PostController::class, 'unLikePost'])->name('unlike.post');

//oauth
Route::controller(SocialAuthController::class)->group(function () {

    Route::get('auth/google', 'redirectToGoogle')->name('auth.google');

    Route::get('auth/google/callback', 'handleGoogleCallback');
});

//navbar
Route::get('/navbar', function () {
    $menuItems = Menu::all();

    return response()->json($menuItems);
});

Route::get('/categories', function () {
    $categories = Category::with('image')->latest()
        ->paginate(10);

    return Inertia::render('Categories', [
        'categories' => $categories,
    ]);
});
Route::get('/brands', function () {
    $categories = Brand::with('image')->latest()
        ->paginate(10);

    return Inertia::render('Brands', [
        'brands' => $categories,
    ]);
});

//carousel
Route::get('/carousel', [CarouselController::class, 'index'])->name('carousel.index');

//upload logo

Route::get('/logo', [LogoController::class, 'index'])->name('logo.index');
Route::get('/favicon', [FaviconController::class, 'index'])->name('favicon.index');

Route::get('/landing-video', [LandingVideoController::class, 'index'])->name('landing.video.index');

require __DIR__.'/auth.php';
