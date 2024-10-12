<?php

namespace App\Providers\Filament;

use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Panel;
use Filament\PanelProvider;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\AuthenticateSession;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->favicon('https://s3.eu-north-1.amazonaws.com/trp-upload-bucket/favicon/favicon.ico')
            ->navigationGroups([
                'Contenu',
                'Interface utilisateur',
                'E-commerce',
                'Application',
                'Service',
                'Feedback et soutien',
                'Blog',
                'Contact',
                'Newsletter',
                'Paramètres',
                'statistics',
            ])
            ->plugins([
                \Awcodes\Curator\CuratorPlugin::make()
                    ->label('Media')
                    ->pluralLabel('Media')
                    ->navigationIcon('heroicon-s-photo')
                    ->navigationGroup('Contenu')
                    ->navigationSort(3)
                    ->navigationCountBadge(),

            ])

            ->sidebarCollapsibleOnDesktop()
            ->sidebarCollapsibleOnDesktop()
            ->default()
            ->id('admin')
            ->path('admin')
            ->login()
            ->colors([
                'primary' => [
                    50 => '238, 252, 255',
                    100 => '207, 248, 254',
                    200 => '164, 240, 253',
                    300 => '102, 228, 250',
                    400 => '33, 205, 239',
                    500 => '5, 185, 224',
                    600 => '7, 140, 179',
                    700 => '13, 112, 145',
                    800 => '20, 91, 118',
                    900 => '22, 76, 99',
                    950 => '8, 49, 68',
                ],
            ])
            ->viteTheme('resources/css/filament/admin/theme.css')
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\\Filament\\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\\Filament\\Pages')
            ->pages([])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\\Filament\\Widgets')
            ->widgets([])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}
