<?php

namespace App\Filament\Resources\ApplicationContactResource\Pages;

use App\Filament\Resources\ApplicationContactResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListApplicationContacts extends ListRecords
{
    protected static string $resource = ApplicationContactResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
