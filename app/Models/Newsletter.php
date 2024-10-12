<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Newsletter extends Model
{
    use HasFactory;

    protected $fillable = [
        'subject',
        'content',
        'recipients',
        'all_subscribers',
    ];

    //news letter has many subscribers
    public function subscribers()
    {
        return $this->belongsToMany(Subscriber::class, 'newsletter_subscribers', 'newsletter_id', 'subscriber_id');
    }
}
