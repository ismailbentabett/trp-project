<?php

namespace App\Filament\Resources\ServiceWarrantyResource\Pages;

use App\Filament\Resources\ServiceWarrantyResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListServiceWarranties extends ListRecords
{
    protected static string $resource = ServiceWarrantyResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
