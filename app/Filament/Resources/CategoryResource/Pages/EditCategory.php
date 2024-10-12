<?php

namespace App\Filament\Resources\CategoryResource\Pages;

use App\Filament\Resources\CategoryResource;
use App\Models\Category;
use Filament\Actions;
use Filament\Actions\Action;
use Filament\Resources\Pages\EditRecord;

class EditCategory extends EditRecord
{
    protected static string $resource = CategoryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
            Action::make('Visit')
                ->url(

                    fn (Category $category) => route('products.index', [
                        'paramId' => $category->id,
                        'type' => 'category',
                    ])
                )
                ->openUrlInNewTab()
                ->icon('heroicon-s-arrow-top-right-on-square'),
        ];
    }
}
