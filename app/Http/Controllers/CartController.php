<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (! auth()->check()) {

            $alerts = [
                [
                    'type' => 'warning',
                    'title' => 'Warning',
                    'message' => 'Please login to add items.',
                ],
            ];
            // Flash the array of alerts to the session
            request()->session()
                ->flash('alert', $alerts);

            return response()->json([
                'message' => 'Please login to add items.',
            ]);
        }

        $user = auth()->user();
        $cart = $user->cart;
        if ($cart == null) {
            // If the cart doesn't exist, create one and attach the product.
            $cart = Cart::create([
                'user_id' => $user->id,
            ]);
        }
        $cartItems = $cart->cartItems()
            ->with('product.medias') // Eager load product and its medias
            ->paginate(5); // Change the number to the desired number of items per page

        return Inertia::render('Profile/Cart', [
            'cart' => $cart->load('cartItems')->load('cartItems.product.medias'),
            'cartItems' => $cartItems,

        ]);
    }

    public function getMyCartItems()
    {
        if (! auth()->check()) {

            $alerts = [
                [
                    'type' => 'warning',
                    'title' => 'Warning',
                    'message' => 'Please login to add items.',
                ],
            ];
            // Flash the array of alerts to the session
            request()->session()
                ->flash('alert', $alerts);

            return response()->json([
                'message' => 'Please login to add items.',
            ]);
        }

        $user = auth()->user();
        $cart = $user->cart;
        if ($cart == null) {
            // If the cart doesn't exist, create one and attach the product.
            $cart = Cart::create([
                'user_id' => $user->id,
            ]);
        }

        return
          [
              'cartItems' => $cart->cartItems()->with('product.medias')->latest()->take(5)->get(),
              'cart' => $cart->load('cartItems')->load('cartItems.product.medias'),

          ];
    }

    public function addToCart(Request $request)
    {

        //validate request
        $request->validate([
            'quantity' => 'required|integer|min:1',
        ]);
        //check if authenticated
        if (! auth()->check()) {

            $alerts = [
                [
                    'type' => 'warning',
                    'title' => 'Warning',
                    'message' => 'Please login to add items.',
                ],
            ];
            // Flash the array of alerts to the session
            request()->session()
                ->flash('alert', $alerts);

            return response()->json([
                'message' => 'Please login to add items.',
            ]);
        }

        $user = auth()->user();

        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $productId = $request->input('product_id');
        $quantity = $request->input('quantity');

        // Check if the product is already in the cart for the user.
        //check if cart exists

        $cart = $user->cart;

        if ($cart == null) {
            // If the cart doesn't exist, create one and attach the product.
            $cart = Cart::create([
                'user_id' => $user->id,
            ]);
        }

        //find the cart item with the user id and product id  if it exists
        $checkCartItem = CartItem::where('cart_id', $cart->id)->where('product_id', $productId)->first();
        if ($checkCartItem) {
            // If the product already exists in the cart, update the quantity.
            $cartItem = $cart->cartItems()->where('product_id', $productId)->first();
            //check product quantity
            $product = Product::find($productId);
            if ($product->quantity < $quantity || $product->quantity == 0) {
                $alerts = [
                    [
                        'type' => 'warning',
                        'title' => 'Warning',
                        'message' => 'Product quantity is not enough.',
                    ],
                ];
                // Flash the array of alerts to the session
                request()->session()
                    ->flash('alert', $alerts);

                return response()->json([
                    'message' => 'Product quantity is not enough.',
                ]);
            }

            $cartItem->update([
                'quantity' => $cartItem->quantity + $quantity,
            ]);
            Product::find($productId)->update([
                'quantity' => $cartItem->product->quantity - $quantity,
            ]);
        } else {

            // If not, create a new cart item.
            CartItem::create([
                'cart_id' => $cart->id,
                'product_id' => $productId,
                'quantity' => $quantity,
                'amount' => Product::find($productId)->price * $quantity,
                'antenna_type' => $request->antenna_type,
                'battery' => $request->battery,
                'charger' => $request->charger,
                'frequency_band' => $request->frequency_band,
                'quick_reference_guide' => $request->quick_reference_guide,
                'service_warranty' => $request->service_warranty,

            ]);
            Product::find($productId)->update([
                'quantity' => Product::find($productId)->quantity - $quantity,
            ]);
            $cart->update([
                'total_amount' => $cart->total_amount + Product::find($productId)->price * $quantity,
            ]);
        }
        //go to cart page

        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Product added to cart successfully.',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return response()->json([
            'message' => 'Product added to cart successfully.',
        ]);
    }

    public function removeFromCart(Request $request)
    {
        if (! auth()->check()) {
            return redirect()->route('login')->with('error', 'Please login to remove items from your cart.');
        }

        $cart = auth()->user()->cart;

        if ($cart->products->contains($request->product)) {
            $pivotRow = $cart->products()->where('product_id', $request->product->id)->first()->pivot;
            if ($pivotRow->quantity > 1) {
                // Decrease the quantity if it's greater than 1
                $pivotRow->update(['quantity' => $pivotRow->quantity - 1]);
            } else {
                // Remove the product from the cart if the quantity is 1
                $cart->products()->detach($request->product);
            }
            $alerts = [
                [
                    'type' => 'success',
                    'title' => 'Success',
                    'message' => 'Product removed from the cart.',
                ],
            ];
            // Flash the array of alerts to the session
            request()->session()
                ->flash('alert', $alerts);

            return redirect()->back()->with('success', 'Product removed from the cart.');
        }

        return redirect()->back()->with('error', 'Product not found in the cart.');
    }

    public function viewCart()
    {
        if (! auth()->check()) {
            return redirect()->route('login')->with('error', 'Please login to view your cart.');
        }

        $cart = auth()->user()->cart;

        return view('cart.view', ['cart' => $cart]);
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
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cart $cart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        if (! auth()->check()) {
            return redirect()->route('login')->with('error', 'Please login to remove items from your cart.');
        }

        $cart = auth()->user()->cart;

        $cartItem = $cart->cartItems()->where('id', $id)->first();
        $cartItem->product->update([
            'quantity' => $cartItem->product->quantity + $cartItem->quantity,
        ]);
        $cart->update([
            'total_amount' => $cart->total_amount - $cartItem->amount,
        ]);
        $cartItem->delete();

        $cartItems = $cart->cartItems()
            ->with('product.medias') // Eager load product and its medias
            ->paginate(5); // Change the number to the desired number of items per page

        return [

            'cart' => $cart->load('cartItems')->load('cartItems.product.medias'),
            'cartItems' => $cartItems,
            'nonpaginatedCartItems' => $cart->cartItems()->with('product.medias')->latest()->take(5)->get(),

        ];
    }

    public function updateCatyItemQuantity(Request $request, $id)
    {
        if (! auth()->check()) {
            return redirect()->route('login')->with('error', 'Please login to remove items from your cart.');
        }

        $cart = auth()->user()->cart;

        $cartItem = $cart->cartItems()->where('id', $id)->first();

        $cart->update([
            'total_amount' => $cart->total_amount - $cartItem->amount,
        ]);

        $cartItem->update([
            'quantity' => $request->quantity,
            'amount' => $cartItem->product->price * $request->quantity,
        ]);

        $cart->update([
            'total_amount' => $cart->total_amount + $cartItem->amount,
        ]);

        $cartItem->product->update([
            'quantity' => $cartItem->product->quantity + $cartItem->quantity - $request->quantity,
        ]);

        return response()->json([
            'message' => 'Product quantity updated successfully.',
        ]);
    }

    //get cart count
    public function getCartCount()
    {
        if (! auth()->check()) {
            return redirect()->route('login')->with('error', 'Please login to remove items from your cart.');
        }

        return auth()->user()->cart->cartItems->count();
    }
}
