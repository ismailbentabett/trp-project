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
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->text('description');
            $table->string('currency')->default('EUR');
            $table->string('mini_description')->max(255)->nullable();
            $table->uuid('sku')->default(\Illuminate\Support\Str::uuid());
            $table->decimal('price');
            $table->integer('quantity')->default(0);
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('type_id')->nullable();
            $table->unsignedBigInteger('series_id')->nullable();
            $table->unsignedBigInteger('brand_id');
            $table->unsignedBigInteger('image_id')->nullable();
            $table->unsignedBigInteger('media_id')->nullable();
            $table->boolean('featured')->default(false);
            $table->boolean('show_price')->default(false);
            $table->boolean('special')->default(false);

            $table->timestamps();
        });
        Schema::create('product_product', function (Blueprint $table) {
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
        Schema::dropIfExists('products');
    }
};
