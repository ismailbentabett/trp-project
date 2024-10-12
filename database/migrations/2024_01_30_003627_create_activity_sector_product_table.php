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
        Schema::create('activity_sector_product', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('activity_sector_id');
            $table->unsignedBigInteger('product_id');

            $table->foreign('activity_sector_id')->references('id')->on('activity_sectors')->onDelete('cascade');
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activity_sector_product');
    }
};
