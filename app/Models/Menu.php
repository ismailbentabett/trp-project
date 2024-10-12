<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use SolutionForest\FilamentTree\Concern\ModelTree;

class Menu extends Model
{
    use ModelTree;

    protected $fillable = ['parent_id', 'title', 'order', 'url'];

    protected $table = 'menus';
}
