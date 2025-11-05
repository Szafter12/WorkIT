<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyAddress extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "company_address";

    protected $fillable = [
        'company_id',
        'street',
        'address_line2',
        'city_id'
    ];
    
    public function company() {
        return $this->belongsTo(Companies::class);
    }

    public function city() {
        return $this->belongsTo(City::class);
    }
}
