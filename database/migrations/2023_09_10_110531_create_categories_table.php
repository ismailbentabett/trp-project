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
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');

            $table->unsignedBigInteger('image_id')->nullable();
            $table->timestamps();
        });

        Schema::create('category_category', function (Blueprint $table) {
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
        Schema::dropIfExists('categories');
    }
};
