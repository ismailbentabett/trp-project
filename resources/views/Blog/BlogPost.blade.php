<!-- resources/views/blog.layout.blade.php -->
@extends ('Layouts.blog')
@section('content')

<main class="lg:col-span-9 xl:col-span-6">

    <div class="mt-4">
        <h1 class="sr-only">Recent questions</h1>
        <div class="scrolling-pagination">

            <ul role="list" class="space-y-4">
                <li class="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6">

                    <article aria-labelledby="question-title-81614">
                        <div>
                            <div class="flex space-x-3">
                                <div class="flex-shrink-0">
                                    @if ($post->author->photo)
                                    <img src="{{$post->author->photo_url}}" class="h-10 w-10 rounded-full" alt="" />
                                    @else
                                    <img class="h-10 w-10 rounded-full" src="{{ Avatar::create('Joko Widodo')->toGravatar() }}" />

                                    @endif

                                </div>
                                <div class="min-w-0 flex-1">
                                    <p class="text-sm font-medium text-gray-900">
                                        <a href="#" class="">{{$post->author->name}}</a>
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        <a href="#" class="">
                                            <time>{{date('d-m-Y', strtotime($post->created_at))}}
                                            </time>
                                        </a>
                                    </p>
                                </div>






                            </div>
                            @if ($post->banner_url != null)
                            <a  href="{{ route('blog.post', $post->id) }}" class="relative w-full my-2 cursor-pointer">
                                <img src="{{ $post->banner_url }}" class="w-full h-96 object-cover rounded-lg" alt="...">
</a>

                            @endif
                            <a href="{{ route('blog.post', $post->id) }}" id="question-title-81614" class="mt-4 text-base font-medium text-gray-900 break-all	cursor-pointer">{{$post->title}}</a>
                        </div>
                        <a href="{{ route('blog.post', $post->id) }}" class="mt-2 space-y-4 text-sm text-gray-700 turnicate break-all cursor-pointer	">
                            <div id="editor">
                                {{
                            $post->content
                        }}
                            </div>

                        </a>
                        <div class="mt-6 flex justify-between space-x-8">
                            <div class="flex space-x-6 items-center">
                                <span class="inline-flex items-center text-sm">

                                    @if ($post->liked())
                                    <form action="{{ route('unlike.post', $post->id) }}" method="post" class="inline-flex items-center text-sm">
                                        @csrf

                                        <button type="submit" class="inline-flex space-x-2 text-cerulean-500 hover:text-cerulean-500">
                                            <!-- Heroicon name: mini/hand-thumb-up -->
                                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z" />
                                            </svg>
                                            <span class="font-medium text-gray-900">{{ $post->likeCount }}</span>
                                            <span class="sr-only">likes</span>
                                        </button>
                                    </form>
                                    @else
                                    <form action="{{ route('like.post', $post->id) }}" method="post" class="inline-flex items-center text-sm">
                                        @csrf
                                        <button type="submit" class="inline-flex space-x-2 text-gray-400 hover:text-cerulean-500">
                                            <!-- Heroicon name: mini/hand-thumb-up -->
                                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z" />
                                            </svg>
                                            <span class="font-medium text-gray-900">{{ $post->likeCount }}</span>
                                            <span class="sr-only">likes</span>
                                        </button>
                                    </form>
                                    @endif
                                </span>
                                <span class="inline-flex items-center text-sm">
                                    <button type="submit" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                        <!-- Heroicon name: mini/eye -->
                                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                                            <path fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                        </svg>
                                        <span class="font-medium text-gray-900">{{$post->view_count}}</span>
                                        <span class="sr-only">views</span>
                                    </button>
                                </span>

                            </div>

                        </div>
                    </article>
                </li>


                <!-- More questions... -->
            </ul>
        </div>
    </div>
</main>

@endsection