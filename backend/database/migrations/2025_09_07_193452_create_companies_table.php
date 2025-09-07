<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id('company_id');
            $table->string('company_name', 255)->unique();
            $table->string('company_logo_url', 255);
            $table->string('phone', 15)->unique();
            $table->string('email', 50)->unique();
            $table->text('company_info');
            $table->timestamp('addition_date')->useCurrent();
            $table->charset = 'utf8mb4';
            $table->collation = 'utf8mb4_polish_ci';
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};