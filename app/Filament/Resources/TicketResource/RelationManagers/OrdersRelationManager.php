<?php

namespace App\Filament\Resources\TicketResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Infolist;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;

class OrdersRelationManager extends RelationManager
{
    protected static string $relationship = 'Orders';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('Orders')
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
            ->recordTitleAttribute('Orders')
            ->columns([

                Tables\Columns\TextColumn::make('id')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('user.name')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('status')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('total_price')
                    ->sortable()
                    ->searchable(),

                //crrency column
                Tables\Columns\TextColumn::make('orderItems.product.currency')
                    ->label('Currency'),

            ])
            ->filters([
                //
            ])
            ->headerActions([])
            ->actions([

            ])
            ->bulkActions([]);
    }
}
