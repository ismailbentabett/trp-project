<?php

namespace App\Filament\Resources\PostResource\Pages;

use App\Filament\Resources\PostResource;
use App\Models\Post;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPost extends EditRecord
{
    protected static string $resource = PostResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
            \Filament\Actions\Action::make('Visit')
                ->url(fn (Post $post) => route('blog.post', $post))
                ->openUrlInNewTab()
                ->icon('heroicon-s-arrow-top-right-on-square'),
        ];
    }
}
