<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Languages extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'language'
    ];

    public function users() {
        return $this->belongsToMany(User::class, 'user_language', 'language_id', 'user_id');
    }
}
