<?php

namespace App\Http\Controllers;

use App\Models\Logo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class LogoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Path to the S3 image
        $path = Storage::disk('s3')->url('logo/logo.png');

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
            return '';
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
            'logo',
            $file,
            'logo.png',
            'public'
        );

        return $storagePath;
    }

    /**
     * Display the specified resource.
     */
    public function show(Logo $logo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Logo $logo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Logo $logo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Logo $logo)
    {
        //
    }
}
