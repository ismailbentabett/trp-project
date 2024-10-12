<?php

namespace App\Filament\Resources\BatteryResource\Pages;

use App\Filament\Resources\BatteryResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditBattery extends EditRecord
{
    protected static string $resource = BatteryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
