<?php

namespace App\Http\Controllers;

use App\Models\Accessory;
use App\Models\Offer;
use App\Models\SpecialOrder;
use Illuminate\Http\Request;

class SpecialOrderController extends Controller
{
    public function addAccessory(Request $request)
    {
        $order = new SpecialOrder();
        $accessoryId = $request->input('accessory_id');
        $order->accessory_id = $accessoryId;
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

        // Redirect back or return a response
    }

    // Add an offer to a special order
    public function addOffer(Request $request)
    {

        $order = new SpecialOrder();
        $offerId = $request->input('offer_id');

        // Assuming a special order can only have one offer
        $order->offer_id = $offerId;
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
    }

    //get accessory by id
    public function getAccessory($id)
    {
        return response()->json(Accessory::find($id));
    }

    //get offer by id
    public function getOffer($id)
    {
        $offer = Offer::find($id);

        return response()->json($offer->load('products'));
    }

    //
}
