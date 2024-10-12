<?php

namespace App\Filament\Resources\CategoryResource\RelationManagers;

use App\Models\Category;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Table;

class ParentsRelationManager extends RelationManager
{
    protected static string $relationship = 'parents';

    public function form(Form $form): Form
    {
        return $form
            ->schema([

            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('Parents')
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('name')
                    ->sortable()
                    ->searchable(), ])
            ->filters([
                //
            ])
            ->headerActions([
            ])
            ->actions([
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

            ]);
    }
}
