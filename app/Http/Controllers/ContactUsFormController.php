<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use App\Models\Contact;
use App\Models\Email;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactUsFormController extends Controller
{
    // Create Contact Form
    public function index()
    {
        return Inertia::render('Contact');
    }

    // Store Contact Form data
    public function ContactUsForm(Request $request)
    {

        $name = $request->name;
        $email = $request->email;
        $phone = $request->phone;
        $subject = $request->subject;
        $content = $request->message;
        Contact::create([
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'subject' => $subject,
            'message' => $content,
        ]);

        $emails = Email::all();
        $sendTos = [];
        foreach ($emails as $email) {
            array_push($sendTos, $email->email);
        }

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
}
