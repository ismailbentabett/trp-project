<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    // app/Http/Middleware/CheckRole.php
    public function handle(Request $request, Closure $next): Response
    {

        if ($request->user() && $request->user()->hasRole(['Admin', 'Editor', 'Super Admin'])) {
            return $next($request);
        }

        abort(403, 'Unauthorized action.');
    }
}
