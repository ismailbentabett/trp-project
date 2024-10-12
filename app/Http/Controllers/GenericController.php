<?php

namespace App\Http\Controllers;

use App\Models\Generic;
use Carbon\Carbon;
use Illuminate\Http\Request;

class GenericController extends Controller
{
    public function reserve(Request $request)
    {
        // Validate the incoming request data
        $validated = $request->validate([
            'reserved_date' => 'required|date_format:Y-m-d',
            'reserved_time' => 'required|date_format:H:i:s',
            'end_reserved_date' => 'required|date_format:Y-m-d',
            'end_reserved_time' => 'required|date_format:H:i:s',
        ]);

        // Retrieve the reservable model instance
        $reservable = Generic::first();

        // Retrieve the customer model instance
        $customer = auth()->user(); // Ensure your User model uses the Customer trait from LaraReserve

        // Prepare the reservation start and end times
        $startDateTime = Carbon::createFromFormat('Y-m-d H:i:s', $validated['reserved_date'].' '.$validated['reserved_time']);
        $endDateTime = Carbon::createFromFormat('Y-m-d H:i:s', $validated['end_reserved_date'].' '.$validated['end_reserved_time']);

        try {
            // Using LaraReserve to make a reservation
            $reservation = $customer->reserve($reservable, $startDateTime, $validated['reserved_time'], $endDateTime, $validated['end_reserved_time'], ['additional' => 'details']); // Adjust 'additional' => 'details' as needed

            return response()->json([
                'message' => 'Reserved successfully.',
                'reservation_id' => $reservation->id, // Assuming the reserve method returns the reservation instance
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Reservation failed: '.$e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function show(Generic $generic)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Generic $generic)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Generic $generic)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Generic $generic)
    {
        //
    }
}
