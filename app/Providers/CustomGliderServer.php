<?php

namespace App\Providers;

use Illuminate\Support\Facades\Storage;
use League\Glide\Responses\LaravelResponseFactory;
use League\Glide\Server;
use League\Glide\ServerFactory;

class CustomServerFactory implements ServerFactory
{
    public function getFactory(): ServerFactory|Server
    {
        return ServerFactory::create([
            'driver' => 'gd',
            'response' => new LaravelResponseFactory(app('request')),
            'source_path_prefix' => 'public',
            'source' => Storage::disk('s3')->getDriver(),
            'cache' => Storage::disk('s3')->getDriver(),
            'cache_path_prefix' => '.cache',
            'max_image_size' => 2000 * 2000,
        ]);
    }
}
