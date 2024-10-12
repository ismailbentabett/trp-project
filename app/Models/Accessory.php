<?php

namespace App\Models;

use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Accessory extends Model
{
    use Filterable;
    use HasFactory;
    use Searchable;

    protected $fillable = [
        'name', 'description', 'price', 'brand_id', 'image_id', 'url',
        'type_id', 'series_id',
    ];

    public function searchableAs(): string
    {
        return 'accessories_index';
    }

    public function applications()
    {
        return $this->belongsToMany(Application::class);
    }

    public function activitySectors()
    {
        return $this->belongsToMany(ActivitySector::class);
    }

    public function services()
    {
        return $this->belongsToMany(Service::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function series()
    {
        return $this->belongsToMany(Series::class);
    }

    public function types()
    {
        return $this->belongsToMany(Type::class);
    }

    public function Tickets()
    {
        return $this->belongsToMany(Ticket::class);
    }

    public function toSearchableArray()
    {
        return [
            'id' => (int) $this->id,
            'name' => $this->name,
        ];
    }

    public function medias()
    {
        return $this->belongsToMany(\Awcodes\Curator\Models\Media::class);
    }

    public function specialOrder()
    {
        return $this->hasOne(SpecialOrder::class);
    }
}
