<?php

namespace App\Models;

use Awcodes\Curator\Models\Media;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Laravel\Scout\Searchable;

class Category extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = ['name'];

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function types()
    {
        return $this->belongsToMany(Type::class);
    }

    public function image(): BelongsTo
    {
        return $this->belongsTo(Media::class, 'image_id', 'id');
    }

    public function searchableAs(): string
    {
        return 'categories_index';
    }

    public function toSearchableArray()
    {
        return [
            'id' => (int) $this->id,
            'name' => $this->name,
        ];
    }

    public function parents()
    {
        return $this->belongsToMany(Category::class, 'category_category', 'child_id', 'parent_id')
            ->where('id', '!=', $this->id);
    }

    public function children()
    {
        return $this->belongsToMany(Category::class, 'category_category', 'parent_id', 'child_id')
            ->where('id', '!=', $this->id);
    }
}
