<?php

namespace App\Filament\Resources\TicketLabelResource\Pages;

use App\Filament\Resources\TicketLabelResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListTicketLabels extends ListRecords
{
    protected static string $resource = TicketLabelResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
