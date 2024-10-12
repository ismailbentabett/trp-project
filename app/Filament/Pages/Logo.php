<?php

namespace App\Filament\Pages;

use Filament\Pages\Page;

class Logo extends Page
{
    protected static ?string $navigationIcon = 'heroicon-m-paint-brush';

    protected static string $view = 'filament.pages.logo';

    protected static ?string $navigationGroup = 'Interface utilisateur';
}
