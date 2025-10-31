<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = 'city';

    protected $fillable = ['city', 'postal_code'];

    public function companyAddresses() {
        return $this->hasMany(CompanyAddress::class);
    }
}
