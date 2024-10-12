<?php

namespace App\Filament\Pages;

use Filament\Pages\Page;

class Favicon extends Page
{
    protected static ?string $navigationIcon = 'heroicon-m-paint-brush';

    protected static string $view = 'filament.pages.favicon';

    protected static ?string $navigationGroup = 'Interface utilisateur';
}
