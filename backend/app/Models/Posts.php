<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'job_title',
        'level_id',
        'contract_type_id',
        'job_description',
        'end_date',
        'work_mode_id',
        'work_dimension_id'
    ];
}
