<?php

namespace App\Filament\Resources\ServiceResource\Pages;

use App\Filament\Resources\ServiceResource;
use App\Models\Service;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditService extends EditRecord
{
    protected static string $resource = ServiceResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
            \Filament\Actions\Action::make('Visit')
                ->url(fn (Service $service) => route('service.show', $service))
                ->openUrlInNewTab()
                ->icon('heroicon-s-arrow-top-right-on-square'),
        ];
    }
}
