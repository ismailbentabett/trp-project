<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use SolutionForest\FilamentTree\Concern\ModelTree;

class MenuItem extends Model
{
    use HasFactory;
    use ModelTree;

    protected $fillable = ['title', 'url'];

    public function menu()
    {
        return $this->belongsTo(Menu::class);
    }
}
