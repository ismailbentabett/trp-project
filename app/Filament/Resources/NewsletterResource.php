<?php

namespace App\Filament\Resources;

use App\Filament\Resources\NewsletterResource\Pages;
use App\Models\Newsletter;
use Filament\Forms;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Table;

class NewsletterResource extends Resource
{
    protected static ?string $model = Newsletter::class;

    protected static ?string $navigationIcon = 'heroicon-s-inbox-arrow-down';

    protected static ?string $navigationGroup = 'Newsletter';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('subject')
                    ->autofocus()
                    ->required()
                    ->placeholder(__('subject')),
                RichEditor::make('content')
                    ->fileAttachmentsDisk('s3')
                    ->fileAttachmentsDirectory('attachments')

                    ->autofocus()
                    ->required()
                    ->placeholder(__('Content')),

                Forms\Components\BelongsToSelect::make('subscriber_id')
                    ->relationship('subscribers', 'email')
                    ->preload()
                    ->multiple()
                    ->autofocus(),

                Toggle::make('all_subscribers')
                    ->autofocus(),

            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('subject')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('content')
                    ->sortable()
                    ->searchable(),

                IconColumn::make('all_subscribers')
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
                Tables\Actions\DeleteAction::make(),
                Tables\Actions\ViewAction::make()
                    ->form([
                        Forms\Components\TextInput::make('subject')
                            ->autofocus()
                            ->required()
                            ->placeholder(__('subject')),
                        RichEditor::make('content')
                            ->fileAttachmentsDisk('s3')
                            ->fileAttachmentsDirectory('attachments')

                            ->autofocus()
                            ->required()
                            ->placeholder(__('Content')),
                    ]),

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
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListNewsletters::route('/'),
            'create' => Pages\CreateNewsletter::route('/create'),

        ];
    }
}
