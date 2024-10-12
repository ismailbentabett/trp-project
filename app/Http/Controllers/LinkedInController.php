<?php

namespace App\Http\Controllers;

use Laravel\Socialite\Facades\Socialite;

class LinkedInController extends Controller
{
    public function redirectToProvider()
    {
        return Socialite::driver('linkedin')->redirect();
    }

    public function handleProviderCallback()
    {
        try {
            $linkedinUser = Socialite::driver('linkedin')->user();

            // You can access the LinkedIn user's data like this:
            $linkedinAccessToken = $linkedinUser->token;
            $linkedinUserId = $linkedinUser->getId();

            // Store the access token and user ID in your database or session
            // For demonstration, we'll store them in the session
            session(['linkedin_access_token' => $linkedinAccessToken]);
            session(['linkedin_user_id' => $linkedinUserId]);

            return redirect('/linkedin/share');
        } catch (\Exception $e) {
            // Handle exceptions, e.g., if the user cancels the LinkedIn login
            return redirect('/')->with('error', 'LinkedIn login failed.');
        }
    }

    public function sharePost()
    {
        // Retrieve the access token and user ID from the session
        $linkedinAccessToken = session('linkedin_access_token');
        $linkedinUserId = session('linkedin_user_id');

        // Implement logic to share a post on LinkedIn using the access token
        // Refer to the code you provided in your original question for this logic
        // Make sure to use the $linkedinAccessToken and $linkedinUserId to authenticate the API requests

        // Return a response indicating success or failure
        return 'Post shared on LinkedIn!';
    }
}
