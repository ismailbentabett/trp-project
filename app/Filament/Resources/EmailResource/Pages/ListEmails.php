<?php

namespace App\Filament\Resources\EmailResource\Pages;

use App\Filament\Resources\EmailResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListEmails extends ListRecords
{
    protected static string $resource = EmailResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
