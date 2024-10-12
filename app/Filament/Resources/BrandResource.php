<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BrandResource\Pages;
use App\Models\Brand;
use Awcodes\Curator\Components\Forms\CuratorPicker;
use Awcodes\Curator\Components\Tables\CuratorColumn;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Table;

class BrandResource extends Resource
{
    protected static ?string $model = Brand::class;

    protected static ?string $navigationIcon = 'heroicon-m-check-badge';

    protected static ?int $navigationSort = 3;

    protected static ?string $recordTitleAttribute = 'name';

    protected static ?string $navigationLabel = 'Marques';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    protected static ?string $navigationGroup = 'E-commerce';

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

                        fn (Brand $brand) => route('products.index', [
                            'paramId' => $brand->id,
                            'type' => 'brand',
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
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBrands::route('/'),
            'create' => Pages\CreateBrand::route('/create'),
            'edit' => Pages\EditBrand::route('/{record}/edit'),
        ];
    }
}
