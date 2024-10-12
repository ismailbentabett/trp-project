<?php

namespace App\Filament\Resources\NewsletterResource\Pages;

use App\Filament\Resources\NewsletterResource;
use App\Mail\NewsletterMail;
use App\Models\Newsletter;
use App\Models\Subscriber;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Facades\Mail;

class CreateNewsletter extends CreateRecord
{
  protected static string $resource = NewsletterResource::class;

  protected function afterCreate(): void
  {
    // Runs after the form fields are saved to the database.

    $subject = $this->record->tite;
    $content = $this->record->content;
    $all_subscribers = $this->record->all_subscribers;
    $sent_at = $this->record->sent_at;

    // Send email to all subscribers

    if ($all_subscribers) {
      $recipients = Subscriber::all();
      foreach ($recipients as $recipient) {
        $recipients[] = $recipient->email;
      }
      foreach ($recipients as $recipient) {
        Mail::to($recipient)->send(new NewsletterMail($content, $subject));
      }
    } else
    // Send email to specific subscriber
    {

      $recipients = Newsletter::find($this->record->id)->subscribers;
      foreach ($recipients as $recipient) {
        $recipients[] = $recipient->email;
      }

      foreach ($recipients as $recipient) {
        Mail::to($recipient)->send(new NewsletterMail($content, $subject));
      }
    }

    // Send email to specific subscriber

  }
}
