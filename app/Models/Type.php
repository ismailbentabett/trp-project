<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'type_accessoire',
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }

    public function accessories()
    {
        return $this->belongsToMany(Accessory::class);
    }

    public function series()
    {
        return $this->belongsToMany(Series::class);
    }

    public function parents()
    {
        return $this->belongsToMany(Type::class, 'type_type', 'child_id', 'parent_id')
            ->where('id', '!=', $this->id);
    }

    public function children()
    {
        return $this->belongsToMany(Type::class, 'type_type', 'parent_id', 'child_id')
            ->where('id', '!=', $this->id);
    }
}
