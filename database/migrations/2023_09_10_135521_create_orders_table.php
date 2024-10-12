<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('status')->default('Order placed');
            $table->decimal('total_price', 10, 2)->default(0.00);
            $table->text('name')->nullable();
            $table->text('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('country')->nullable();
            $table->string('state')->nullable();
            $table->string('zip_code')->nullable();
            $table->string('company_name')->nullable();
            $table->string('apartment')->nullable();

            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
        });

        Schema::create('order_items', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('order_id')->unsigned();
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('product_id')->unsigned();
            $table->tinyInteger('quantity');
            $table->decimal('amount');
            $table->string('status')->default('pending');
            $table->timestamps();
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_items');
        Schema::dropIfExists('orders');
    }
};
