<?php

namespace App\Filament\Resources\ActivitySectorContactResource\Pages;

use App\Filament\Resources\ActivitySectorContactResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListActivitySectorContacts extends ListRecords
{
    protected static string $resource = ActivitySectorContactResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
