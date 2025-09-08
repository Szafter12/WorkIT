<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('languages', function (Blueprint $table) {
            $table->id('id');
            $table->string('language', 50)->unique();
            $table->charset = 'utf8mb4';
            $table->collation = 'utf8mb4_polish_ci';
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('languages');
    }
};