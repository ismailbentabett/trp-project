<?php

namespace App\Http\Controllers;

use App\ModelFilters\GlobalFilter;
use App\Models\Accessory;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\Models\Series;
use App\Models\Type;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GlobalFilterController extends Controller
{
    //index
    public function index(Request $request)
    {
        $product = Product::filter($request->all(), GlobalFilter::class)->with(['category', 'brand', 'medias', 'types', 'series'])
            ->latest()
            ->paginate(10);

        $category = Category::with('types.series.modeles', 'types.children.series.modeles')->get();
        $types = Type::where('type_accessoire', true)
            ->with('children.series.modeles')
            ->with('series.modeles')
            ->get();

        $brands = Brand::all();

        return Inertia::render('GlobalFilter', [
            'products' => $product,
            'categories' => $category,
            'type_accessoire' => $types,
            'brands' => $brands,
        ]);
    }

    public function FilterProducts(Request $request)
    {
        $product = Product::filter($request->all(), GlobalFilter::class)->with(['category', 'brand', 'medias', 'types', 'series'])
            ->latest()
            ->paginate(10);

        return $product;
    }

    //filter accessories
    public function FilterAccessories(Request $request)
    {
        $accessories = Accessory::filter($request->all(), GlobalFilter::class)->with(['brand', 'medias', 'types', 'series'])
            ->latest()
            ->paginate(10);

        return $accessories;
    }

    //get products accessories and get the types of the produc taccessories
    public function GetProductAccessories($productId)
    {
        // Assuming you have a Product model with a relationship to Accessory
        $product = Product::find($productId);

        if (! $product) {
            // Handle the case where the product is not found
            return null;
        }

        // Assuming you have a relationship between Product and Accessory
        $accessories = $product->accessories;

        // Assuming Accessory model has relationships with Type, Child, Series, and Model
        $accessories->load('types.series.modeles', 'types.children.series.modeles', 'brand', 'medias');
        // Merge all types from each accessory
        $mergedTypes = collect();

        foreach ($accessories as $accessory) {
            $mergedTypes = $mergedTypes->merge($accessory->types);
        }

        return response()->json([
            'accessories' => $accessories,
            'types' => $mergedTypes->unique('id'),
            'product' => $product,
        ]);
    }

    public function productsByCategoryFilter()
    {
    }

    //types by category
    public function typesByCategoryFilter()
    {
    }

    //products by type
    public function productsByTypeFilter()
    {
    }

    //accessories by type
    public function accessoriesByTypeFilter()
    {
    }

    //series by type
    public function seriesByTypeFilter()
    {
    }

    //models by series
    public function modelsBySeriesFilter()
    {
    }
}
