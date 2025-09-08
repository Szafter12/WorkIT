<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLanguage extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "user_language";
    protected $fillable = [
        "language_id",
        "user_id",
        "level"
    ];
}
