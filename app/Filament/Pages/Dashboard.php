<?php

namespace App\Filament\Pages;

use Filament\Panel;

class Dashboard extends \Filament\Pages\Dashboard
{
    protected static ?string $title = 'Tableau de bord';

    protected static ?string $navigationIcon = 'heroicon-s-home';

    public function panel(Panel $panel): Panel
    {
        return $panel
            ->title('Dashboard');
    }
}
