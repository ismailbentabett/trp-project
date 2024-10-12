<?php

namespace Database\Seeders;

use Coderflex\LaravelTicket\Models\Label;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TicketLabelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $labels = [
            'Feature Request',
            'Bug',
            'Payment Issue',
            'Account Access',
            'User Interface',
            'Data Security',
            'General Inquiry',
        ];

        foreach ($labels as $label) {
            Label::create([
                'name' => $label,
                'slug' => Str::slug($label),
                'is_visible' => true,
            ]);
        }
    }
}
