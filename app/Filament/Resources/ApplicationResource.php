<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ApplicationResource\Pages;
use App\Filament\Resources\ApplicationResource\RelationManagers;
use App\Models\Application;
use Awcodes\Curator\Components\Forms\CuratorPicker;
use Filament\Forms;
use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ApplicationResource extends Resource
{
    protected static ?string $model = Application::class;

    protected static ?string $navigationIcon = 'heroicon-m-newspaper';

    protected static ?int $navigationSort = 1;

    protected static ?string $recordTitleAttribute = 'name';

    protected static ?string $navigationLabel = 'Applications';

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    protected static ?string $navigationGroup = 'Application';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make()
                            ->schema([
                                ColorPicker::make('theme'),

                                TextInput::make('title')->required(),

                                CuratorPicker::make('featured_image_id')
                                    ->relationship('featuredImage', 'id'),

                                ColorPicker::make('title_color'),
                                ColorPicker::make('main_content_background_color'),

                            ])
                            ->columns(1),
                        Forms\Components\Section::make('Main')
                            ->schema([
                                TextInput::make('main_title')->required(),
                                RichEditor::make('main_content')
                                    ->fileAttachmentsDisk('s3')
                                    ->fileAttachmentsDirectory('attachments')
                                    ->required()
                                    ->columnSpan('full'),
                                ColorPicker::make('main_title_color'),
                                ColorPicker::make('main_content_color'),
                                ColorPicker::make('main_content_background_color'),
                            ])
                            ->columns(1),
                        Forms\Components\Section::make('Main List')
                            ->schema([
                                CuratorPicker::make('main_listing_media_id')
                                    ->relationship('mainListingMedia', 'id')
                                    ->label('Main Listing Image'),

                                RichEditor::make('main_listing')
                                    ->fileAttachmentsDisk('s3')
                                    ->fileAttachmentsDirectory('attachments')
                                    ->required()
                                    ->columnSpan('full'),
                                ColorPicker::make('main_listing_color'),
                                ColorPicker::make('main_listing_background_color'),

                            ]),
                        Forms\Components\Section::make('Secondary')
                            ->schema([
                                TextInput::make('secondary_title')->required(),
                                RichEditor::make('secondary_content')
                                    ->fileAttachmentsDisk('s3')
                                    ->fileAttachmentsDirectory('attachments')
                                    ->required()
                                    ->columnSpan('full'),
                                ColorPicker::make('secondary_title_color'),
                                ColorPicker::make('secondary_content_color'),
                                ColorPicker::make('secondary_content_background_color'),
                            ])
                            ->columns(1),
                        Forms\Components\Section::make('Secondary List')
                            ->schema([
                                CuratorPicker::make('secondary_listing_media_id')
                                    ->relationship('secondaryListingmedia', 'id')
                                    ->label('Secondary Listing Image'),
                                RichEditor::make('secondary_listing')
                                    ->fileAttachmentsDisk('s3')
                                    ->fileAttachmentsDirectory('attachments')
                                    ->required()
                                    ->columnSpan('full'),
                                ColorPicker::make('secondary_listing_title_color'),
                                ColorPicker::make('secondary_listing_background_color'),

                            ]),
                        Forms\Components\Section::make('Extra')
                            ->schema([
                                TextInput::make('extra_title')->required(),
                                RichEditor::make('extra_content')
                                    ->fileAttachmentsDisk('s3')
                                    ->fileAttachmentsDirectory('attachments')
                                    ->required()
                                    ->columnSpan('full'),
                                ColorPicker::make('extra_title_color'),
                                ColorPicker::make('extra_content_color'),
                                ColorPicker::make('extra_content_background_color'),
                            ])
                            ->columns(1),
                        Forms\Components\Section::make('Appointment')
                            ->schema([
                                ColorPicker::make('appointment_text_color'),
                                ColorPicker::make('appointment_background_color'),
                            ])
                            ->columns(1),
                    ])->columns(3),

                Forms\Components\Group::make()
                    ->schema([

                        Forms\Components\Section::make('Associations')
                            ->schema([

                                Forms\Components\BelongsToSelect::make('accessory_id')
                                    ->relationship('accessories', 'name')
                                    ->preload()
                                    ->multiple()
                                    ->autofocus(),
                                Forms\Components\BelongsToSelect::make('product_id')
                                    ->relationship('products', 'name')
                                    ->preload()
                                    ->multiple()
                                    ->autofocus(),
                            ]),
                    ])
                    ->columnSpan(['lg' => 1]),
            ])
            ->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('title')->searchable()
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
            RelationManagers\AccessoriesRelationManager::class,
            RelationManagers\ProductsRelationManager::class,
            RelationManagers\applicationContactsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListApplications::route('/'),
            'create' => Pages\CreateApplication::route('/create'),
            'edit' => Pages\EditApplication::route('/{record}/edit'),
        ];
    }
}
