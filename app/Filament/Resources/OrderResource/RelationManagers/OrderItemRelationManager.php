<?php

namespace App\Filament\Resources\OrderResource\RelationManagers;

use App\Models\OrderItems;
use Awcodes\Curator\Components\Tables\CuratorColumn;
use Filament\Forms\Form;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Infolist;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Table;

class OrderItemRelationManager extends RelationManager
{
    protected static string $relationship = 'orderItems';

    public function form(Form $form): Form
    {
        return $form
            ->schema([]);
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
            ->recordTitleAttribute('OrderItem')
            ->columns([

                Tables\Columns\TextColumn::make('id')
                    ->sortable()
                    ->searchable(),

                CuratorColumn::make('product.medias')
                    ->ring(1)
                    ->size(40)
                // options 0,1,2,4
                    ->overlap(0) // options 0,2,3,4
                    ->limit(1),

                //prodycr name from a relation
                Tables\Columns\TextColumn::make('product.name'),
                Tables\Columns\TextColumn::make('product.price')
                    ->label('Price'),
                Tables\Columns\TextColumn::make('quantity'),

                Tables\Columns\TextColumn::make('amount'),
                Tables\Columns\TextColumn::make('product.currency')
                    ->label('Currency'),

            ])
            ->filters([
                //
            ])
            ->headerActions([])
            ->actions([

                Action::make('Visit')
                    ->url(function (OrderItems $record) {
                        return route('product.show', $record->product);
                    })

                    ->openUrlInNewTab()
                    ->icon('heroicon-s-arrow-top-right-on-square'),

            ])->bulkActions([]);
    }
}
