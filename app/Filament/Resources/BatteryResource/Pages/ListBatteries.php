<?php

namespace App\Filament\Resources\BatteryResource\Pages;

use App\Filament\Resources\BatteryResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListBatteries extends ListRecords
{
    protected static string $resource = BatteryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
