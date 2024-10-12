<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ticketTracking extends Model
{
    use HasFactory;

    protected $table = 'ticket_tracking';

    protected $fillable = [
        'ticket_id',
        'status',
        'user_id',
        'comment_id',
    ];
}
