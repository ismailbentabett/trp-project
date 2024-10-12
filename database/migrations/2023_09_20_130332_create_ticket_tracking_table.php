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
        Schema::create('ticket_tracking', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->unsignedBigInteger('ticket_id');
            $table->string('status');
            $table->foreignId('comment_id')->nullable();
            $table->timestamps();
        });
        Schema::table('ticket_tracking', function (Blueprint $table) {
            $table->foreign('ticket_id')->references('id')->on('tickets')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ticket_tracking');
    }
};
