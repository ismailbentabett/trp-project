<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SubscriberResource\Pages;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Mydnic\Subscribers\Subscriber;

class SubscriberResource extends Resource
{
    protected static ?string $model = Subscriber::class;

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

    protected static ?string $navigationIcon = 'heroicon-m-rss';

    protected static ?string $navigationGroup = 'Newsletter';

    protected static ?string $navigationLabel = 'Abonnés';

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
                Tables\Columns\TextColumn::make('id')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('email'),
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
            'index' => Pages\ListSubscribers::route('/'),

        ];
    }
}
