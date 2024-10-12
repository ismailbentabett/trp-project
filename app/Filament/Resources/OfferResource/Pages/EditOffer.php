<?php

namespace App\Filament\Resources\OfferResource\Pages;

use App\Filament\Resources\OfferResource;
use App\Models\Offer;
use Filament\Actions;
use Filament\Actions\Action;
use Filament\Resources\Pages\EditRecord;

class EditOffer extends EditRecord
{
    protected static string $resource = OfferResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),

            Action::make('Visit')
                ->url(fn (Offer $Offer) => route('offer.show', $Offer))
                ->openUrlInNewTab()
                ->icon('heroicon-s-arrow-top-right-on-square'),
        ];
    }
}
