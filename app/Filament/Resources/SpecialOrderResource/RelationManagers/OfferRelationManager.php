<?php

namespace App\Filament\Resources\SpecialOrderResource\RelationManagers;

use App\Models\Offer;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Infolist;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Table;

class OfferRelationManager extends RelationManager
{
    protected static string $relationship = 'offer';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('offer')
                    ->required()
                    ->maxLength(255),
            ]);
    }

    public function infolist(Infolist $infolist): Infolist
    {
        return $infolist
            ->columns(1)
            ->schema([
                TextEntry::make('title'),

            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('offer')
            ->columns([

                Tables\Columns\TextColumn::make('products.id')
                    ->sortable()
                    ->searchable()
                    ->label('Product ID'),

                //prodycr name from a relation
                Tables\Columns\TextColumn::make('products.name'),
                Tables\Columns\TextColumn::make('products.price')
                    ->label('Price'),
                Tables\Columns\TextColumn::make('products.quantity')
                    ->label('Quantity'),

                Tables\Columns\TextColumn::make('products.currency')
                    ->label('Currency'),

            ])
            ->filters([
                //
            ])
            ->headerActions([])
            ->actions([

                Action::make('Visit')
                    ->url(function (Offer $record) {
                        return route('product.show', $record->products->first());
                    })

                    ->openUrlInNewTab()
                    ->icon('heroicon-s-arrow-top-right-on-square'),

            ])
            ->bulkActions([]);
    }
}
