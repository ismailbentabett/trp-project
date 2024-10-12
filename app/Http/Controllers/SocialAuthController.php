<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;

class SocialAuthController extends Controller
{
    //
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * Obtain the user information from GitHub.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Routing\Redirector
     */
    public function handleGoogleCallback()
    {
        try {
            $user = Socialite::driver('google')->user();
            $finduser = User::where('google_id', $user->id)->first();
            if ($finduser) {
                Auth::login($finduser);

                return redirect('/profile');
            } else {
                //user is not yet created, so create first
                $randomPassword = Str::random(10);

                $newUser = User::create([
                    'name' => $user->name,
                    'email' => $user->email,
                    'google_id' => $user->id,
                    'password' => Hash::make($randomPassword),
                ]);

                $customerRole = Role::where('name', 'Customer')->first();
                $userRole = Role::where('name', 'User')->first();

                $newUser->assignRole($customerRole);
                $newUser->assignRole($userRole);

                $newUser->save();
                //login as the new user
                Auth::login($newUser);

                return redirect('/profile');
            }
        } catch (Exception $e) {
            dd($e->getMessage());
        }
    }

    public function redirectToFacebook()
    {

        return Socialite::with('social_facebook')->redirect();
    }

    /**
     * Create a new controller instance.

     *

     * @return void
     */
    public function handleFacebookCallback()
    {

        $user = Socialite::with('social_facebook')->user();

        $finduser = User::where('facebook_id', $user->id)->first();

        if ($finduser) {

            Auth::login($finduser);

            return redirect()->intended('dashboard');
        } else {
            $randomPassword = Str::random(10);
            $newUser = User::updateOrCreate(['email' => $user->email], [

                'name' => $user->name,

                'facebook_id' => $user->id,

                'password' => Hash::make($randomPassword),

            ]);

            Auth::login($newUser);

            return redirect()->intended('dashboard');
        }

    }

    public function redirectToLinkedin()
    {

        return Socialite::driver('social_linkedin')->redirect();
    }

    public function handleLinkedinCallback()
    {

        try {

            $user = Socialite::driver('social_linkedin')->user();

            $finduser = User::where('linkedin_id', $user->id)->first();

            if ($finduser) {

                Auth::login($finduser);

                return redirect()->intended('dashboard');
            } else {
                $randomPassword = Str::random(10);
                $newUser = User::updateOrCreate(['email' => $user->email], [

                    'name' => $user->name,

                    'linkedin_id' => $user->id,

                    'password' => Hash::make($randomPassword),

                ]);

                Auth::login($newUser);

                return redirect()->intended('dashboard');
            }
        } catch (Exception $e) {

            dd($e->getMessage());
        }
    }
}
