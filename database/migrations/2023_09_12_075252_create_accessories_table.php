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
        Schema::create('accessories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->decimal('price');
            $table->unsignedBigInteger('brand_id');
            $table->unsignedBigInteger('media_id')->nullable();
            $table->unsignedBigInteger('type_id')->nullable();
            $table->unsignedBigInteger('series_id')->nullable();
            $table->boolean('show_price')->default(false);
            $table->string('url')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accessories');
    }
};
