<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TypeResource\Pages;
use App\Filament\Resources\TypesResource\RelationManagers\ChildrenRelationManager;
use App\Filament\Resources\TypesResource\RelationManagers\ParentsRelationManager;
use App\Filament\Resources\TypesResource\RelationManagers\SeriesRelationManager;
use App\Models\Type;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class TypeResource extends Resource
{
    protected static ?string $model = Type::class;

    protected static ?string $navigationIcon = 'heroicon-s-square-3-stack-3d';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    protected static ?string $navigationGroup = 'E-commerce';

    protected static ?string $navigationLabel = 'Types';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([

                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make()
                            ->schema([

                                Forms\Components\TextInput::make('name')->autofocus()->required(),
                                Forms\Components\Toggle::make('type_accessoire')
                                    ->live()
                                    ->default(false),
                            ])
                            ->columns(1),

                        //second column
                        Forms\Components\Section::make()
                            ->schema([
                                Select::make('children')
                                    ->live()
                                    ->relationship(
                                        name: 'children',
                                        titleAttribute: 'name',
                                        modifyQueryUsing: function (Get $get, Builder $query) {
                                            if ($get(path: 'type_accessoire') == 'true') {
                                                $query->where('type_accessoire', true);
                                            } else {
                                                $query->where('type_accessoire', false);
                                            }
                                        }
                                    )
                                    ->searchable()
                                    ->preload()
                                    ->multiple()
                                    ->createOptionForm([

                                        Forms\Components\Group::make()
                                            ->schema([
                                                Forms\Components\Section::make()
                                                    ->schema([

                                                        //create children

                                                        Forms\Components\TextInput::make('name')->autofocus()->required(),
                                                        Forms\Components\Toggle::make('type_accessoire')
                                                            ->live()
                                                            ->default(false),
                                                    ])
                                                    ->columns(1),
                                                Forms\Components\Section::make()
                                                    ->schema([
                                                        Select::make('children')
                                                            ->live()
                                                            ->relationship(
                                                                name: 'children',
                                                                titleAttribute: 'name',
                                                                modifyQueryUsing: function (Get $get, Builder $query) {
                                                                    if ($get(path: 'type_accessoire') == 'true') {
                                                                        $query->where('type_accessoire', true);
                                                                    } else {
                                                                        $query->where('type_accessoire', false);
                                                                    }
                                                                }
                                                            )
                                                            ->searchable()
                                                            ->preload()
                                                            ->multiple(),

                                                    ])
                                                    ->columns(1),
                                            ])
                                            ->columns(1),

                                    ]),

                                Select::make('series')
                                    ->live()
                                    ->relationship(
                                        'series',
                                        'name',

                                    )
                                    ->searchable()
                                    ->preload()
                                    ->multiple()
                                    ->createOptionForm([

                                        Forms\Components\Group::make()
                                            ->schema([
                                                Forms\Components\Section::make()
                                                    ->schema([

                                                        Forms\Components\TextInput::make('name')->autofocus()->required(),

                                                    ])
                                                    ->columns(1),

                                                //second column
                                                Forms\Components\Section::make()
                                                    ->schema([
                                                        Select::make('modeles')
                                                            ->relationship(
                                                                'modeles',
                                                                'name',
                                                            )
                                                            ->multiple()
                                                            ->preload()
                                                            ->searchable()
                                                            ->placeholder('Sélectionnez un modèle'),

                                                    ]),

                                            ])
                                            ->columns(1),

                                        //end

                                    ]),

                            ]),

                    ])
                    ->columns(1),

            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('name')
                    ->sortable()
                    ->searchable(),
                IconColumn::make('type_accessoire')
                    ->boolean(),

            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
                /*    Action::make('Visit')
                    ->url(fn (Modele $record) => route('modele.show', $record))
                    ->openUrlInNewTab()
                    ->icon('heroicon-s-arrow-top-right-on-square'), */

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
            ChildrenRelationManager::class,
            ParentsRelationManager::class,
            SeriesRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTypes::route('/'),
            'create' => Pages\CreateType::route('/create'),
            'edit' => Pages\EditType::route('/{record}/edit'),
        ];
    }
}
