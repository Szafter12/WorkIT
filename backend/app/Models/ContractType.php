<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContractType extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = "contract_type";

    protected $fillable = [
        'contract_name'
    ];

    public function posts() {
        return $this->hasMany(Posts::class);
    }
}
