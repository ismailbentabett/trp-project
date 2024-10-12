<?php

namespace App\Filament\Resources\ApplicationResource\Pages;

use App\Filament\Resources\ApplicationResource;
use App\Models\Application;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditApplication extends EditRecord
{
    protected static string $resource = ApplicationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
            \Filament\Actions\Action::make('Visit')
                ->url(fn (Application $application) => route('application.show', $application))
                ->openUrlInNewTab()
                ->icon('heroicon-s-arrow-top-right-on-square'),
        ];
    }
}
