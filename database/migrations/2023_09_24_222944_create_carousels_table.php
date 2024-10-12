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
        Schema::create('carousels', function (Blueprint $table) {
            $table->id();
            $table->foreignId('media_id')->nullable();
            $table->string('title')->nullable();
            $table->string('title_size')->default('xs');
            $table->string('subtitle')->nullable();
            $table->string('subtitle_size')->default('xs');
            $table->text('description')->nullable();
            $table->string('description_size')->default('xs');
            $table->string('first_button_text')->nullable();
            $table->string('first_button_url')->nullable();
            $table->string('second_button_text')->nullable();
            $table->string('second_button_url')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carousels');
    }
};
