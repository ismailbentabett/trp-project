<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ticket_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');

            $table->boolean('is_visible')->default(true);
            $table->timestamps();
        });

        Schema::create('ticket_category_ticket_category', function (Blueprint $table) {
            $table->unsignedBigInteger('parent_id');
            $table->unsignedBigInteger('child_id');
            $table->primary(['parent_id', 'child_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ticket_categories');
    }
};
