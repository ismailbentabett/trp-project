<?php

namespace App\Filament\Resources\ServiceContactResource\Pages;

use App\Filament\Resources\ServiceContactResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListServiceContacts extends ListRecords
{
    protected static string $resource = ServiceContactResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
