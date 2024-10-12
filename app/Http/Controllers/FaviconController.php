<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FaviconController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Path to the S3 image
        $path = Storage::disk('s3')->url('favicon/favicon.ico');

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $path);
        // Only retrieve headers, not the content
        curl_setopt($ch, CURLOPT_NOBODY, 1);
        curl_setopt($ch, CURLOPT_FAILONERROR, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        // Execute the cURL request
        curl_exec($ch);

        // Get the HTTP status code
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

        curl_close($ch);

        if ($httpCode === 200) {
            // The image exists on S3, and you can proceed accordingly.
            return $path;
        } else {
            // The image does not exist or there was an error.
            return 'image/favicon.ico';
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
        $file = $request->file('file');
        $storagePath = Storage::disk('s3')->putFileAs(
            'favicon',
            $file,
            'favicon.ico',
            'public'
        );

        return $storagePath;
    }
}
