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
        Schema::create('activity_sectors', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('theme')->nullable();
            $table->string('main_title')->nullable();
            $table->longText('main_content')->nullable();
            $table->longText('main_listing')->nullable();
            $table->longText('secondary_content')->nullable();
            $table->string('secondary_title')->nullable();
            $table->longText('secondary_listing')->nullable();
            $table->string('extra_title')->nullable();
            $table->longText('extra_content')->nullable();
            $table->longText('extra_listing')->nullable();
            $table->unsignedBigInteger('featured_image_id')->nullable();
            $table->unsignedBigInteger('main_listing_media_id')->nullable();
            $table->unsignedBigInteger('secondary_listing_media_id')->nullable();
            $table->unsignedBigInteger('extra_listing_media_id')->nullable();
            $table->string('title_color')->nullable();
            $table->string('main_title_color')->nullable();
            $table->string('main_content_color')->nullable();
            $table->string('main_listing_color')->nullable();
            $table->string('secondary_title_color')->nullable();
            $table->string('secondary_content_color')->nullable();
            $table->string('secondary_listing_title_color')->nullable();
            $table->string('extra_title_color')->nullable();
            $table->string('extra_content_color')->nullable();
            $table->string('main_content_background_color')->nullable();
            $table->string('main_listing_background_color')->nullable();
            $table->string('secondary_content_background_color')->nullable();
            $table->string('secondary_listing_background_color')->nullable();
            $table->string('extra_content_background_color')->nullable();
            $table->string('extra_listing_background_color')->nullable();
            $table->string('appointment_text_color')->nullable();
            $table->string('appointment_background_color')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activity_sectors');
    }
};
