<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $categories = [
            [
                'id' => 1,
                'name' => 'MATERIELS RADIO',
                'image_id' => null,
                'created_at' => '2023-09-12T07:57:03.000000Z',
                'updated_at' => '2023-09-12T07:57:03.000000Z',
            ],
            [
                'id' => 2,
                'name' => 'Radio professionnelles',
                'image_id' => null,
                'created_at' => '2023-09-12T07:57:09.000000Z',
                'updated_at' => '2023-09-12T07:57:09.000000Z',
            ],
            [
                'id' => 3,
                'name' => 'Radio TETRA',
                'image_id' => null,
                'created_at' => '2023-09-12T07:57:16.000000Z',
                'updated_at' => '2023-09-12T07:57:16.000000Z',
            ],
            [
                'id' => 4,
                'name' => 'Wave : la solution LTE de Motorola',
                'image_id' => null,
                'created_at' => '2023-09-12T07:57:21.000000Z',
                'updated_at' => '2023-09-12T07:57:21.000000Z',
            ],
            [
                'id' => 5,
                'name' => 'Radio ATEX',
                'image_id' => null,
                'created_at' => '2023-09-12T07:57:25.000000Z',
                'updated_at' => '2023-09-12T07:57:25.000000Z',
            ],
            [
                'id' => 7,
                'name' => 'AUTRES MATERIELS',
                'image_id' => null,
                'created_at' => '2023-09-12T07:57:38.000000Z',
                'updated_at' => '2023-09-12T07:57:38.000000Z',
            ],
            [
                'id' => 8,
                'name' => 'Liaisons points à points',
                'image_id' => null,
                'created_at' => '2023-09-12T07:57:45.000000Z',
                'updated_at' => '2023-09-12T07:57:45.000000Z',
            ],
            [
                'id' => 9,
                'name' => 'Pti-DATI',
                'image_id' => null,
                'created_at' => '2023-09-12T07:57:49.000000Z',
                'updated_at' => '2023-09-12T07:57:49.000000Z',
            ],
            [
                'id' => 10,
                'name' => 'LOGICIELS',
                'image_id' => null,
                'created_at' => '2023-09-12T07:57:54.000000Z',
                'updated_at' => '2023-09-12T07:57:54.000000Z',
            ],
            [
                'id' => 11,
                'name' => 'Smart-Ptt Enterprise',
                'image_id' => null,
                'created_at' => '2023-09-12T07:57:58.000000Z',
                'updated_at' => '2023-09-12T07:57:58.000000Z',
            ],
            [
                'id' => 12,
                'name' => 'TRBOmessages',
                'image_id' => null,
                'created_at' => '2023-09-12T07:58:06.000000Z',
                'updated_at' => '2023-09-12T07:58:06.000000Z',
            ],
            [
                'id' => 13,
                'name' => 'TRBOnet',
                'image_id' => null,
                'created_at' => '2023-09-12T07:58:12.000000Z',
                'updated_at' => '2023-09-12T07:58:12.000000Z',
            ],
        ];

        foreach ($categories as $category) {
            \App\Models\Category::create($category);
        }
    }
}
