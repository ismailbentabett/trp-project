<?php

namespace App\Filament\Resources\ModeleResource\Pages;

use App\Filament\Resources\ModeleResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListModeles extends ListRecords
{
    protected static string $resource = ModeleResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
