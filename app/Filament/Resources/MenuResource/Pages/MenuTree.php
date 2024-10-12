<?php

namespace App\Filament\Resources\MenuResource\Pages;

use App\Filament\Resources\MenuResource;
use App\Models\Menu;
use Filament\Pages\Actions\CreateAction;
use SolutionForest\FilamentTree\Resources\Pages\TreePage as BasePage;

class MenuTree extends BasePage
{
    protected static string $resource = MenuResource::class;

    protected static int $maxDepth = 3;

    protected function getActions(): array
    {
        return [
            $this->getCreateAction(),
            CreateAction::make(),

            // SAMPLE CODE, CAN DELETE
            //\Filament\Pages\Actions\Action::make('sampleAction'),
        ];
    }

    protected function hasDeleteAction(): bool
    {
        return false;
    }

    protected function hasEditAction(): bool
    {
        return true;
    }

    protected function hasViewAction(): bool
    {
        return false;
    }

    protected function getHeaderWidgets(): array
    {
        return [
            Menu::class,
        ];
    }

    protected function getFooterWidgets(): array
    {
        return [];
    }

    // CUSTOMIZE ICON OF EACH RECORD, CAN DELETE
    public function getTreeRecordIcon(\Illuminate\Database\Eloquent\Model $record = null): ?string
    {
        return 'heroicon-o-cake';
    }
}
