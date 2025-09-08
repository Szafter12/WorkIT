<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserWork extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "user_work";
    
    protected $fillable = [
        'user_id',
        'company_name',
        'position',
        'start_date',
        'end_date'
    ];
}
