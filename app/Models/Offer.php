<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Offer extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'media_id',
    ];

    public function media(): BelongsTo
    {

        return $this->belongsTo(Media::class, 'media_id', 'id');
    }

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }

    public function specialOrder()
    {
        return $this->hasOne(SpecialOrder::class);
    }
}
