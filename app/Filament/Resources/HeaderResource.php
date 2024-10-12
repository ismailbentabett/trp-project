<?php

namespace App\Filament\Resources;

use App\Filament\Resources\HeaderResource\Pages;
use App\Models\header;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class HeaderResource extends Resource
{
    protected static ?string $model = header::class;

    protected static ?string $navigationIcon = 'heroicon-s-eye';

    protected static ?string $navigationGroup = 'Interface utilisateur';

    protected static ?string $navigationLabel = 'Entêtes';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([

                Forms\Components\TextInput::make('email')
                    ->required()

                    ->autofocus()
                    ->placeholder(__('Email')),

                Forms\Components\TextInput::make('phone')

                    ->tel()
                    ->autofocus()
                    ->placeholder(__('Phone')),

                Forms\Components\TextInput::make('facebook')

                    ->url()

                    ->autofocus()
                    ->placeholder(__('Facebook')),

                Forms\Components\TextInput::make('twitter')

                    ->url()

                    ->autofocus()
                    ->placeholder(__('Twitter')),

                Forms\Components\TextInput::make('instagram')
                    ->url()

                    ->autofocus()
                    ->placeholder(__('Instagram')),

                Forms\Components\TextInput::make('linkedin')

                    ->url()

                    ->autofocus()
                    ->placeholder(__('Linkedin')),

                Forms\Components\TextInput::make('youtube')
                    ->url()

                    ->autofocus()
                    ->placeholder(__('Youtube')),

                Forms\Components\TextInput::make('whatsapp')
                    ->url()

                    ->autofocus()
                    ->placeholder(__('Whatsapp')),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('email')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('phone')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('facebook')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('twitter')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('instagram')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('linkedin')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('youtube')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('whatsapp')
                    ->sortable()
                    ->searchable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
                Tables\Actions\ViewAction::make()
                    ->form([
                        Forms\Components\TextInput::make('email')
                            ->email()
                            ->required()
                            ->autofocus()
                            ->placeholder(__('Email')),
                        Forms\Components\TextInput::make('phone')
                            ->required()
                            ->autofocus()
                            ->placeholder(__('Phone')),
                        Forms\Components\TextInput::make('facebook')
                            ->required()
                            ->autofocus()
                            ->placeholder(__('Facebook')),
                        Forms\Components\TextInput::make('twitter')
                            ->required()
                            ->autofocus()
                            ->placeholder(__('Twitter')),
                        Forms\Components\TextInput::make('instagram')
                            ->required()
                            ->autofocus()
                            ->placeholder(__('Instagram')),
                        Forms\Components\TextInput::make('linkedin')
                            ->required()
                            ->autofocus()
                            ->placeholder(__('Linkedin')),
                        Forms\Components\TextInput::make('youtube')
                            ->required()
                            ->autofocus()
                            ->placeholder(__('Youtube')),
                        Forms\Components\TextInput::make('whatsapp')
                            ->required()
                            ->autofocus()
                            ->placeholder(__('Whatsapp')),

                    ]),

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
            'index' => Pages\ListHeaders::route('/'),
            'create' => Pages\CreateHeader::route('/create'),
            'edit' => Pages\EditHeader::route('/{record}/edit'),
        ];
    }
}
