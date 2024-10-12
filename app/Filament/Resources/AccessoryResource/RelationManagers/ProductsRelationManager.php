<?php

namespace App\Filament\Resources\AccessoryResource\RelationManagers;

use App\Models\Product;
use Awcodes\Curator\Components\Tables\CuratorColumn;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Infolist;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Table;

class ProductsRelationManager extends RelationManager
{
    protected static string $relationship = 'products';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('Products')
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
            ->recordTitleAttribute('product')
            ->columns([

                Tables\Columns\TextColumn::make('id')
                    ->sortable()
                    ->searchable(),

                CuratorColumn::make('medias')
                    ->ring(1) // options 0,1,2,4
                    ->overlap(0)
                    ->size(40)
                    // options 0,2,3,4
                    ->limit(1),

                //prodycr name from a relation
                Tables\Columns\TextColumn::make('name'),
                Tables\Columns\TextColumn::make('price')
                    ->label('Price'),
                Tables\Columns\TextColumn::make('quantity'),

                Tables\Columns\TextColumn::make('currency')
                    ->label('Currency'),

            ])
            ->filters([
                //
            ])
            ->headerActions([])
            ->actions([

                Action::make('Visit')
                    ->url(fn (Product $product) => route('product.show', $product))
                    ->openUrlInNewTab()
                    ->icon('heroicon-s-arrow-top-right-on-square'),

            ])
            ->bulkActions([]);
    }
}
