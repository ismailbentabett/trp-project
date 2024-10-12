<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AccessoryResource\Pages;
use App\Filament\Resources\AccessoryResource\RelationManagers;
use App\Models\Accessory;
use Awcodes\Curator\Components\Forms\CuratorPicker;
use Awcodes\Curator\Components\Tables\CuratorColumn;
use Filament\Forms;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class AccessoryResource extends Resource
{
    protected static ?string $model = Accessory::class;

    protected static ?string $navigationIcon = 'heroicon-s-star';

    protected static ?int $navigationSort = 4;

    protected static ?string $recordTitleAttribute = 'name';

    protected static ?string $navigationGroup = 'E-commerce';

    protected static ?string $navigationLabel = 'Accessoires';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([

                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make()
                            ->schema([

                                Forms\Components\TextInput::make('name')
                                    ->required()
                                    ->autofocus(),
                                RichEditor::make('description')
                                    ->fileAttachmentsDisk('s3')
                                    ->fileAttachmentsDirectory('attachments')
                                    ->required()
                                    ->columnSpan('full'),

                                Forms\Components\TextInput::make('url')
                                    ->url()
                                    ->autofocus(),
                                Toggle::make('show_price')
                                    ->label('show price'),
                            ])
                            ->columns(2),

                        Forms\Components\Section::make('Pricing')
                            ->schema([
                                Forms\Components\TextInput::make('price')
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
                                Select::make('types')
                                    ->relationship(

                                        name: 'types',
                                        titleAttribute: 'name',
                                        modifyQueryUsing: fn (Builder $query) => $query->where('type_accessoire', true)

                                    )->preload()
                                    ->multiple()
                                    ->createOptionForm([

                                        Forms\Components\Group::make()
                                            ->schema([
                                                Forms\Components\Section::make()
                                                    ->schema([

                                                        Forms\Components\TextInput::make('name')->autofocus()->required(),
                                                        Forms\Components\Toggle::make('type_accessoire')
                                                            ->live()
                                                            ->disabled()
                                                            ->default(true),
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

                                    ]),

                                Select::make('series')
                                    ->relationship(
                                        name: 'series',
                                        titleAttribute: 'name',
                                    )->multiple()
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

                                Forms\Components\BelongsToSelect::make('product_id')
                                    ->relationship('products', 'name')
                                    ->preload()
                                    ->multiple()
                                    ->autofocus(),
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
                CuratorColumn::make('medias')
                    ->size(40)
                    ->ring(1) // options 0,1,2,4
                    ->overlap(0) // options 0,2,3,4
                    ->limit(1),

                Tables\Columns\TextColumn::make('name')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('price')
                    ->sortable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('category.name')
                    ->label('Category')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('brand.name')
                    ->label('brand')
                    ->sortable()
                    ->searchable(),
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
                    ->url(fn (Accessory $record) => route('accessory.show', $record))
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
            RelationManagers\ProductsRelationManager::class,
            RelationManagers\SeriesRelationManager::class,
            RelationManagers\TypesRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAccessories::route('/'),
            'create' => Pages\CreateAccessory::route('/create'),
            'edit' => Pages\EditAccessory::route('/{record}/edit'),
        ];
    }
}
