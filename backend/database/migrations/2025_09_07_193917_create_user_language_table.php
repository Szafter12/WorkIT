<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_language', function (Blueprint $table) {
            $table->foreignId('language_id')->constrained('languages');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->enum('level', ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
            $table->charset = 'utf8mb4';
            $table->collation = 'utf8mb4_polish_ci';
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_language');
    }
};