<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SpecialOrderResource\Pages;
use App\Filament\Resources\SpecialOrderResource\RelationManagers;
use App\Models\SpecialOrder;
use Filament\Forms\Components\Group;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class SpecialOrderResource extends Resource
{
    protected static ?string $model = SpecialOrder::class;

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

    protected static ?string $navigationIcon = 'heroicon-s-shopping-bag';

    protected static ?int $navigationSort = 6;

    protected static ?string $navigationGroup = 'E-commerce';

    protected static ?string $navigationLabel = 'Commandes spéciales';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Group::make()
                    ->schema([
                        Section::make('Order Details')
                            ->schema([

                                TextInput::make('id')
                                    ->disabled()
                                    ->required()
                                    ->maxLength(255),

                            ])
                            ->columns(2),

                        Section::make('Customer Details')
                            ->schema([
                                TextInput::make('name')
                                    ->disabled()
                                    ->required()
                                    ->maxLength(255),

                                TextInput::make('email')
                                    ->disabled()
                                    ->required()
                                    ->maxLength(255),

                                TextInput::make('phone')
                                    ->disabled()
                                    ->required()
                                    ->maxLength(255),
                            ])
                            ->columns(2),
                        Section::make('Billing Address')
                            ->schema([
                                TextInput::make('address')
                                    ->disabled()
                                    ->required()
                                    ->maxLength(255),

                                TextInput::make('city')
                                    ->disabled()
                                    ->required()
                                    ->maxLength(255),

                                TextInput::make('country')
                                    ->disabled()
                                    ->required()
                                    ->maxLength(255),

                                TextInput::make('state')
                                    ->disabled()
                                    ->required()
                                    ->maxLength(255),

                                TextInput::make('zip_code')
                                    ->disabled()
                                    ->required()
                                    ->maxLength(255),

                                TextInput::make('company_name')
                                    ->disabled()
                                    ->required()
                                    ->maxLength(255),

                                TextInput::make('apartment')
                                    ->disabled()
                                    ->required()
                                    ->maxLength(255),

                            ])
                            ->columns(2),

                    ])
                    ->columnSpan(['lg' => 2]),

                Group::make()
                    ->schema([

                        Section::make('Status')
                            ->schema([
                                \Filament\Forms\Components\Select::make('status')
                                    ->options([
                                        'Order placed' => 'Order placed',
                                        'Processing' => 'Processing',
                                        'Shipped' => 'Shipped',
                                        'Delivered' => 'Delivered',
                                        'Cancelled' => 'Cancelled',
                                    ])
                                    ->selectablePlaceholder(false)

                                    ->preload(),
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
                Tables\Columns\TextColumn::make('id')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('user.name')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('status')
                    ->sortable()
                    ->searchable(),

            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\ViewAction::make()
                    ->form(
                        [
                            TextInput::make('id')
                                ->disabled()
                                ->required()
                                ->maxLength(255),

                            TextInput::make('name')
                                ->disabled()
                                ->required()
                                ->maxLength(255),

                            TextInput::make('email')
                                ->disabled()
                                ->required()
                                ->maxLength(255),

                            TextInput::make('phone')
                                ->disabled()
                                ->required()
                                ->maxLength(255),

                            TextInput::make('address')
                                ->disabled()
                                ->required()
                                ->maxLength(255),

                            TextInput::make('city')
                                ->disabled()
                                ->required()
                                ->maxLength(255),

                            TextInput::make('country')
                                ->disabled()
                                ->required()
                                ->maxLength(255),

                            TextInput::make('state')
                                ->disabled()
                                ->required()
                                ->maxLength(255),

                            TextInput::make('zip_code')
                                ->disabled()
                                ->required()
                                ->maxLength(255),

                            TextInput::make('company_name')
                                ->disabled()
                                ->required()
                                ->maxLength(255),

                            TextInput::make('apartment')
                                ->disabled()
                                ->required()
                                ->maxLength(255),

                            \Filament\Forms\Components\Select::make('status')
                                ->options([
                                    'Order placed' => 'Order placed',
                                    'Processing' => 'Processing',
                                    'Shipped' => 'Shipped',
                                    'Delivered' => 'Delivered',
                                ])
                                ->preload(),
                        ]
                    ),

            ])
            ->bulkActions([

            ])
            ->emptyStateActions([]);
    }

    public static function getRelations(): array
    {
        return [
            RelationManagers\AccessoryRelationManager::class,
            RelationManagers\OfferRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSpecialOrders::route('/'),
            'create' => Pages\CreateSpecialOrder::route('/create'),
            'edit' => Pages\EditSpecialOrder::route('/{record}/edit'),
        ];
    }
}
