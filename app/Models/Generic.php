<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use ShayanYS\LaraReserve\Interfaces\ReservableInterface;
use ShayanYS\LaraReserve\Traits\Reservable;

class Generic extends Model implements ReservableInterface
{
    use HasFactory, Reservable;
}
