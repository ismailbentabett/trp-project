<?php

namespace App\Filament\Resources\ServiceContactResource\Pages;

use App\Filament\Resources\ServiceContactResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditServiceContact extends EditRecord
{
    protected static string $resource = ServiceContactResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
