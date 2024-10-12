<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ModeleResource\Pages;
use App\Models\Modele;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Table;

class ModeleResource extends Resource
{
    protected static ?string $model = Modele::class;

    protected static ?string $navigationIcon = 'heroicon-s-rectangle-stack';

    protected static ?string $navigationGroup = 'E-commerce';

    protected static ?string $navigationLabel = 'Modèles';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

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
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListModeles::route('/'),
            'create' => Pages\CreateModele::route('/create'),
            'edit' => Pages\EditModele::route('/{record}/edit'),
        ];
    }
}
