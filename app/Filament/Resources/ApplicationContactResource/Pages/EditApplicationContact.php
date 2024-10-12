<?php

namespace App\Filament\Resources\ApplicationContactResource\Pages;

use App\Filament\Resources\ApplicationContactResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditApplicationContact extends EditRecord
{
    protected static string $resource = ApplicationContactResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
