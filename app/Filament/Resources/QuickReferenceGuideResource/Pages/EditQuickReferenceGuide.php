<?php

namespace App\Filament\Resources\QuickReferenceGuideResource\Pages;

use App\Filament\Resources\QuickReferenceGuideResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditQuickReferenceGuide extends EditRecord
{
    protected static string $resource = QuickReferenceGuideResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
