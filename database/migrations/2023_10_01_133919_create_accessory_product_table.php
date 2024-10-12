<?php

// database/migrations/xxxx_xx_xx_create_accessory_product_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccessoryProductTable extends Migration
{
    public function up()
    {
        Schema::create('accessory_product', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('accessory_id');
            $table->unsignedBigInteger('product_id');
            $table->timestamps();

            $table->foreign('accessory_id')->references('id')->on('accessories')->onDelete('cascade');
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('accessory_product');
    }
}
