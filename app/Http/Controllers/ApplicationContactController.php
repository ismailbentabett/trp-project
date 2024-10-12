<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use App\Models\ApplicationContact;
use App\Models\Email;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ApplicationContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function ContactUsForm(Request $request)
    {

        ApplicationContact::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'company' => $request->company,
            'email' => $request->email,
            'phone' => $request->phone,
            'message' => $request->message,
            'application_id' => $request->application_id,
        ]);

        $emails = Email::all();
        $sendTos = [];
        foreach ($emails as $email) {
            array_push($sendTos, $email->email);
        }

        $name = $request->first_name.' '.$request->last_name;
        $email = $request->email;
        $phone = $request->phone;
        $subject = 'Application Contact';
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
}
