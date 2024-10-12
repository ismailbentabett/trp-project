<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $brands = [
            [
                'id' => 1,
                'name' => 'Motorola',
                'image_id' => null,
                'created_at' => '2023-09-12T07:57:03.000000Z',
                'updated_at' => '2023-09-12T07:57:03.000000Z',
            ],
        ];

        foreach ($brands as $brand) {
            \App\Models\Brand::create($brand);
        }
    }
}
