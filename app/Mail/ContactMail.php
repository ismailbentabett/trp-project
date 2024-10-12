<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $name;

    public $email;

    public $phone;

    public $subject;

    public $content;

    public function __construct($name, $email, $phone, $subject, $content)
    {
        $this->name = $name;
        $this->email = $email;
        $this->phone = $phone;
        $this->subject = $subject;
        $this->content = $content;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: $this->subject
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.contact'
        );
    }

    public function build()
    {
        return $this->view('emails.contact')
            ->from($this->email, $this->name)
            ->subject($this->subject)
            ->with([
                'name' => $this->name,
                'email' => $this->email,
                'phone' => $this->phone,
                'subject' => $this->subject,
                'content' => $this->content,
            ]);
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
