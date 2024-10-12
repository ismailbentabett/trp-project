<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceContact extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'message',
        'company',
        'service_id',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
