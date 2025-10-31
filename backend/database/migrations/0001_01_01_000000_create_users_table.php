<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id('id');
            $table->string('name', 50);
            $table->string('surname', 50);
            $table->date('date_of_birth');
            $table->string('email', 50)->unique();
            $table->string('phone', 9)->unique();
            $table->string('prof_picture_path', 255);
            $table->string('password', 255);
            $table->string('background_picture_path', 255);
            $table->text('description');
            $table->string('remember_token', 255)->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
            $table->charset = 'utf8mb4';
            $table->collation = 'utf8mb4_polish_ci';
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};