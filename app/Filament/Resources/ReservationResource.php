<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ReservationResource\Pages;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use ShayanYS\LaraReserve\Models\Reserve;

class ReservationResource extends Resource
{
    public $reservations;

    public function __construct()
    {
        $this->reservations = Reserve::with([
            'customer', 'reservable',
        ])->get();
    }

    protected static ?string $model = Reserve::class;

    protected static ?string $navigationIcon = 'heroicon-s-clock';

    protected static ?string $navigationLabel = 'Reservations';

    protected static ?string $navigationGroup = 'Reservations';

    protected static ?int $navigationSort = 2;

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
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
                TextColumn::make('id')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('customer.id')
                    ->label('User Id'),
                Tables\Columns\ImageColumn::make('customer.avatar')
                    ->defaultImageUrl(url('https://avatars.githubusercontent.com/u/424443?v=4'))
                    ->label('User Avatar'),
                Tables\Columns\TextColumn::make('customer.name')
                    ->label('User'),

                TextColumn::make('reservable.id')
                    ->label('Reservable Id')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('reservable.title')
                    ->label('Reservable Title')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('reservable_type')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('reserved_date')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('reserved_time')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('end_reserve_date')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('end_reserve_time')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('created_at')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('updated_at')
                    ->searchable()
                    ->sortable(),

            ])
            ->filters([
                //
            ])
            ->actions([])
            ->bulkActions([]);
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
            'index' => Pages\ListReservations::route('/'),
        ];
    }
}
