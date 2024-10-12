<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SpecialOrder extends Model
{
    use HasFactory;

    //has many offers and accessories
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function accessory()
    {
        return $this->belongsTo(Accessory::class);
    }

    public function offer()
    {
        return $this->belongsTo(Offer::class);
    }
}
