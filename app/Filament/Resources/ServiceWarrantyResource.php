<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ServiceWarrantyResource\Pages;
use App\Models\ServiceWarranty;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ServiceWarrantyResource extends Resource
{
    protected static ?string $model = ServiceWarranty::class;

    protected static ?string $navigationIcon = 'heroicon-s-clipboard';

    protected static ?string $navigationGroup = 'E-commerce';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([

                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make()
                            ->schema([

                                Forms\Components\TextInput::make('name')->autofocus()->required(),
                                Forms\Components\TextInput::make('description')->autofocus()->required(),

                            ]),
                    ]),
            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('name')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('description')
                    ->sortable()
                    ->searchable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListServiceWarranties::route('/'),
            'create' => Pages\CreateServiceWarranty::route('/create'),
            'edit' => Pages\EditServiceWarranty::route('/{record}/edit'),
        ];
    }
}
