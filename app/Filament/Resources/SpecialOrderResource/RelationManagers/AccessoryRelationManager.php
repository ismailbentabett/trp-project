<?php

namespace App\Filament\Resources\SpecialOrderResource\RelationManagers;

use App\Models\Accessory;
use Awcodes\Curator\Components\Tables\CuratorColumn;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Infolist;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Table;

class AccessoryRelationManager extends RelationManager
{
    protected static string $relationship = 'accessory';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('accessory')
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
            ->recordTitleAttribute('accessory')
            ->columns([

                Tables\Columns\TextColumn::make('id')
                    ->sortable()
                    ->searchable(),

                CuratorColumn::make('medias')
                    ->ring(1)
                    ->size(40)
                    // options 0,1,2,4
                    ->overlap(0) // options 0,2,3,4
                    ->limit(1),

                //prodycr name from a relation
                Tables\Columns\TextColumn::make('name'),
                Tables\Columns\TextColumn::make('price')
                    ->label('Price'),
                Tables\Columns\TextColumn::make('url'),

            ])
            ->filters([
                //
            ])
            ->headerActions([])
            ->actions([

                Action::make('Visit')
                    ->url(fn (Accessory $accessory) => route('accessory.show', $accessory))
                    ->openUrlInNewTab()
                    ->icon('heroicon-s-arrow-top-right-on-square'),

            ])
            ->bulkActions([]);
    }
}
