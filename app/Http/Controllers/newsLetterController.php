<?php

namespace App\Http\Controllers;

use App\Mail\NewsletterMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Mydnic\Subscribers\Subscriber;

class newsLetterController extends Controller
{
    public function sendNewsletter(Request $request)
    {
        // Validate the request and get newsletter content and recipients

        $recipients = Subscriber::all();
        foreach ($recipients as $recipient) {
            $recipients[] = $recipient->email;
        }
        $content = 'text';
        $subject = 'text';
        foreach ($recipients as $recipient) {
            Mail::to($recipient)->send(new NewsletterMail($content, $subject));
        }

        // Save newsletter details to the database

        $alerts = [
            [
                'type' => 'success',
                'title' => 'Success',
                'message' => 'Newsletter sent successfully',
            ],
        ];
        // Flash the array of alerts to the session
        request()->session()
            ->flash('alert', $alerts);

        return redirect()->back()->with('success', 'Newsletter sent successfully');
    }
}
