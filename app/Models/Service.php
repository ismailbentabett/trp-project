<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'media_id', 'title', 'content', 'features',
    ];

    protected $casts = [
        'features' => 'array',
    ];

    public function medias()
    {
        return $this->belongsToMany(\Awcodes\Curator\Models\Media::class);
    }

    public function serviceContact()
    {
        return $this->hasMany(ServiceContact::class);
    }
}
