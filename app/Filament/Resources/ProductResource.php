<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\Product;
use Awcodes\Curator\Components\Forms\CuratorPicker;
use Awcodes\Curator\Components\Tables\CuratorColumn;
use Filament\Forms;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-s-bolt';

    protected static ?int $navigationSort = 2;

    protected static ?string $recordTitleAttribute = 'name';

    protected static ?string $navigationLabel = 'Produits';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    protected static ?string $navigationGroup = 'E-commerce';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make()
                            ->schema([

                                TextInput::make('name')->required(),
                                Forms\Components\TextInput::make('mini_description')
                                    ->maxLength(255),
                                RichEditor::make('description')
                                    ->fileAttachmentsDisk('s3')
                                    ->fileAttachmentsDirectory('attachments')
                                    ->required()
                                    ->columnSpan('full'),
                            ])
                            ->columns(2),

                        Forms\Components\Section::make('Pricing')
                            ->schema([
                                Forms\Components\TextInput::make('price')
                                    ->numeric()
                                    ->required()
                                    ->numeric(),
                                Select::make('currency')
                                    ->options([
                                        'EUR' => 'EUR',
                                    ])
                                    ->preload()
                                    ->required(),
                            ])
                            ->columns(2),
                        Forms\Components\Section::make('Inventory')
                            ->schema([
                                Forms\Components\TextInput::make('quantity')
                                    ->numeric()
                                    ->required()
                                    ->numeric(),

                            ])
                            ->columns(2),

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
                    ->schema([

                        Forms\Components\Section::make('Featured')
                            ->schema([
                                Toggle::make('featured')
                                    ->label('Featured'),
                                Toggle::make('show_price')
                                    ->label('show price'),
                            ]),
                        Forms\Components\Section::make('Associations')
                            ->schema([
                                Forms\Components\BelongsToSelect::make('brand_id')
                                    ->label('Brand')
                                    ->preload()
                                    ->relationship('brand', 'name')
                                    ->required()
                                    ->createOptionForm([
                                        Forms\Components\Group::make()
                                            ->schema([
                                                Forms\Components\Section::make('Details')
                                                    ->schema([
                                                        Forms\Components\TextInput::make('name')
                                                            ->required()
                                                            ->maxLength(255)->required(),

                                                    ])->columns(1),

                                                Forms\Components\Section::make('Media')
                                                    ->schema([

                                                        CuratorPicker::make('image_id')
                                                            ->relationship('image', 'id')
                                                            ->label('Image'),

                                                    ])->columns(1),

                                            ])->columns(1),
                                    ]),
                                Forms\Components\BelongsToSelect::make('category_id')
                                    ->label('Category')
                                    ->preload()
                                    ->relationship('category', 'name')
                                    ->required()
                                    ->createOptionForm([
                                        Forms\Components\Group::make()
                                            ->schema([

                                                Forms\Components\Section::make('Details')
                                                    ->schema([
                                                        Forms\Components\TextInput::make('name')
                                                            ->required()
                                                            ->maxLength(255)->required(),

                                                    ])->columns(1),

                                                Forms\Components\Section::make('Media')
                                                    ->schema([

                                                        CuratorPicker::make('image_id')
                                                            ->relationship('image', 'id')
                                                            ->label('Image'),

                                                        Select::make('child_id')
                                                            ->relationship('children', 'name')
                                                            ->label('Child Category')
                                                            ->placeholder('Select Child Category')
                                                            ->multiple()
                                                            ->preload()
                                                            ->nullable(),
                                                        /*   Select::make('types')
                                          ->relationship(

                                            name: 'types',
                                            titleAttribute: 'name',
                                            modifyQueryUsing: fn (Builder $query) => $query->where('type_accessoire' ,  false)

                                          )
                                          ->searchable()
                                          ->preload()
                                          ->multiple(), */

                                                    ])->columns(1),

                                            ])->columns(1),
                                    ]),
                                Forms\Components\BelongsToSelect::make('accessory_id')
                                    ->relationship('accessories', 'name')
                                    ->preload()
                                    ->multiple()
                                    ->autofocus(),
                                Select::make('series')
                                    ->relationship(
                                        'series',
                                        'name',
                                    )->multiple()
                                    ->preload()
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
                                Select::make('types')
                                    ->relationship(
                                        name: 'types',
                                        titleAttribute: 'name',
                                        modifyQueryUsing: fn (Builder $query) => $query->where('type_accessoire', false)

                                    )
                                    ->preload()
                                    ->createOptionForm([

                                        Forms\Components\Group::make()
                                            ->schema([
                                                Forms\Components\Section::make()
                                                    ->schema([

                                                        Forms\Components\TextInput::make('name')->autofocus()->required(),
                                                        Forms\Components\Toggle::make('type_accessoire')
                                                            ->live()
                                                            ->default(false)
                                                            ->disabled(),
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
                                                            ->multiple(),

                                                    ]),

                                            ])
                                            ->columns(1),

                                    ])
                                    ->multiple(),
                                Select::make('child_id')
                                    ->relationship('children', 'name')
                                    ->label('Similliare Product')
                                    ->placeholder('Select Similliare Product')
                                    ->multiple()
                                    ->preload()
                                    ->nullable(),

                            ]),

                        Forms\Components\Section::make('Caractéristiques')
                            ->schema([
                                Select::make('frequencyBands')
                                    ->relationship(
                                        'frequencyBands',
                                        'name',
                                    )->multiple()
                                    ->preload()
                                    ->createOptionForm([
                                        Forms\Components\TextInput::make('name')->autofocus()->required(),
                                        Forms\Components\TextInput::make('description')->autofocus()->required(),
                                    ]),
                                Select::make('antennaType')
                                    ->relationship(
                                        'antennaType',
                                        'name',
                                    )->multiple()
                                    ->preload()
                                    ->createOptionForm([
                                        Forms\Components\TextInput::make('name')->autofocus()->required(),
                                        Forms\Components\TextInput::make('description')->autofocus()->required(),
                                    ]),
                                Select::make('battery')
                                    ->relationship(
                                        'battery',
                                        'name',
                                    )->multiple()
                                    ->preload()
                                    ->createOptionForm([
                                        Forms\Components\TextInput::make('name')->autofocus()->required(),
                                        Forms\Components\TextInput::make('description')->autofocus()->required(),
                                    ]),
                                Select::make('charger')
                                    ->relationship(
                                        'charger',
                                        'name',
                                    )->multiple()
                                    ->preload()
                                    ->createOptionForm([
                                        Forms\Components\TextInput::make('name')->autofocus()->required(),
                                        Forms\Components\TextInput::make('description')->autofocus()->required(),
                                    ]),
                                Select::make('quickReferenceGuide')
                                    ->relationship(
                                        'quickReferenceGuide',
                                        'name',
                                    )->multiple()
                                    ->preload()
                                    ->createOptionForm([
                                        Forms\Components\TextInput::make('name')->autofocus()->required(),
                                        Forms\Components\TextInput::make('description')->autofocus()->required(),
                                    ]),
                                Select::make('serviceWarranty')
                                    ->relationship(
                                        'serviceWarranty',
                                        'name',
                                    )->multiple()
                                    ->preload()
                                    ->createOptionForm([
                                        Forms\Components\TextInput::make('name')->autofocus()->required(),
                                        Forms\Components\TextInput::make('description')->autofocus()->required(),
                                    ]),
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

                CuratorColumn::make('medias')
                    ->ring(1)
                    ->size(40)
                  // options 0,1,2,4
                    ->overlap(0) // options 0,2,3,4
                    ->limit(1),

                Tables\Columns\TextColumn::make('name')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('price')
                    ->sortable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('currency')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('quantity')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('category.name')
                    ->label('Category')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('brand.name')
                    ->label('brand')
                    ->sortable()
                    ->searchable(),

                IconColumn::make('featured')
                    ->boolean()
                    ->trueIcon('heroicon-o-check-badge')
                    ->falseIcon('heroicon-o-x-mark'),
                IconColumn::make('show_price')
                    ->boolean()
                    ->trueIcon('heroicon-o-check-badge')
                    ->falseIcon('heroicon-o-x-mark'),

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
                    ->url(fn (Product $product) => route('product.show', $product))
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
            RelationManagers\AccessoriesRelationManager::class,
            RelationManagers\SeriesRelationManager::class,
            RelationManagers\TypesRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
