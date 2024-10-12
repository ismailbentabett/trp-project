<?php

namespace Database\Seeders;

use App\Models\TicketCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TicketCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'Technical Support',
            'Billing and Payments',
            'Product Feedback',
            'Account Management',
            'Bug Report',
            'Feature Request',
            'General Inquiry',
            'Account Security',
            'User Interface',
            'Data Privacy',
        ];

        foreach ($categories as $category) {
            TicketCategory::create([
                'name' => $category,
                'slug' => Str::slug($category),
                'is_visible' => true,
            ]);
        }
    }
}
