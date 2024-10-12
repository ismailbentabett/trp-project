<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SeriesResource\Pages;
use App\Filament\Resources\SeriesResource\RelationManagers\ModelesRelationManager;
use App\Models\Series;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Table;

class SeriesResource extends Resource
{
    protected static ?string $model = Series::class;

    protected static ?string $navigationIcon = 'heroicon-m-wallet';

    protected static ?string $navigationLabel = 'Séries';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

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

                            ])
                            ->columns(1),

                        //second column
                        Forms\Components\Section::make()
                            ->schema([
                                Select::make('modeles')
                                    ->relationship(
                                        'modeles',
                                        'name',
                                    )
                                    ->createOptionForm([

                                        Forms\Components\Group::make()
                                            ->schema([
                                                Forms\Components\Section::make()
                                                    ->schema([

                                                        Forms\Components\TextInput::make('name')->autofocus()->required(),

                                                    ])
                                                    ->columns(1),

                                            ])
                                            ->columns(1),
                                    ])
                                    ->multiple()
                                    ->preload()
                                    ->searchable()
                                    ->placeholder('Sélectionnez un modèle'),

                            ]),

                    ])
                    ->columns(1),

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

            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
                /*    Action::make('Visit')
                    ->url(fn (Modele $record) => route('modele.show', $record))
                    ->openUrlInNewTab()
                    ->icon('heroicon-s-arrow-top-right-on-square'), */

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
            ModelesRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSeries::route('/'),
            'create' => Pages\CreateSeries::route('/create'),
            'edit' => Pages\EditSeries::route('/{record}/edit'),
        ];
    }
}
