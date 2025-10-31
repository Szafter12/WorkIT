<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobLevel extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "job_level";

    protected $fillable = [
        'level'
    ];

    public function posts() {
        return $this->hasMany(Posts::class);
    }
}
