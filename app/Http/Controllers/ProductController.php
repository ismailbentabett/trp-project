<?php

namespace App\Http\Controllers;

use App\ModelFilters\GlobalFilter;
use App\ModelFilters\ProductFilter;
use App\Models\Accessory;
use App\Models\Brand;
use App\Models\Category;
use App\Models\OrderItems;
use App\Models\Product;
use App\Models\Type;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
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
    }

    public function FilterProducts(Request $request)
    {
        $product = Product::filter($request->all(), ProductFilter::class)->with(['category', 'brand', 'medias'])
            ->latest()
            ->paginate(10);

        return $product;
    }

    //product page
    public function ProductPage($id, Request $request)
    {

        $product = Product::find($id);

        if ($product->hasReview() != null) {
            //get the last review
            $product->latestReview(); //returns an instance of \Digikraaft\ReviewRating\Review

            //get the review content of the last review
            $product->latestReview()->review; //returns 'Awesome package! I highly recommend it!!'

            //get the rating of the last review
            $product->latestReview()->rating; //return 5        }

            //get the title of the last review
            $product->latestReview()->title; //returns 'Lovely packages'

        }
        if ($product === null) {
            return redirect()->back()->with('error', 'Product not found.');
        }

        // Assuming you have a relationship between Product and Accessory
        $accessories = $product->accessories;

        // Assuming Accessory model has relationships with Type, Child, Series, and Model

        $product->load(
            'category',
            'brand',
            'medias',
            'accessories',
            'frequencyBands',
            'antennaType',
            'battery',
            'charger',
            'quickReferenceGuide',
            'serviceWarranty',
            'children',
            'series',
            'types',

        );

        //customers also bought
        $orders = OrderItems::where('product_id', $product->id)->get();
        $products = [];
        foreach ($orders as $order) {
            $products[] = $order->product;
        }
        $products = array_unique($products);
        $products = array_diff($products, [$product]);
        //take the latest 5 products
        $products = array_slice($products, -5, 5, true);

        //filter out product with this id from the array
        $products = array_filter($products, function ($value, $key) use ($product) {
            return $value->id != $product->id;
        }, ARRAY_FILTER_USE_BOTH);

        $numberOfReviews = 0;
        $numberOfRatings = 0;
        $averageRating = 0;

        $fivesRating = 0;
        $fourRating = 0;
        $threeRating = 0;
        $twoRating = 0;
        $oneRating = 0;

        $reviews = [];

        if ($product->hasReview()) {

            $numberOfReviews = $product->numberOfReviews();
            $numberOfRatings = $product->numberOfRatings();
            $averageRating = $product->averageRating();

            $fivesRating = $product->reviews()->where('rating', 5)->count();
            $fourRating = $product->reviews()->where('rating', 4)->count();
            $threeRating = $product->reviews()->where('rating', 3)->count();
            $twoRating = $product->reviews()->where('rating', 2)->count();
            $oneRating = $product->reviews()->where('rating', 1)->count();

            $reviews = $product->reviews()->with('author')->latest()->take(5)->get();
        }

        /*     */

        $accessories = Accessory::filter($request->all(), GlobalFilter::class)->with(['types.series.modeles', 'types.children.series.modeles', 'brand', 'medias', 'types.children.children'])
            ->latest()
            ->paginate(10);
        // Merge all types from each accessory
        $mergedTypes = collect();

        foreach ($accessories as $accessory) {
            $mergedTypes = $mergedTypes->merge($accessory->types);
        }
        //show only top level types aka not the types that already are in a child type

        $filteredTypes = $mergedTypes->filter(function ($type) use ($mergedTypes) {
            // Check if the type exists as a child of any other type
            $isChildOfType = $mergedTypes->contains(function ($otherType) use ($type) {
                // Check if the type is in the "children" property of the other type
                return collect($otherType['children'])->contains('id', $type['id']);
            });

            // Filter out types that exist as children
            return ! $isChildOfType;
        });

        $filteredTypesArray = [];

        foreach ($filteredTypes as $type) {
            $filteredTypesArray[] = (object) $type;
        }

        return Inertia::render('ProductPage', [
            'product' => $product,
            'reviews' => $reviews,
            'customersAlsoBought' => $products,
            'numberOfReviews' => $numberOfReviews,
            'numberOfRatings' => $numberOfRatings,
            'averageRating' => $averageRating,
            'fivesRating' => $fivesRating,
            'fourRating' => $fourRating,
            'threeRating' => $threeRating,
            'twoRating' => $twoRating,
            'oneRating' => $oneRating,
            'accessories' => $accessories,
            'accessoryTypes' => $filteredTypesArray,
            'similarProducts' => $product->children->load('brand', 'medias', 'category'),
        ]);
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
    public function show($id, Request $request)
    {
        $product = Product::find($id);

        if ($product->hasReview() != null) {
            //get the last review
            $product->latestReview(); //returns an instance of \Digikraaft\ReviewRating\Review

            //get the review content of the last review
            $product->latestReview()->review; //returns 'Awesome package! I highly recommend it!!'

            //get the rating of the last review
            $product->latestReview()->rating; //return 5        }

            //get the title of the last review
            $product->latestReview()->title; //returns 'Lovely packages'

        }
        if ($product === null) {
            return redirect()->back()->with('error', 'Product not found.');
        }

        // Assuming you have a relationship between Product and Accessory
        $accessories = $product->accessories;

        // Assuming Accessory model has relationships with Type, Child, Series, and Model

        $product->load(
            'category',
            'brand',
            'medias',
            'accessories',
            'frequencyBands',
            'antennaType',
            'battery',
            'charger',
            'quickReferenceGuide',
            'serviceWarranty',
            'children',
            'series',
            'types',

        );

        //customers also bought
        $orders = OrderItems::where('product_id', $product->id)->get();
        $products = [];
        foreach ($orders as $order) {
            $products[] = $order->product;
        }
        $products = array_unique($products);
        $products = array_diff($products, [$product]);
        //take the latest 5 products
        $products = array_slice($products, -5, 5, true);

        //filter out product with this id from the array
        $products = array_filter($products, function ($value, $key) use ($product) {
            return $value->id != $product->id;
        }, ARRAY_FILTER_USE_BOTH);

        $numberOfReviews = 0;
        $numberOfRatings = 0;
        $averageRating = 0;

        $fivesRating = 0;
        $fourRating = 0;
        $threeRating = 0;
        $twoRating = 0;
        $oneRating = 0;

        $reviews = [];

        if ($product->hasReview()) {

            $numberOfReviews = $product->numberOfReviews();
            $numberOfRatings = $product->numberOfRatings();
            $averageRating = $product->averageRating();

            $fivesRating = $product->reviews()->where('rating', 5)->count();
            $fourRating = $product->reviews()->where('rating', 4)->count();
            $threeRating = $product->reviews()->where('rating', 3)->count();
            $twoRating = $product->reviews()->where('rating', 2)->count();
            $oneRating = $product->reviews()->where('rating', 1)->count();

            $reviews = $product->reviews()->with('author')->latest()->take(5)->get();
        }

        /*     */

        $accessories = Accessory::filter($request->all(), GlobalFilter::class)->with(['types.series.modeles', 'types.children.series.modeles', 'brand', 'medias', 'types.children.children'])
            ->latest()
            ->paginate(10);
        // Merge all types from each accessory
        $mergedTypes = collect();

        foreach ($accessories as $accessory) {
            $mergedTypes = $mergedTypes->merge($accessory->types);
        }
        //show only top level types aka not the types that already are in a child type

        $filteredTypes = $mergedTypes->filter(function ($type) use ($mergedTypes) {
            // Check if the type exists as a child of any other type
            $isChildOfType = $mergedTypes->contains(function ($otherType) use ($type) {
                // Check if the type is in the "children" property of the other type
                return collect($otherType['children'])->contains('id', $type['id']);
            });

            // Filter out types that exist as children
            return ! $isChildOfType;
        });

        $filteredTypesArray = [];

        foreach ($filteredTypes as $type) {
            $filteredTypesArray[] = (object) $type;
        }

        return Inertia::render('Product', [
            'product' => $product,
            'reviews' => $reviews,
            'customersAlsoBought' => $products,
            'numberOfReviews' => $numberOfReviews,
            'numberOfRatings' => $numberOfRatings,
            'averageRating' => $averageRating,
            'fivesRating' => $fivesRating,
            'fourRating' => $fourRating,
            'threeRating' => $threeRating,
            'twoRating' => $twoRating,
            'oneRating' => $oneRating,
            'accessories' => $accessories,
            'accessoryTypes' => $filteredTypesArray,
            'similarProducts' => $product->children->load('brand', 'medias', 'category'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }

    public function FilterByCategory(Request $request)
    {
    }

    public function getFeaturedProducts()
    {
        $products = Product::where('featured', true)->with(['category', 'brand', 'medias'])->take(5)->get();

        return $products;
    }
}
