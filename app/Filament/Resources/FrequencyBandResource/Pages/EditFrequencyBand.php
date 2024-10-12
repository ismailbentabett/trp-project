<?php

namespace App\Filament\Resources\FrequencyBandResource\Pages;

use App\Filament\Resources\FrequencyBandResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditFrequencyBand extends EditRecord
{
    protected static string $resource = FrequencyBandResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
