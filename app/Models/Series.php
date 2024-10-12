<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Series extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function types()
    {
        return $this->belongsToMany(Type::class);
    }

    public function modeles()
    {
        return $this->belongsToMany(Modele::class);
    }

    //product.php
    public function products()
    {
        return $this->belongsToMany(Product::class);
    }

    //accessory.php
    public function accessories()
    {
        return $this->belongsToMany(Accessory::class);
    }
}
