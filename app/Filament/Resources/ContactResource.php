<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ContactResource\Pages;
use App\Models\Contact;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ContactResource extends Resource
{
    protected static ?string $model = Contact::class;

    protected static ?string $navigationIcon = 'heroicon-m-envelope';

    protected static ?string $navigationGroup = 'Contact';

    protected static ?string $navigationLabel = 'Contacts';

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
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')->searchable()
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('name')->searchable()
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('email')->searchable()
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('phone')->searchable()
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('subject')->searchable()
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('message')->searchable()
                    ->sortable()
                    ->searchable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\DeleteAction::make(),

                Tables\Actions\ViewAction::make()
                    ->form([
                        Forms\Components\TextInput::make('name')
                            ->disabled()
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('email')
                            ->disabled()
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('phone')
                            ->disabled()
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('subject')
                            ->disabled()
                            ->required()
                            ->maxLength(255),
                        Forms\Components\Textarea::make('message')
                            ->disabled()
                            ->required()
                            ->maxLength(255),
                    ]),
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
            'index' => Pages\ListContacts::route('/'),
        ];
    }
}
