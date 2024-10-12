<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ApplicationContactResource\Pages;
use App\Models\ApplicationContact;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ApplicationContactResource extends Resource
{
    protected static ?string $model = ApplicationContact::class;

    protected static ?string $navigationIcon = 'heroicon-m-envelope';

    protected static ?int $navigationSort = 1;

    protected static ?string $recordTitleAttribute = 'name';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    protected static ?string $navigationGroup = 'Application';

    protected static ?string $navigationLabel = "Contacts d'application";

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
                Tables\Columns\TextColumn::make('application_id')->searchable()
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('id')->searchable()
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('first_name')->searchable()
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('last_name')->searchable()
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('email')->searchable()
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('phone')->searchable()
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('company')->searchable()
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('message')->searchable(),

            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\DeleteAction::make(),

                Tables\Actions\ViewAction::make()
                    ->form([
                        Forms\Components\TextInput::make('first_name')->disabled(),
                        Forms\Components\TextInput::make('last_name')->disabled(),
                        Forms\Components\TextInput::make('email')->disabled(),
                        Forms\Components\TextInput::make('phone')->disabled(),
                        Forms\Components\TextInput::make('company')->disabled(),
                        Forms\Components\Textarea::make('message')->disabled(),
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
            'index' => Pages\ListApplicationContacts::route('/'),
        ];
    }
}
