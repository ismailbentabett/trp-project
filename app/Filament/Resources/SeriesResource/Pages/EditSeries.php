<?php

namespace App\Filament\Resources\SeriesResource\Pages;

use App\Filament\Resources\SeriesResource;
use App\Models\Series;
use Filament\Actions;
use Filament\Actions\Action;
use Filament\Resources\Pages\EditRecord;

class EditSeries extends EditRecord
{
    protected static string $resource = SeriesResource::class;

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
