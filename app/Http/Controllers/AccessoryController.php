<?php

namespace App\Http\Controllers;

use App\ModelFilters\AccessoryFilter;
use App\Models\Accessory;
use App\Models\Brand;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AccessoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $accessories = Accessory::filter($request->all(), AccessoryFilter::class)->with(['category', 'brand', 'medias'])
            ->latest()
            ->paginate(10);

        $categories = Category::all();
        $brands = Brand::all();

        return Inertia::render('Accessories', [
            'accessories' => $accessories,
            'categories' => $categories,
            'brands' => $brands,
        ]);
    }

    public function FilterAccessories(Request $request)
    {
        $accessory = Accessory::filter($request->all(), AccessoryFilter::class)->with(['category', 'brand', 'medias'])
            ->latest()
            ->paginate(10);

        return $accessory;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $accessory = Accessory::find($id);
        $products = $accessory->products()->get();

        return Inertia::render('Accessory', [
            'accessory' => $accessory->load('category', 'brand', 'medias'),
            'products' => $products->load('medias'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Accessory $accessory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Accessory $accessory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Accessory $accessory)
    {
        //
    }
}
