<?php

namespace App\Filament\Resources\FeedBackResource\Pages;

use App\Filament\Resources\FeedBackResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditFeedBack extends EditRecord
{
    protected static string $resource = FeedBackResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
