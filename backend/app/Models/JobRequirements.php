<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobRequirements extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'post_id',
        'requirement'
    ];

    public function post() {
        return $this->belongsTo(Posts::class, 'post_id', 'id');
    }
}
