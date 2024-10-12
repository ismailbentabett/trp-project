<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostCategory;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::published()
            ->with(['author', 'category'])
            ->latest()->paginate(10);

        $categories = PostCategory::all()->take(7);

        //get 3 posts with the most views and the most likes in the same time
        $mostViewedandLiked = Post::published()
            ->with(['author', 'category'])
            ->orderBy('view_count', 'desc')
            ->take(5)
            ->get();

        return view('Blog/Blog 
        ', compact('posts', 'categories', 'mostViewedandLiked'));
    }

    public function category($id)
    {
        $posts = Post::published()
            ->with(['author', 'category'])
            ->where('blog_category_id', $id)
            ->latest()->paginate(10);

        $categories = PostCategory::all()->take(7);

        //get 3 posts with the most views and the most likes in the same time
        $mostViewedandLiked = Post::published()
            ->with(['author', 'category'])
            ->orderBy('view_count', 'desc')
            ->take(5)
            ->get();

        return view('Blog/BlogCategory 
        ', compact('posts', 'categories', 'mostViewedandLiked'));
    }

    //likepost
    public function likePost(Post $post)
    {
        $post->like(0);

        return back();
    }

    //unlikepost
    public function unLikePost(Post $post)
    {
        $post->unlike(0);

        return back();
    }

    //get post unpublished
    public function unpublished()
    {
        $drafts = Post::draft()->get();

        return view('posts.index', compact('drafts'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $post = Post::with(['author', 'category'])->find($id);
        $post->view_count = $post->view_count + 1;
        $post->save();
        $posts = Post::published()
            ->with(['author', 'category'])
            ->latest()->paginate(10);

        $categories = PostCategory::all()->take(7);

        //get 3 posts with the most views and the most likes in the same time
        $mostViewedandLiked = Post::published()
            ->with(['author', 'category'])
            ->orderBy('view_count', 'desc')
            ->take(5)
            ->get();

        return view('Blog/BlogPost 
    ', compact('posts', 'categories', 'mostViewedandLiked', 'post'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
