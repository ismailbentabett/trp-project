<?php

namespace App\Models;

use Awcodes\Curator\Models\Media;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Carousel extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'subtitle', 'description', 'first_button_text', 'first_button_url', 'second_button_text', 'second_button_url',
        'title_size', 'subtitle_size', 'description_size',
    ];

    public function media(): BelongsTo
    {

        return $this->belongsTo(Media::class, 'media_id', 'id');
    }
}
