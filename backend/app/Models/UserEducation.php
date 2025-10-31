<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserEducation extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "user_education";
    protected $fillable = [
        'user_id',
        'school_name',
        'degree',
        'field_name',
        'start_date',
        'end_date'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
