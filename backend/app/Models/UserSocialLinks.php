<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserSocialLinks extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "user_social_links";
    protected $fillable = [
        "user_id",
        "platform_name",
        "url"
    ];
}
