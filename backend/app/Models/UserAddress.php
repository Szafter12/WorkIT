<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAddress extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "user_address";

    protected $fillable = [
        "user_id",
        "street",
        "city_id"
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
