<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_social_links', function (Blueprint $table) {
            $table->id('id');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('platform_name', 100);
            $table->string('url', 255);
            $table->charset = 'utf8mb4';
            $table->collation = 'utf8mb4_polish_ci';
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_social_links');
    }
};