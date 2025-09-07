<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('city', function (Blueprint $table) {
            $table->id('city_id');
            $table->string('city', 30)->unique();
            $table->string('postal_code', 10)->unique();
            $table->charset = 'utf8';
            $table->collation = 'utf8_polish_ci';
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('city');
    }
};
