<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivitySectorContact extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'message',
        'company',
        'activity_sector_id',
    ];

    public function activitySector()
    {
        return $this->belongsTo(ActivitySector::class);
    }
}
