<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Modele extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function series()
    {
        return $this->belongsToMany(Series::class);
    }
}
