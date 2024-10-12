<?php

namespace App\Filament\Resources\FeedBackResource\Pages;

use App\Filament\Resources\FeedBackResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListFeedBacks extends ListRecords
{
    protected static string $resource = FeedBackResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
