<?php

namespace App\Http\Controllers;

use App\Models\Accessory;
use App\Models\Product;
use App\Models\Ticket;
use App\Models\TicketCategory as Category;
use App\Models\ticketTracking;
use App\Models\User;
use Coderflex\LaravelTicket\Models\Label as TicketLabel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        $tickets = Ticket::paginate(10);

        return Inertia::render('Support/Ticketing/AllTickets', [
            'tickets' => $tickets,
            'user' => $user,
        ]);
    }

    public function AssignedToMe()
    {
        $user = auth()->user();
        $tickets = Ticket::where('assigned_to', $user->id)
            ->latest()
            ->paginate(10);

        return Inertia::render('Support/Ticketing/AssignedToMe', [
            'tickets' => $tickets,
            'user' => $user,
        ]);
    }

    public function myTickets()
    {
        $user = auth()->user();
        $tickets = Ticket::where('user_id', $user->id)
            ->latest()
            ->paginate(10);

        return Inertia::render('Support/Ticketing/MyTickets', [
            'tickets' => $tickets,
            'user' => $user,
        ]);
    }

    public function myTicketsOpen()
    {
        $user = auth()->user();
        $tickets = \App\Models\Ticket::where('user_id', $user->id)
            ->where('status', 'open')
            ->latest()
            ->paginate(10);

        return Inertia::render('Support/Ticketing/OpenedTickets', [
            'tickets' => $tickets,
            'user' => $user,
        ]);
    }

    public function myTicketsClosed()
    {
        $user = auth()->user();
        $tickets = Ticket::where('user_id', $user->id)
            ->where('status', 'closed')
            ->latest()
            ->paginate(10);

        return Inertia::render('Support/Ticketing/ClosedTickets', [
            'tickets' => $tickets,
            'user' => $user,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $ticketCategories = Category::all();
        $ticketLabels = TicketLabel::all();
        $products = Product::all();
        $accessories = Accessory::all();
        $orders = auth()->user()->orders;

        return Inertia::render('Support/Ticketing/CreateTicket', [
            'ticketCategories' => $ticketCategories,
            'ticketLabels' => $ticketLabels,
            'products' => $products,
            'accessories' => $accessories,
            'orders' => $orders,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = auth()->user();

        $ticket = Ticket::create([
            'uuid' => uniqid().'-'.time().'-'.$user->id.'-'.rand(1000, 9999),
            'user_id' => $user->id,
            'title' => $request->title,
            'priority' => $request->priority,
            'message' => $request->message,
        ]);

        foreach ($request->categories as $cat) {

            $category = Category::where('id', $cat)->get();
            $ticket->categories()->attach($category);
        }

        foreach ($request->labels as $lab) {

            $labels = TicketLabel::where('name', $lab)->get();
            $ticket->labels()->attach($labels);
        }

        //products
        if ($request->products) {
            foreach ($request->products as $prod) {
                $product = Product::where('id', $prod)->firstOrFail();
                $ticket->Products()->attach($product);
            }
        }

        //accessories
        if ($request->accessories) {
            foreach ($request->accessories as $acces) {
                $accessory = Accessory::where('id', $acces)->firstOrFail();
                $ticket->Accessories()->attach($accessory);
            }
        }

        //orders
        if ($request->orders) {
            foreach ($request->orders as $ord) {
                $order = $user->orders()->where('id', $ord)->firstOrFail();
                $ticket->Orders()->attach($order);
            }
        }

        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Ticket Created Successfully',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return $ticket;
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = auth()->user();
        $ticket = Ticket::where('user_id', $user->id)
            ->where('id', $id)
            ->firstOrFail()
            ->load('categories', 'labels', 'messages', 'Products', 'Accessories', 'Orders');
        $openUser = User::where('id', $ticket->user_id)->firstOrFail();
        $tracking = ticketTracking::where('ticket_id', $ticket->id)->get();

        foreach ($tracking as $track) {
            $track->user = User::where('id', $track->user_id)->firstOrFail();
            if ($track->comment_id) {
                $track->comment = $ticket->messages()->where('id', $track->comment_id)->firstOrFail();
            }
        }

        //get users who are admin superadmin and editor
        $admins = User::role(['Admin', 'Super Admin', 'Editor'])->get();
        $assigned_to = User::where('id', $ticket->assigned_to)->first() ?? null;

        return Inertia::render('Support/Discussions/DiscussionRoom', [
            'ticket' => $ticket,
            'openUser' => $openUser,
            'tracking' => $tracking,
            'admins' => $admins,
            'assignedtouser' => $assigned_to,

        ]);
    }

    public function tickets()
    {
        $user = auth()->user();

        return Inertia::render('Support/Tickets', [
            'user' => $user,

        ]);
    }

    public function closeTicketAsResolved(Request $request)
    {
        $ticket = Ticket::where('id', $request->ticket_id)
            ->firstOrFail();

        $ticket->closeAsResolved();

        $user = auth()->user();

        ticketTracking::create([
            'user_id' => $user->id,
            'ticket_id' => $ticket->id,
            'status' => 'closed-as-resolved',
        ]);

        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Ticket Closed as Resolved',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return response()->json('Ticket Closed as Resolved');
    }

    public function closeTicketAsUnresolved(Request $request)
    {
        $ticket = Ticket::where('id', $request->ticket_id)
            ->firstOrFail();

        $ticket->closeAsUnresolved();
        $user = auth()->user();

        ticketTracking::create([
            'user_id' => $user->id,
            'ticket_id' => $ticket->id,
            'status' => 'closed-as-unresolved',
        ]);

        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Ticket Closed as Unresolved',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return response()->json('Ticket Closed as Unresolved');
    }

    public function reopenTicket(Request $request)
    {
        $ticket = Ticket::where('id', $request->ticket_id)
            ->firstOrFail();

        $ticket->reopen();
        $user = auth()->user();

        ticketTracking::create([
            'user_id' => $user->id,
            'ticket_id' => $ticket->id,
            'status' => 'reopened',
        ]);

        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Ticket Reopened',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return response()->json('Ticket Reopened');
    }

    public function reopenTicketAsUnresolved(Request $request)
    {
        $ticket = Ticket::where('id', $request->ticket_id)
            ->firstOrFail();

        $ticket->reopenAsUnresolved();

        $user = auth()->user();

        ticketTracking::create([
            'user_id' => $user->id,
            'ticket_id' => $ticket->id,
            'status' => 'reopened-as-unresolved',
        ]);

        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Ticket Reopened as Unresolved',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return response()->json('Ticket Reopened as Unresolved');
    }

    public function sendMessage(Request $request)
    {

        $user = auth()->user();
        $ticket = Ticket::where('id', $request->ticket_id)
            ->firstOrFail();

        $message = $ticket->messageAsUser($user, $request->message);

        $tracking = ticketTracking::create([
            'user_id' => $user->id,
            'ticket_id' => $ticket->id,
            'status' => 'message-sent',
            'comment_id' => $message->id,

        ]);

        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Message Sent',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return response()->json('Message Sent'.$tracking);
    }

    public function assignToUser(Request $request)
    {
        $user = User::where('id', $request->user_id)->firstOrFail();

        $ticket = Ticket::where('id', $request->ticket_id)
            ->firstOrFail();

        $ticket->assignTo($request->user_id);
        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Ticket Assigned to User',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return response()->json('Ticket Assigned to Agent');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ticket $ticket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ticket $ticket)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ticket $ticket)
    {
        //
    }
}
