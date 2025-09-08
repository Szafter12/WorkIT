<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkMode extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "work_mode";

    protected $fillable = [
        'work_mode_name'
    ];
}
