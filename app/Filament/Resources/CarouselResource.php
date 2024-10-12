<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CarouselResource\Pages;
use App\Models\Carousel;
use Awcodes\Curator\Components\Forms\CuratorPicker;
use Awcodes\Curator\Components\Tables\CuratorColumn;
use Filament\Forms;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class CarouselResource extends Resource
{
    protected static ?string $model = Carousel::class;

    protected static ?string $navigationIcon = 'heroicon-m-squares-plus';

    protected static ?string $navigationGroup = 'Interface utilisateur';

    protected static ?string $navigationLabel = 'Carrousels';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->autofocus()
                    ->required()
                    ->placeholder(__('Title')),
                \Filament\Forms\Components\Select::make('title_size')
                    ->options([
                        'xs' => 'xs',
                        'sm' => 'sm',
                        'base' => 'base',
                        'lg' => 'lg',
                        'xl' => 'xl',
                        '2xl' => '2xl',
                        '3xl' => '3xl',
                        '4xl' => '4xl',
                        '5xl' => '5xl',
                        '6xl' => '6xl',
                        '7xl' => '7xl',
                        '8xl' => '8xl',
                        '9xl' => '9xl',

                    ])
                    ->default('xs')

                    ->selectablePlaceholder(false)

                    ->preload(),
                Forms\Components\TextInput::make('subtitle')
                    ->autofocus()
                    ->required()

                    ->placeholder(__('Subtitle')),
                \Filament\Forms\Components\Select::make('subtitle_size')
                    ->options([
                        'xs' => 'xs',
                        'sm' => 'sm',
                        'base' => 'base',
                        'lg' => 'lg',
                        'xl' => 'xl',
                        '2xl' => '2xl',
                        '3xl' => '3xl',
                        '4xl' => '4xl',
                        '5xl' => '5xl',
                        '6xl' => '6xl',
                        '7xl' => '7xl',
                        '8xl' => '8xl',
                        '9xl' => '9xl',

                    ])
                    ->default('xs')

                    ->selectablePlaceholder(false)

                    ->preload(),
                RichEditor::make('description')
                    ->fileAttachmentsDisk('s3')
                    ->fileAttachmentsDirectory('attachments')

                    ->autofocus()
                    ->required()
                    ->placeholder(__('Description')),
                \Filament\Forms\Components\Select::make('description_size')
                    ->options([
                        'xs' => 'xs',
                        'sm' => 'sm',
                        'base' => 'base',
                        'lg' => 'lg',
                        'xl' => 'xl',
                        '2xl' => '2xl',
                        '3xl' => '3xl',
                        '4xl' => '4xl',
                        '5xl' => '5xl',
                        '6xl' => '6xl',
                        '7xl' => '7xl',
                        '8xl' => '8xl',
                        '9xl' => '9xl',

                    ])
                    ->default('xs')
                    ->selectablePlaceholder(false)

                    ->preload(),
                Forms\Components\TextInput::make('first_button_text')
                    ->autofocus()
                    ->placeholder(__('First Button Text')),

                Forms\Components\TextInput::make('first_button_url')
                    ->autofocus()
                    ->url()
                    ->placeholder(__('First Button URL')),

                Forms\Components\TextInput::make('second_button_text')
                    ->autofocus()
                    ->placeholder(__('Second Button Text')),

                Forms\Components\TextInput::make('second_button_url')
                    ->autofocus()
                    ->url()
                    ->placeholder(__('Second Button URL')),
                CuratorPicker::make('media_id')
                    ->required()
                    ->relationship('media', 'id'),

            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                CuratorColumn::make('featured_image')
                    ->size(40)::make('media')
                    ->label(__('Image')),
                Tables\Columns\TextColumn::make('title')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('subtitle')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('description')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('first_button_text')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('first_button_url')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('second_button_text')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('second_button_url')
                    ->sortable()
                    ->searchable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),

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
            'index' => Pages\ListCarousels::route('/'),
            'create' => Pages\CreateCarousel::route('/create'),
            'edit' => Pages\EditCarousel::route('/{record}/edit'),
        ];
    }
}
