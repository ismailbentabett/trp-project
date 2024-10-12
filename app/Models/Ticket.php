<?php

namespace App\Models;

use Coderflex\LaravelTicket\Models\Ticket as ModelsTicket;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ticket extends ModelsTicket
{
    use HasFactory;

    public function Orders()
    {
        return $this->belongsToMany(Order::class);
    }

    public function Products()
    {
        return $this->belongsToMany(Product::class);
    }

    public function Accessories()
    {
        return $this->belongsToMany(Accessory::class);
    }
}
