<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TicketResource\Pages;
use App\Filament\Resources\TicketResource\RelationManagers\AccessoriesRelationManager;
use App\Filament\Resources\TicketResource\RelationManagers\OrdersRelationManager;
use App\Filament\Resources\TicketResource\RelationManagers\ProductsRelationManager;
use App\Models\Ticket;
use Filament\Forms;
use Filament\Forms\Components\Group;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Table;

class TicketResource extends Resource
{
    protected static ?string $model = Ticket::class;

    protected static ?string $navigationIcon = 'heroicon-s-ticket';

    protected static ?string $navigationGroup = 'Feedback et soutien';

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
                Group::make()
                    ->schema([
                        Section::make('Ticket Ids')
                            ->schema([

                                Forms\Components\TextInput::make('id')
                                    ->disabled(),
                                Forms\Components\TextInput::make('UUID')->disabled(),
                                Forms\Components\TextInput::make('user_id')->disabled(),

                            ])
                            ->columns(2),

                        Section::make('Ticket Details')
                            ->schema([
                                Forms\Components\TextInput::make('title')->disabled(),
                                Forms\Components\RichEditor::make('message')->disabled(),
                                Forms\Components\TextInput::make('priority')->disabled(),
                            ])
                            ->columns(2),
                        Section::make('Ticket Data')
                            ->schema([
                                Forms\Components\TextInput::make('assigned_to')->disabled(),
                                Forms\Components\TextInput::make('created_at')->disabled(),
                                Forms\Components\TextInput::make('updated_at')->disabled(),

                            ])
                            ->columns(2),

                    ])
                    ->columnSpan(['lg' => 2]),

                Group::make()
                    ->schema([

                        Section::make('Status')
                            ->schema([
                                TextInput::make('status')
                                    ->disabled()
                                    ->required(),
                                TextInput::make('is_resolved')
                                    ->disabled()
                                    ->required(),
                                TextInput::make('is_locked')
                                    ->disabled()
                                    ->required(),

                            ]),
                    ])
                    ->columnSpan(['lg' => 1]),
            ])

            ->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id'),
                Tables\Columns\TextColumn::make('UUID'),
                Tables\Columns\TextColumn::make('user_id'),
                Tables\Columns\TextColumn::make('title'),
                Tables\Columns\TextColumn::make('message'),
                Tables\Columns\TextColumn::make('priority'),
                Tables\Columns\TextColumn::make('status'),
                IconColumn::make('is_resolved')
                    ->boolean()
                    ->trueIcon('heroicon-o-check-badge')
                    ->falseIcon('heroicon-o-x-mark'),
                IconColumn::make('is_locked')
                    ->boolean()
                    ->trueIcon('heroicon-o-check-badge')
                    ->falseIcon('heroicon-o-x-mark'),
                Tables\Columns\TextColumn::make('assigned_to'),
                Tables\Columns\TextColumn::make('created_at')->dateTime(),
                Tables\Columns\TextColumn::make('updated_at')->dateTime(),
            ])
            ->filters([])
            ->actions([
                Tables\Actions\EditAction::make(),
                /*                 Tables\Actions\ViewAction::make(),
 */ Tables\Actions\DeleteAction::make(),
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
            AccessoriesRelationManager::class,
            OrdersRelationManager::class,
            ProductsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTickets::route('/'),
            'edit' => Pages\EditTicket::route('/{record}/edit'),
        ];
    }
}
