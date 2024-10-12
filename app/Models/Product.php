<?php

namespace App\Models;

use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Product extends Model
{
    use \Digikraaft\ReviewRating\Traits\HasReviewRating;
    use Filterable;
    use HasFactory;
    use Searchable;

    protected $fillable = [
        'name', 'sku', 'price', 'category_id', 'brand_id', 'description',
        'mini_description', 'quantity', 'currency', 'featured', 'ticket_id',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function Tickets()
    {
        return $this->belongsToMany(Ticket::class);
    }

    public function series()
    {
        return $this->belongsToMany(Series::class);
    }

    public function types()
    {
        return $this->belongsToMany(Type::class);
    }

    public function accessories()
    {
        return $this->belongsToMany(Accessory::class);
    }

    public function offers()
    {
        return $this->belongsToMany(Offer::class);
    }

    // Product.php
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

    public function parents()
    {
        return $this->belongsToMany(Product::class, 'product_product', 'child_id', 'parent_id')
            ->where('id', '!=', $this->id);
    }

    public function children()
    {
        return $this->belongsToMany(Product::class, 'product_product', 'parent_id', 'child_id')
            ->where('id', '!=', $this->id);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function medias()
    {
        return $this->belongsToMany(\Awcodes\Curator\Models\Media::class);
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class)->withPivot('quantity');
    }

    public function cartItems()
    {
        return $this->hasMany(CartItem::class);
    }

    public function searchableAs(): string
    {
        return 'products_index';
    }

    public function toSearchableArray()
    {
        return [
            'id' => (int) $this->id,
            'name' => $this->name,
        ];
    }

    public function frequencyBands()
    {
        return $this->belongsToMany(FrequencyBand::class);
    }

    public function antennaType()
    {
        return $this->belongsToMany(AntennaType::class);
    }

    public function battery()
    {
        return $this->belongsToMany(Battery::class);
    }

    public function charger()
    {
        return $this->belongsToMany(Charger::class);
    }

    public function quickReferenceGuide()
    {
        return $this->belongsToMany(QuickReferenceGuide::class);
    }

    public function serviceWarranty()
    {
        return $this->belongsToMany(ServiceWarranty::class);
    }
}
