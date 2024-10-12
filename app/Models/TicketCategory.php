<?php

namespace App\Models;

use Coderflex\LaravelTicket\Models\Category;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TicketCategory extends Category
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'is_visible',
    ];

    //table name
    protected $table = 'ticket_categories';

    public function parents()
    {
        return $this->belongsToMany(TicketCategory::class, 'ticket_category_ticket_category', 'child_id', 'parent_id')->where('id', '!=', $this->id);
    }

    public function children()
    {
        return $this->belongsToMany(TicketCategory::class, 'ticket_category_ticket_category', 'parent_id', 'child_id')->where('id', '!=', $this->id);
    }
}
