<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('post_ability', function (Blueprint $table) {
            $table->foreignId('post_id')->constrained('posts')->onDelete('cascade');
            $table->foreignId('ability_id')->constrained('abilities');
            $table->charset = 'utf8';
            $table->collation = 'utf8_polish_ci';
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('post_ability');
    }
};