<?php

namespace App\Filament\Resources\ModeleResource\Pages;

use App\Filament\Resources\ModeleResource;
use App\Models\Modele;
use Filament\Actions;
use Filament\Actions\Action;
use Filament\Resources\Pages\EditRecord;

class EditModele extends EditRecord
{
    protected static string $resource = ModeleResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
            /*    Action::make('Visit')
                ->url(fn (Modele $record) => route('modele.show', $record))
                ->openUrlInNewTab()
                ->icon('heroicon-s-arrow-top-right-on-square') */
        ];
    }
}
