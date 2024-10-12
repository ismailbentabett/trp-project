<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ServiceResource\Pages;
use App\Filament\Resources\ServiceResource\RelationManagers;
use App\Models\Service;
use Awcodes\Curator\Components\Forms\CuratorPicker;
use Awcodes\Curator\Components\Tables\CuratorColumn;
use Filament\Forms;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Table;
use Guava\FilamentIconPicker\Forms\IconPicker;

class ServiceResource extends Resource
{
    protected static ?string $model = Service::class;

    protected static ?string $navigationIcon = 'heroicon-s-star';

    protected static ?int $navigationSort = 1;

    protected static ?string $recordTitleAttribute = 'name';

    protected static ?string $navigationLabel = 'Services';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    protected static ?string $navigationGroup = 'Service';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make()
                            ->schema([

                                TextInput::make('title')->required(),

                                RichEditor::make('content')
                                    ->required(),

                                Repeater::make('features')
                                    ->schema([
                                        IconPicker::make('icon'),
                                        TextInput::make('name')->required(),
                                        RichEditor::make('description')->required(),

                                    ])
                                    ->columns(1),
                            ])
                            ->columns(1),

                        Forms\Components\Section::make('Media')
                            ->schema([
                                CuratorPicker::make('media_ids')
                                    ->multiple()
                                    ->label('Media')

                                    ->relationship('medias', 'id'),
                            ]),

                    ])
                    ->columnSpan(['lg' => 2]),

                Forms\Components\Group::make()
                    ->schema([])
                    ->columnSpan(['lg' => 1]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                CuratorColumn::make('medias')
                    ->ring(1) // options 0,1,2,4
                    ->overlap(0) // options 0,2,3,4
                    ->size(40)->size(40)

                    ->limit(1),

                Tables\Columns\TextColumn::make('title')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('content')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('updated_at')
                    ->sortable()
                    ->searchable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
                Action::make('Visit')
                    ->url(fn (Service $record) => route('service.show', $record))
                    ->openUrlInNewTab()
                    ->icon('heroicon-s-arrow-top-right-on-square'),
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
            RelationManagers\ServiceContactsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListServices::route('/'),
            'create' => Pages\CreateService::route('/create'),
            'edit' => Pages\EditService::route('/{record}/edit'),
        ];
    }
}
