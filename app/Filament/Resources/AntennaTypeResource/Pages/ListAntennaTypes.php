<?php

namespace App\Filament\Resources\AntennaTypeResource\Pages;

use App\Filament\Resources\AntennaTypeResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListAntennaTypes extends ListRecords
{
    protected static string $resource = AntennaTypeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
