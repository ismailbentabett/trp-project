<?php

namespace App\Filament\Resources\PostCategoryResource\RelationManagers;

use App\Models\PostCategory;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Table;

class ChildrenRelationManager extends RelationManager
{
    protected static string $relationship = 'children';

    public function form(Form $form): Form
    {
        return $form
            ->schema([]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('Children')
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('name')
                    ->sortable()
                    ->searchable(),
            ])
            ->filters([
                //
            ])
            ->headerActions([])
            ->actions([
                Action::make('Visit')
                    ->url(fn (PostCategory $post) => route('blog.category', $post))
                    ->openUrlInNewTab()
                    ->icon('heroicon-s-arrow-top-right-on-square'),
            ])
            ->bulkActions([]);
    }
}
