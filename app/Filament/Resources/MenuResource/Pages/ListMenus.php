<?php

namespace App\Filament\Resources\MenuResource\Pages;

use App\Filament\Resources\MenuResource;
use App\Filament\Resources\MenuResource\Widgets\MenuWidget;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListMenus extends ListRecords
{
    protected static string $resource = MenuResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }

    protected function getHeaderWidgets(): array
    {
        return [
            MenuWidget::class,
        ];
    }
}
