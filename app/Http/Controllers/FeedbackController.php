<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($id)
    {
        $product = Product::find($id)->load('medias');
        $user = auth()->user();

        return Inertia::render('CreateFeedback', [
            'product' => $product,
            'user' => $user,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = auth()->user();
        $review = $request->review;
        $title = $request->title;
        $rating = $request->rating;
        $product = Product::find($request->product_id);
        $product->review(
            $review,
            $user,
            $rating,
            $title
        );

        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Your review has been added successfully',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);
    }

    /**
     * Display the specified resource.
     */
    public function show(Feedback $feedback)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Feedback $feedback)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Feedback $feedback)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feedback $feedback)
    {
        //
    }
}
