<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('work_dimension', function (Blueprint $table) {
            $table->id('id');
            $table->string('name', 100)->unique();
            $table->charset = 'utf8';
            $table->collation = 'utf8_polish_ci';
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('work_dimension');
    }
};
