<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use App\Models\Email;
use App\Models\ServiceContact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ServiceContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function ContactUsForm(Request $request)
    {

        ServiceContact::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'company' => $request->company,
            'email' => $request->email,
            'phone' => $request->phone,
            'message' => $request->message,
            'service_id' => $request->service_id,
        ]);

        $emails = Email::all();
        $sendTos = [];
        foreach ($emails as $email) {
            array_push($sendTos, $email->email);
        }

        $name = $request->first_name.' '.$request->last_name;
        $email = $request->email;
        $phone = $request->phone;
        $subject = 'Service Contact';
        $content = $request->message;
        foreach ($sendTos as $sendTo) {
            Mail::to($sendTo)->send(new ContactMail($name, $email, $phone, $subject, $content));
        }

        //

        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Your message has been sent successfully',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return redirect()->back()->with('success', 'Votre message a été envoyé avec succès');
    }

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
    public function show(ServiceContact $serviceContact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ServiceContact $serviceContact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ServiceContact $serviceContact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ServiceContact $serviceContact)
    {
        //
    }
}
