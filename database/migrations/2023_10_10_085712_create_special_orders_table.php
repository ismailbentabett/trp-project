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
        Schema::create('special_orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('accessory_id')->nullable();
            $table->unsignedBigInteger('offer_id')->nullable();
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
            $table->foreign('accessory_id')->references('id')->on('accessories');
            $table->foreign('offer_id')->references('id')->on('offers');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('special_orders');
    }
};
