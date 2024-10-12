<?php

namespace App\Filament\Resources\TypesResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class ChildrenRelationManager extends RelationManager
{
    protected static string $relationship = 'children';

    public function form(Form $form): Form
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
                                    ->multiple(),

                                Select::make('series')
                                    ->live()
                                    ->relationship(
                                        'series',
                                        'name',

                                    )
                                    ->searchable()
                                    ->preload()
                                    ->multiple(),

                            ]),

                    ])
                    ->columns(1),

            ])->columns(1);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('name')
            ->columns([
                Tables\Columns\TextColumn::make('id'),
                Tables\Columns\TextColumn::make('name'),
            ])
            ->filters([
                //
            ])
            ->headerActions([
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
