<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('job_requirements', function (Blueprint $table) {
            $table->id('id');
            $table->foreignId('post_id')->nullable()->constrained('posts')->onDelete('cascade');
            $table->text('requirement')->nullable();
            $table->charset = 'utf8';
            $table->collation = 'utf8_polish_ci';
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('job_requirements');
    }
};