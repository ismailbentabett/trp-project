<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class GenericSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $generics = [
            [
                'id' => 1,
                'title' => 'generic',
                'created_at' => '2023-09-12T07:57:03.000000Z',
                'updated_at' => '2023-09-12T07:57:03.000000Z',
            ],
        ];

        foreach ($generics as $generic) {
            \App\Models\Generic::create($generic);
        }
    }
}
