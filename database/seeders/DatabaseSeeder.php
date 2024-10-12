<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        $user = User::factory()->create([
            'name' => 'User',
            'email' => 'user@example.com',
        ]);
        $superAdmin = User::factory()->create([
            'name' => 'Super Admin',
            'email' => 'superAdmin@example.com',
        ]);
        $editor = User::factory()->create([
            'name' => 'Editor',
            'email' => 'editor@example.com',
        ]);

        $admin = User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
        ]);

        $adminRole = Role::create(['name' => 'Admin']);
        $editorRole = Role::create(['name' => 'Editor']);
        $superAdminRole = Role::create(['name' => 'Super Admin']);
        $userRole = Role::create(['name' => 'User']);
        $customerRole = Role::create(['name' => 'Customer']);

        $user->assignRole($userRole);
        $user->assignRole($customerRole);
        $superAdmin->assignRole($superAdminRole);
        $superAdmin->assignRole($userRole);
        $editor->assignRole($editorRole);
        $editor->assignRole($userRole);
        $admin->assignRole($adminRole);
        $admin->assignRole($userRole);

        $this->call(MenuSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(BrandSeeder::class);
        $this->call(GenericSeeder::class);

        $this->call(TicketCategorySeeder::class);
        $this->call(TicketLabelSeeder::class);

    }
}
