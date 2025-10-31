<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Companies extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'company_name', 'company_logo_url', 'phone', 'email', 'company_info', 'addition_date'
    ];

    public function posts() {
        return $this->hasMany(Posts::class);
    }
}
