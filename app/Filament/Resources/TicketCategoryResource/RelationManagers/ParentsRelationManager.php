<?php

namespace App\Filament\Resources\TicketCategoryResource\RelationManagers;

use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;

class ParentsRelationManager extends RelationManager
{
    protected static string $relationship = 'parents';

    public function form(Form $form): Form
    {
        return $form
            ->schema([]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('parents')
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('name')
                    ->sortable()
                    ->searchable(),
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
