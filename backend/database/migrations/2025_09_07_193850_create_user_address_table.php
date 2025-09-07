<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_address', function (Blueprint $table) {
            $table->id('user_address_id');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('street', 100);
            $table->foreignId('city_id')->constrained('city');
            $table->charset = 'utf8mb4';
            $table->collation = 'utf8mb4_general_ci';
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_address');
    }
};