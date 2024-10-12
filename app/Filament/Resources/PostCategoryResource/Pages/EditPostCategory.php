<?php

namespace App\Filament\Resources\PostCategoryResource\Pages;

use App\Filament\Resources\PostCategoryResource;
use App\Models\PostCategory;
use Filament\Actions;
use Filament\Actions\Action;
use Filament\Resources\Pages\EditRecord;

class EditPostCategory extends EditRecord
{
    protected static string $resource = PostCategoryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),

            Action::make('Visit')
                ->url(fn (PostCategory $post) => route('blog.category', $post))
                ->openUrlInNewTab()
                ->icon('heroicon-s-arrow-top-right-on-square'),
        ];
    }
}
