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
        Schema::create('accessory_series', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('accessory_id');
            $table->unsignedBigInteger('series_id');
            $table->timestamps();
            $table->foreign('accessory_id')->references('id')->on('accessories')->onDelete('cascade');
            $table->foreign('series_id')->references('id')->on('series')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accessory_series');
    }
};
