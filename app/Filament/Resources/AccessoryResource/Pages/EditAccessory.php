<?php

namespace App\Filament\Resources\AccessoryResource\Pages;

use App\Filament\Resources\AccessoryResource;
use App\Models\Accessory;
use Filament\Actions;
use Filament\Actions\Action;
use Filament\Resources\Pages\EditRecord;

class EditAccessory extends EditRecord
{
    protected static string $resource = AccessoryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
            Action::make('Visit')
                ->url(fn (Accessory $record) => route('accessory.show', $record))
                ->openUrlInNewTab()
                ->icon('heroicon-s-arrow-top-right-on-square'),
        ];
    }
}
