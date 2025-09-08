<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkDimension extends Model
{
    use HasFactory;

    protected $fillable = [
        'work_dimension_name'
    ];
}
