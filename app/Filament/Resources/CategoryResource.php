<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CategoryResource\Pages;
use App\Filament\Resources\CategoryResource\RelationManagers;
use App\Models\Category;
use Awcodes\Curator\Components\Forms\CuratorPicker;
use Awcodes\Curator\Components\Tables\CuratorColumn;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class CategoryResource extends Resource
{
    protected static ?string $model = Category::class;

    protected static ?string $navigationIcon = 'heroicon-m-tag';

    protected static ?int $navigationSort = 3;

    protected static ?string $recordTitleAttribute = 'name';

    protected static ?string $navigationGroup = 'E-commerce';

    protected static ?string $navigationLabel = 'Catégories';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function form(Form $form): Form
    {
        return $form
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
                        Select::make('types')
                            ->live()
                            ->relationship(

                                name: 'types',
                                titleAttribute: 'name',
                                modifyQueryUsing: fn (Builder $query) => $query->where('type_accessoire', false)

                            )
                            ->searchable()
                            ->preload()
                            ->multiple(),

                    ])->columns(1),

            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                Tables\Columns\TextColumn::make('id')
                    ->sortable()
                    ->searchable(),

                CuratorColumn::make('image_id')
                    ->size(40)
                    ->label('Image'),

                Tables\Columns\TextColumn::make('name')
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
                    ->url(

                        fn (Category $category) => route('products.index', [
                            'paramId' => $category->id,
                            'type' => 'category',
                        ])
                    )
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
            RelationManagers\ParentsRelationManager::class,
            RelationManagers\ChildrenRelationManager::class,
            RelationManagers\TypesRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCategories::route('/'),
            'create' => Pages\CreateCategory::route('/create'),
            'edit' => Pages\EditCategory::route('/{record}/edit'),
        ];
    }
}
