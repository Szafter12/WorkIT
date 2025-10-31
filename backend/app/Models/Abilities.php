<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Abilities extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['ability_name'];

    public function posts() {
        return $this->belongsToMany(Posts::class, 'post_abilities', 'ability_id', 'post_id');
    }
}
