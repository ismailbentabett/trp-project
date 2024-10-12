<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Concours') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Main Quill library -->
    <script src="//cdn.quilljs.com/1.3.6/quill.js"></script>
    <script src="//cdn.quilljs.com/1.3.6/quill.min.js"></script>

    <!-- Theme included stylesheets -->
    <link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
    <link href="//cdn.quilljs.com/1.3.6/quill.bubble.css" rel="stylesheet">

    <!-- Core build with no theme, formatting, non-essential modules -->
    <link href="//cdn.quilljs.com/1.3.6/quill.core.css" rel="stylesheet">
    <script src="//cdn.quilljs.com/1.3.6/quill.core.js"></script>

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="font-sans antialiased">


    <div class="min-h-full text-black">


        <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
            <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
                <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                <defs>
                    <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#9089FC"></stop>
                        <stop offset="1" stop-color="#FF80B5"></stop>
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <div class="px-6 pt-6 lg:px-8">
            <nav class="flex items-center justify-between" aria-label="Global">
                <div class="flex lg:flex-1">
                    <a href="{{ route('blog') }}" class="-m-1.5 p-1.5">
                        <span class="sr-only">Trp</span>
                        <img class="h-8" src="https://s3.eu-north-1.amazonaws.com/trp-upload-bucket/logo/logo.png" alt="">
                    </a>
                </div>


                <div class="flex flex-1 justify-end">
                    <a href="{{ route('login') }}" class="text-sm font-semibold leading-6 text-gray-900">Se connecter <span aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>
            <!-- Mobile menu, show/hide based on menu open state. -->

        </div>
        <div class="py-10">
            <div class="mx-auto  sm:px-6 lg:grid  lg:grid-cols-12 lg:gap-8 lg:px-8">
                <div class="hidden lg:col-span-3 lg:block xl:col-span-2">
                    <nav aria-label="Sidebar" class="sticky top-4 divide-y divide-gray-300">

                        <div class="pt-10">
                            <p class="px-3 text-sm font-medium text-gray-500" id="communities-headline">Catégories</p>
                            <div class="mt-3 space-y-2" aria-labelledby="communities-headline">
                                @foreach ($categories as $category)
                                <a href="{{route('blog.category', $category->id)}}" @class([ 'group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-900 gray-50 hover:bg-gray-50 hover:text-gray-900'=> request()->is('blog/category/'.$category->id),
                                    'group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900' => !request()->is('blog/category/'.$category->id),
                                    ])
                                    >
                                    <span class="truncate">{{$category->name}}</span>
                                </a>
                                @endforeach
                            </div>
                        </div>
                    </nav>
                </div>
                @yield('content')
                <aside class="hidden xl:col-span-4 xl:block">
                    <div class="sticky top-4 space-y-4">
                        <section aria-labelledby="who-to-follow-heading">
                            <div class="rounded-lg bg-white shadow">
                                <div class="p-6">
                                    <h2 id="who-to-follow-heading" class="text-base font-medium text-gray-900">Go To Site</h2>
                                    <div class="mt-6 flow-root">

                                    </div>
                                    <div class="">
                                        <a href="/}" class="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">Go To Site</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section aria-labelledby="trending-heading">
                            <div class="rounded-lg bg-white shadow">
                                <div class="p-6">
                                    <h2 id="trending-heading" class="text-base font-medium text-gray-900">Tendance</h2>
                                    <div class="mt-6 flow-root">
                                        <ul role="list" class="-my-4 divide-y divide-gray-200">
                                            @foreach ($mostViewedandLiked as $post)
                                            <li class="flex space-x-3 py-7">
                                                <div class="flex-shrink-0">
                                                    @if ($post->author->photo)
                                                    <img src="{{$post->author->photo_url}}" class="h-10 w-10 rounded-full" alt="" />
                                                    @else
                                                    <img class="h-10 w-10 rounded-full" src="{{ Avatar::create('Joko Widodo')->toGravatar() }}" />

                                                    @endif
                                                </div>
                                                <div class="min-w-0 flex-1">
                                                    <p class="text-sm text-gray-800">{{$post->title}}</p>
                                                    <div class="mt-2 flex">
                                                        <span class="inline-flex items-center text-sm">
                                                            <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                                                <!-- Heroicon name: mini/eye -->
                                                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                                                                    <path fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                                                </svg>
                                                                <span class="font-medium text-gray-900">{{$post->view_count}}</span>
                                                                <span class="sr-only">views</span>>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                            @endforeach

                                            <!-- More posts... -->
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                </aside>
            </div>
        </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
                <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                <defs>
                    <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#9089FC"></stop>
                        <stop offset="1" stop-color="#FF80B5"></stop>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    </div>

    <script type="text/javascript">
        $('ul.pagination').hide();
        $(function() {
            $('.scrolling-pagination').jscroll({
                autoTrigger: true,
                padding: 0,
                nextSelector: '.pagination li.active + li a',
                contentSelector: 'div.scrolling-pagination',
                callback: function() {
                    $('ul.pagination').remove();
                }
            });
        });
    </script>
    <script>
        var options = {
            readOnly: true,
            theme: 'snow'
        };
        var quill = new Quill('#editor', options);
    </script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jscroll/2.4.1/jquery.jscroll.min.js"></script>
</body>

</html>