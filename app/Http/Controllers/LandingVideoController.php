<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class LandingVideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        /*  $file->storeAs('public/images', 'logo.png'); */

        $path = Storage::disk('s3')->url('videos/landing.mp4');
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $path);
        // don't download content
        curl_setopt($ch, CURLOPT_NOBODY, 1);
        curl_setopt($ch, CURLOPT_FAILONERROR, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        $result = curl_exec($ch);
        curl_close($ch);
        if ($result !== false) {
            return $path;
        } else {
            return null;
        }
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
        $file = request()->file('file');

        $storagePath = Storage::disk('s3')->putFileAs(
            'videos',
            $file,
            'landing.mp4',
            'public'
        );

        return $storagePath;
    }

    /**
     * Display the specified resource.
     */
}
