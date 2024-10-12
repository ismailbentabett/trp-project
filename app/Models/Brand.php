<?php

namespace App\Models;

use Awcodes\Curator\Models\Media;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Laravel\Scout\Searchable;

class Brand extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = ['name'];

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function accessories()
    {
        return $this->hasMany(Accessory::class);
    }

    public function image(): BelongsTo
    {
        return $this->belongsTo(Media::class, 'image_id', 'id');
    }

    public function searchableAs(): string
    {
        return 'brands_index';
    }

    public function toSearchableArray()
    {
        return [
            'id' => (int) $this->id,
            'name' => $this->name,
        ];
    }
}
