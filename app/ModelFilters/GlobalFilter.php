<?php

namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

class GlobalFilter extends ModelFilter
{
    /**
     * Related Models that have ModelFilters as well as the method on the ModelFilter
     * As [relationMethod => [input_key1, input_key2]].
     *
     * @var array
     */
    public $relations = [];

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

    //series filter
    public function series($series)
    {
        return $this->whereHas('series', function ($query) use ($series) {
            $query->whereIn('series.id', $series);
        });
    }

    //type filter
    public function types($types)
    {
        return $this->whereHas('types', function ($query) use ($types) {
            $query->whereIn('types.id', $types);
        });
    }

    //accessories filter
    public function accessories($ids)
    {
        return $this->related('', 'id', $ids);
    }
}
