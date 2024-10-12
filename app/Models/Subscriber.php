<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Mydnic\Subscribers\Subscriber as SubscribersSubscriber;

class Subscriber extends SubscribersSubscriber
{
    use HasFactory;

    public function newsletters()
    {
        return $this->belongsToMany(Newsletter::class, 'newsletter_subscribers', 'subscriber_id', 'newsletter_id');
    }
}
