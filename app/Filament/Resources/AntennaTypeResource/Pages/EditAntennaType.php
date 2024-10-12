<?php

namespace App\Filament\Resources\AntennaTypeResource\Pages;

use App\Filament\Resources\AntennaTypeResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditAntennaType extends EditRecord
{
    protected static string $resource = AntennaTypeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
