<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TicketCategoryResource\Pages;
use App\Filament\Resources\TicketCategoryResource\RelationManagers\ChildrenRelationManager;
use App\Filament\Resources\TicketCategoryResource\RelationManagers\ParentsRelationManager;
use App\Models\TicketCategory;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class TicketCategoryResource extends Resource
{
    protected static ?string $model = TicketCategory::class;

    protected static ?string $navigationIcon = 'heroicon-s-ticket';

    protected static ?string $navigationGroup = 'Feedback et soutien';

    protected static ?string $navigationLabel = 'Catégories de tickets';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make()
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->autofocus()
                            ->required(),

                        Forms\Components\TextInput::make('slug')
                            ->autofocus()
                            ->required(),

                        Forms\Components\Checkbox::make('is_visible')
                            ->autofocus()
                            ->required(),
                    ]),

                Select::make('child_id')
                    ->relationship('children', 'name')
                    ->label('Child Category')
                    ->placeholder('Select Child Category')
                    ->multiple()
                    ->preload()
                    ->nullable(),
            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                Tables\Columns\TextColumn::make('id'),
                Tables\Columns\TextColumn::make('name'),
                Tables\Columns\TextColumn::make('slug'),
                Tables\Columns\TextColumn::make('is_visible'),
                Tables\Columns\TextColumn::make('created_at')->dateTime(),
                Tables\Columns\TextColumn::make('updated_at')->dateTime(),

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
            ])
            ->emptyStateActions([
                Tables\Actions\CreateAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            ChildrenRelationManager::class,
            ParentsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTicketCategories::route('/'),
            'create' => Pages\CreateTicketCategory::route('/create'),
            'edit' => Pages\EditTicketCategory::route('/{record}/edit'),
        ];
    }
}
