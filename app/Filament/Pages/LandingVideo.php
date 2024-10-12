<?php

namespace App\Filament\Pages;

use Filament\Pages\Page;

class LandingVideo extends Page
{
    protected static ?string $navigationIcon = 'heroicon-m-film';

    protected static ?string $navigationGroup = 'Interface utilisateur';

    protected static string $view = 'filament.pages.landing-video';
}
