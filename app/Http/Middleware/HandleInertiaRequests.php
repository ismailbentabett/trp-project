<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'is_admin' => fn () => $request->user()?->hasRole(['Admin']),
                'is_editor' => fn () => $request->user()?->hasRole(['Editor']),
                'is_super_admin' => fn () => $request->user()?->hasRole(['Super Admin']),
                'is_customer' => fn () => $request->user()?->hasRole(['Customer']),
                'is_user' => fn () => $request->user()?->hasRole(['User']),
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'csrf_token' => csrf_token(),
            'flash' => [
                'alert' => fn () => $request->session()->get('alert'),
            ],

        ];
    }
}
