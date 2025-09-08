<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostAbility extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "post_ability";

    protected $fillable = [
        'post_id',
        'ability_id'
    ];
}
