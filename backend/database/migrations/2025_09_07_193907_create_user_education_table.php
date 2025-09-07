<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_education', function (Blueprint $table) {
            $table->id('education_id');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('school_name', 255);
            $table->string('degree', 255);
            $table->string('field_name', 255);
            $table->date('start_date');
            $table->date('end_date');
            $table->charset = 'utf8mb4';
            $table->collation = 'utf8mb4_polish_ci';
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_education');
    }
};