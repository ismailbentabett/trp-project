<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use ShayanYS\LaraReserve\Interfaces\ReservableInterface;
use ShayanYS\LaraReserve\Traits\Reservable;

class ActivitySector extends Model implements ReservableInterface
{
    use HasFactory, Reservable;

    protected $fillable = [
        'title', 'content', 'theme', 'main_title', 'main_content', 'main_listing', 'secondary_title', 'secondary_content', 'secondary_listing', 'extra_title', 'extra_content', 'extra_listing',
        'featured_image_id', 'main_listing_media_id', 'secondary_listing_media_id', 'extra_listing_media_id',
        'title_color', 'main_title_color', 'main_content_color', 'main_listing_color', 'secondary_title_color', 'secondary_content_color', 'secondary_listing_title_color', 'extra_title_color', 'extra_content_color',
        'main_content_background_color', 'main_listing_background_color', 'secondary_content_background_color', 'secondary_listing_background_color', 'extra_content_background_color', 'extra_listing_background_color',
        'appointment_text_color', 'appointment_background_color',
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }

    public function accessories()
    {
        return $this->belongsToMany(Accessory::class);
    }

    public function featuredImage()
    {
        return $this->belongsTo(\Awcodes\Curator\Models\Media::class, 'featured_image_id', 'id');
    }

    public function mainListingMedia()
    {
        return $this->belongsTo(\Awcodes\Curator\Models\Media::class, 'main_listing_media_id', 'id');
    }

    public function secondaryListingmedia()
    {
        return $this->belongsTo(\Awcodes\Curator\Models\Media::class, 'secondary_listing_media_id', 'id');
    }

    public function extraListingMedia()
    {
        return $this->belongsTo(\Awcodes\Curator\Models\Media::class, 'extra_listing_media_id', 'id');
    }

    public function activitySectorContacts()
    {

        return $this->hasMany(ActivitySectorContact::class);
    }
}
