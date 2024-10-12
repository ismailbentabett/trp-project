<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    public function uploadAvatar(Request $request)
    {
        $user = User::find(Auth::user()->id);
        if ($request->hasFile('avatar')) {

            $file = $request->file('avatar');
            $fileName = $file->getClientOriginalName();

            // Store a file
            $path = Storage::disk('s3')->put('avatars', $file, 'public');

            $path = Storage::disk('s3')->url($path);

            $user->avatar = $path;
            $user->save();
        }

        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Your avatar has been updated successfully',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return redirect()->back();
    }

    public function uploadCover(Request $request)
    {
        $user = User::find(Auth::user()->id);
        if ($request->hasFile('cover')) {

            $file = $request->file('cover');
            $fileName = $file->getClientOriginalName();

            // Store a file
            $path = Storage::disk('s3')->put('covers', $file, 'public');

            $path = Storage::disk('s3')->url($path);

            $user->cover = $path;
            $user->save();
        }

        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Your cover has been updated successfully',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return redirect()->back();
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {

        $request->user()->fill($request->all());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Your profile has been updated successfully',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return Redirect::back()->with('status', 'profile-information-updated');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Your account has been deleted successfully',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return Redirect::to('/');
    }
}
