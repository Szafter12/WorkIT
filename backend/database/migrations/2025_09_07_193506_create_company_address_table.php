<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('company_address', function (Blueprint $table) {
            $table->id('id');
            $table->foreignId('company_id')->constrained('companies')->onDelete('cascade');
            $table->string('street', 100);
            $table->string('address_line2', 100)->nullable();
            $table->foreignId('city_id')->constrained('city')->onDelete('cascade');
            $table->charset = 'utf8mb4';
            $table->collation = 'utf8mb4_general_ci';
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('company_address');
    }
};