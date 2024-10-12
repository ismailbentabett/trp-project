<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PostCategoryResource\Pages;
use App\Filament\Resources\PostCategoryResource\RelationManagers\ChildrenRelationManager;
use App\Filament\Resources\PostCategoryResource\RelationManagers\ParentsRelationManager;
use App\Models\PostCategory;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Stephenjude\FilamentBlog\Traits\HasContentEditor;

class PostCategoryResource extends Resource
{
    use HasContentEditor;

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    protected static ?string $model = PostCategory::class;

    protected static ?string $slug = 'blog/categories';

    protected static ?string $recordTitleAttribute = 'name';

    protected static ?string $navigationGroup = 'Blog';

    protected static ?string $navigationIcon = 'heroicon-m-tag';

    protected static ?string $navigationLabel = 'Blogs';

    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make()
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label(__('filament-blog::filament-blog.name'))
                            ->required()
                            ->live()
                            ->afterStateUpdated(function (Get $get, Set $set, ?string $old, ?string $state) {
                                if (($get('slug') ?? '') !== Str::slug($old)) {
                                    return;
                                }

                                $set('slug', Str::slug($state));
                            }),
                        Forms\Components\TextInput::make('slug')
                            ->label(__('filament-blog::filament-blog.slug'))
                            ->required()
                            ->unique(PostCategory::class, 'slug', fn ($record) => $record),
                        self::getContentEditor('description'),
                        Forms\Components\Toggle::make('is_visible')
                            ->label(__('filament-blog::filament-blog.visible_to_guests'))
                            ->default(true),
                    ])
                    ->columns([
                        'sm' => 2,
                    ])
                    ->columnSpan(2),
                Forms\Components\Section::make()
                    ->schema([
                        Forms\Components\Placeholder::make('created_at')
                            ->label(__('filament-blog::filament-blog.created_at'))
                            ->content(fn (?PostCategory $record): string => $record ? $record->created_at->diffForHumans() : '-'),
                        Forms\Components\Placeholder::make('updated_at')
                            ->label(__('filament-blog::filament-blog.last_modified_at'))
                            ->content(fn (?PostCategory $record): string => $record ? $record->updated_at->diffForHumans() : '-'),

                        Select::make('child_id')
                            ->relationship('children', 'name')
                            ->label('Child Category')
                            ->placeholder('Select Child Category')
                            ->multiple()
                            ->preload()
                            ->nullable(),

                    ])
                    ->columnSpan(1),
            ])
            ->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label(__('filament-blog::filament-blog.name'))
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('slug')
                    ->label(__('filament-blog::filament-blog.slug'))
                    ->searchable()
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_visible')
                    ->boolean()
                    ->label(__('filament-blog::filament-blog.visibility')),
                Tables\Columns\TextColumn::make('updated_at')
                    ->label(__('filament-blog::filament-blog.last_updated'))
                    ->date(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),

                Action::make('Visit')
                    ->url(fn (PostCategory $post) => route('blog.category', $post))
                    ->openUrlInNewTab()
                    ->icon('heroicon-s-arrow-top-right-on-square'),
            ])
            ->filters([
                //
            ]);
    }

    public static function getRelations(): array
    {
        return [
            ChildrenRelationManager::class,
            ParentsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPostCategories::route('/'),
            'create' => Pages\CreatePostCategory::route('/create'),
            'edit' => Pages\EditPostCategory::route('/{record}/edit'),
        ];
    }

    public static function getPluralModelLabel(): string
    {
        return __('filament-blog::filament-blog.categories');
    }

    public static function getModelLabel(): string
    {
        return __('filament-blog::filament-blog.category');
    }
}
