<?php

namespace App\Filament\Resources\TypeResource\Pages;

use App\Filament\Resources\TypeResource;
use Filament\Actions;
use Filament\Actions\Action;
use Filament\Resources\Pages\EditRecord;

class EditType extends EditRecord
{
    protected static string $resource = TypeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
            /*    Action::make('Visit')
                ->url(fn (Series $record) => route('series.show', $record))
                ->openUrlInNewTab()
                ->icon('heroicon-s-arrow-top-right-on-square') */
        ];
    }
}
