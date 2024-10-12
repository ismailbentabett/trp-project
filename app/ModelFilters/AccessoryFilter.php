<?php

namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

class AccessoryFilter extends ModelFilter
{
    /**
     * Related Models that have ModelFilters as well as the method on the ModelFilter
     * As [relationMethod => [input_key1, input_key2]].
     *
     * @var array
     */
    public $relations = [
        'accessories' => ['category', 'brand'],
    ];

    public function category($ids)
    {
        return $this->whereHas('category', function ($query) use ($ids) {
            return $query->whereIn('id', $ids);
        });
    }

    //brand filter
    public function brand($ids)
    {
        return $this->whereHas('brand', function ($query) use ($ids) {
            return $query->whereIn('id', $ids);
        });
    }

    //sort by price low to high
    public function price($order)
    {
        $this->orderBy('price', $this->input('order', $order));
    }

    //alphabetical order
    //A-Z
    public function name($order)
    {
        $this->orderBy('name', $this->input('order', $order));
    }
}
