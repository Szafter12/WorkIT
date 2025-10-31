<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Specializations extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'specialization'
    ];

    public function posts() {
        return $this->belongsToMany(Posts::class, 'post_specializations', 'specialization_id', 'post_id');
    }
}
