<?php

namespace App\Filament\Resources;

use App\Filament\Resources\FeedBackResource\Pages;
use Awcodes\Curator\Components\Tables\CuratorColumn;
use Digikraaft\ReviewRating\Models\Review;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class FeedBackResource extends Resource
{
    protected static ?string $model = Review::class;

    protected static ?string $navigationIcon = 'heroicon-s-star';

    protected static ?string $navigationGroup = 'Feedback et soutien';

    protected static ?string $navigationLabel = 'Avis';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function canCreate(): bool
    {
        return false;
    }

    public function isReadOnly(): bool
    {
        return true;
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                Tables\Columns\TextColumn::make('model.name')->sortable()
                    ->searchable()
                    ->label('Product Name'),
                CuratorColumn::make('model.medias')
                    ->ring(1) // options 0,1,2,4
                    ->overlap(0) // options 0,2,3,4
                    ->limit(1)
                    ->size(40)

                    ->label('Product Image'),
                Tables\Columns\TextColumn::make('model.id')->sortable()
                    ->searchable()
                    ->label('Product ID'),

                Tables\Columns\TextColumn::make('review')->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('rating')->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('author.name')->sortable()
                    ->searchable()
                    ->label('Customer Name'),
                Tables\Columns\TextColumn::make('author.id')->sortable()
                    ->searchable()
                    ->label('Customer ID'),

                Tables\Columns\TextColumn::make('author.avatar')->sortable()
                    ->searchable()
                    ->label('Customer Avatar'),

            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\DeleteAction::make(),
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
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListFeedBacks::route('/'),
        ];
    }
}
