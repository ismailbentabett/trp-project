<?php

namespace App\Filament\Resources;

use App\Filament\Resources\OfferResource\Pages;
use App\Filament\Resources\OfferResource\RelationManagers;
use App\Models\Offer;
use Filament\Forms;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Table;

class OfferResource extends Resource
{
    protected static ?string $model = Offer::class;

    protected static ?string $navigationIcon = 'heroicon-s-megaphone';

    protected static ?string $navigationLabel = 'Offres';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    protected static ?string $navigationGroup = 'E-commerce';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->autofocus()
                    ->required()
                    ->placeholder(__('Title')),

                RichEditor::make('description')
                    ->autofocus()
                    ->required()
                    ->fileAttachmentsDisk('s3')
                    ->fileAttachmentsDirectory('attachments')
                    ->placeholder(__('Description')),

                //many to many relationship with products table

                Forms\Components\BelongsToSelect::make('product_id')
                    ->relationship('products', 'name')
                    ->required()
                    ->preload()
                    ->multiple()
                    ->autofocus(),

            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('description')
                    ->searchable()
                    ->sortable(),

            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
                Action::make('Visit')
                    ->url(fn (Offer $Offer) => route('offer.show', $Offer))
                    ->openUrlInNewTab()
                    ->icon('heroicon-s-arrow-top-right-on-square'),
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
            RelationManagers\ProductsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListOffers::route('/'),
            'create' => Pages\CreateOffer::route('/create'),
            'edit' => Pages\EditOffer::route('/{record}/edit'),
        ];
    }
}
