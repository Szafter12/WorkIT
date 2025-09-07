<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id('post_id');
            $table->foreignId('company_id')->constrained('companies')->onDelete('cascade');
            $table->string('job_title', 255);
            $table->foreignId('level_id')->constrained('job_level');
            $table->foreignId('contract_type_id')->constrained('contract_type');
            $table->text('job_description');
            $table->date('end_date');
            $table->foreignId('work_mode_id')->constrained('work_mode');
            $table->timestamp('addition_date')->useCurrent();
            $table->foreignId('work_dimension_id')->constrained('work_dimension');
            $table->charset = 'utf8mb4';
            $table->collation = 'utf8mb4_polish_ci';
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};