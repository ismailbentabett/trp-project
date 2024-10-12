<?php

namespace App\Filament\Resources\ActivitySectorResource\Pages;

use App\Filament\Resources\ActivitySectorResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditActivitySector extends EditRecord
{
    protected static string $resource = ActivitySectorResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
