<?php

namespace App\Filament\Resources;

use App\Filament\Resources\QuickReferenceGuideResource\Pages;
use App\Models\QuickReferenceGuide;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class QuickReferenceGuideResource extends Resource
{
    protected static ?string $model = QuickReferenceGuide::class;

    protected static ?string $navigationIcon = 'heroicon-s-receipt-refund';

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
            'index' => Pages\ListQuickReferenceGuides::route('/'),
            'create' => Pages\CreateQuickReferenceGuide::route('/create'),
            'edit' => Pages\EditQuickReferenceGuide::route('/{record}/edit'),
        ];
    }
}
