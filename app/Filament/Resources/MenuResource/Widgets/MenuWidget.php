<?php

namespace App\Filament\Resources\MenuResource\Widgets;

use App\Models\Menu;
use Filament\Forms\Components\TextInput;
use SolutionForest\FilamentTree\Actions\Action;
use SolutionForest\FilamentTree\Actions\DeleteAction;
use SolutionForest\FilamentTree\Actions\EditAction;
use SolutionForest\FilamentTree\Widgets\Tree as BaseWidget;

class MenuWidget extends BaseWidget
{
    protected static string $model = Menu::class;

    // you can customize the maximum depth of your tree
    protected static int $maxDepth = 3;

    protected ?string $treeTitle = 'Menu';

    protected bool $enableTreeTitle = true;

    protected function getFormSchema(): array
    {
        return [
            TextInput::make('title'),
        ];
    }

    // INFOLIST, CAN DELETE
    public function getViewFormSchema(): array
    {
        return [
            //
        ];
    }

    // CUSTOMIZE ICON OF EACH RECORD, CAN DELETE
    // public function getTreeRecordIcon(?\Illuminate\Database\Eloquent\Model $record = null): ?string
    // {
    //     return null;
    // }

    // CUSTOMIZE ACTION OF EACH RECORD, CAN DELETE
    protected function getTreeActions(): array
    {
        return [
            EditAction::make(),
            DeleteAction::make(),

        ];
    }
    // OR OVERRIDE FOLLOWING METHODS
    //protected function hasDeleteAction(): bool
    //{
    //    return true;
    //}
    //protected function hasEditAction(): bool
    //{
    //    return true;
    //}
    //protected function hasViewAction(): bool
    //{
    //    return true;
    //}
}
