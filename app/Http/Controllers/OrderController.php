<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItems;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
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
        $orders = Order::where('user_id', $user->id)->latest()->paginate(10);

        return Inertia::render('Profile/Orders', [
            'orders' => $orders,
        ]);
    }

    public function getMyOrderItems($id)
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
        $orders = $user->orders;

        return Inertia::render('Profile/Orders', [
            'orders' => $orders,
        ]);
    }

    public function getMyOrder()
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
        $orders = Order::where('user_id', $user->id)->latest()->take(5)->get();

        return $orders;
    }

    public function PurchaseHistory()
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
        $orders = Order::where('user_id', $user->id)
            ->where('status', '==', 'Delivered')
            ->latest()->paginate(10);

        return Inertia::render('Profile/Orders', [
            'orders' => $orders,
        ]);
    }

    public function checkout(Request $request)
    {
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
        $cart = $user->cart;
        $cartItems = $cart->cartItems;
        if ($cartItems->count() == 0) {
            return response()->json([
                'message' => 'Your cart is empty.',
            ]);
        }
        $order = new Order();
        $order->user_id = auth()->id();
        $order->status = 'Order Placed';
        $order->total_price = 0;
        $order->name = $request->name;
        $order->email = $request->email;
        $order->phone = $request->phone;
        $order->address = $request->address;
        $order->city = $request->city;
        $order->country = $request->country;
        $order->state = $request->state;
        $order->zip_code = $request->zip_code;
        $order->company_name = $request->company_name;
        $order->apartment = $request->apartment;

        $order->save();
        // Iterate through cart items and move them to order items
        foreach ($cartItems as $cartItem) {
            $orderItem = new OrderItems();
            $orderItem->order_id = $order->id;
            $orderItem->user_id = auth()->id();
            $orderItem->product_id = $cartItem->product_id;
            $orderItem->quantity = $cartItem->quantity;
            $orderItem->amount = $cartItem->amount;
            $orderItem->save();
            $cartItem->delete();
            $cart->total_amount = 0;
            $cart->save();
        }
        //remove cart items

        // Optional: Calculate and update the total price of the order
        $order->total_price = $order->orderItems->sum(function ($item) {
            return $item->product->price * $item->quantity;
        });
        $order->save();

        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Order placed successfully.',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return response()->json([
            'message' => 'Order placed successfully.',
        ]);
    }

    public function CheckoutPage()
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

        return Inertia::render('Checkout', [
            'cart' => $cart->load('cartItems.product'),
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
    public function show($id)
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
        $order = Order::where('user_id', $user->id)->where('id', $id)->first();

        // Paginate the order items and load the 'product' relationship
        $orderItems = OrderItems::where('order_id', $order->id)
            ->latest()
            ->with('product.medias')
            ->with('product.accessories')

            // Load the 'product' relationship
            ->paginate(10); // Adjust the number of items per page as needed

        return Inertia::render('OrderDetails', [
            'order' => $order->load('orderItems.product'),
            'orderItems' => $orderItems,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }

    public function EditOrderPage(Request $request, $id)
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
        $order = Order::where('user_id', $user->id)->where('id', $id)->first();
        if ($order) {
            return Inertia::render('OrderEdit', [
                'order' => $order->load('orderItems.product'),

            ]);
        } else {
            //404
            $alerts = [
                [
                    'type' => 'error',
                    'title' => 'Error',
                    'message' => 'Order not found.',
                ],
            ];

            // Flash the array of alerts to the session
            request()->session()
                ->flash('alert', $alerts);

            return redirect()->back()->with('error', 'Order not found.');
        }
    }

    public function EditOrderData(Request $request, $id)
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
        $order = Order::where('user_id', $user->id)->where('id', $id)->first();

        //update order
        $order->name = $request->name;
        $order->email = $request->email;
        $order->phone = $request->phone;
        $order->address = $request->address;
        $order->city = $request->city;
        $order->country = $request->country;
        $order->state = $request->state;
        $order->zip_code = $request->zip_code;
        $order->company_name = $request->company_name;
        $order->apartment = $request->apartment;
        $order->save();
        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Order updated successfully.',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return response()->json([
            'order' => $order->load('orderItems.product'),
        ]);
    }

    //remove order item
    public function removeOrderItem(Request $request)
    {
        $id = $request->id;
        $order_id = $request->order_id;
        $orderItem = OrderItems::where('id', $id)->first();
        $order = Order::where('id', $order_id)->first();

        $orderItem->delete();

        $order->total_price = $order->orderItems->sum(function ($item) {
            return $item->product->price * $item->quantity;
        });

        $order->save();

        if ($order->orderItems->count() == 0) {
            $order->delete();

            return $order->orderItems->count();
        }

        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Order item removed successfully.',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return $order->load('orderItems.product');
    }

    public function CustomersAlsoBoaght($id)
    {
        $product = Product::where('id', $id)->first();
        $orders = OrderItems::where('product_id', $product->id)->get();
        $products = [];
        foreach ($orders as $order) {
            $products[] = $order->product;
        }
        $products = array_unique($products);
        $products = array_diff($products, [$product]);
        $products = array_rand($products, 4);

        return $products;
    }
}
