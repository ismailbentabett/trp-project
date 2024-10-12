<?php

namespace App\Filament\Resources\SpecialOrderResource\Pages;

use App\Filament\Resources\SpecialOrderResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListSpecialOrders extends ListRecords
{
    protected static string $resource = SpecialOrderResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
