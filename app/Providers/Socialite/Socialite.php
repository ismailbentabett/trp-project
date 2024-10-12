<?php

namespace App\Providers\Socialite;

use Laravel\Socialite\SocialiteManager;
use Laravel\Socialite\Two\SocialFaceBookProvider;

class Socialite extends SocialiteManager
{
    public function createFacebookDriver()
    {
        $config = $this->app['config']['services.social_facebook'];

        return $this->buildProvider(
            SocialFaceBookProvider::class,
            $config
        );
    }
}
