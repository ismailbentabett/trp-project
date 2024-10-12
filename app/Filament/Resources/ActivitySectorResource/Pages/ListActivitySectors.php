<?php

namespace App\Filament\Resources\ActivitySectorResource\Pages;

use App\Filament\Resources\ActivitySectorResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListActivitySectors extends ListRecords
{
    protected static string $resource = ActivitySectorResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
