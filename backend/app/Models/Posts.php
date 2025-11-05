<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'job_title',
        'level_id',
        'contract_type_id',
        'job_description',
        'end_date',
        'work_mode_id',
        'work_dimension_id'
    ];

    public function company() {
        return $this->belongsTo(Companies::class);
    }

    public function level() {
        return $this->belongsTo(JobLevel::class);
    }

    public function contractType() {
        return $this->belongsTo(ContractType::class);
    }

    public function workMode() {
        return $this->belongsTo(WorkMode::class);
    }

    public function workDimension() {
        return $this->belongsTo(WorkDimension::class);
    }

    public function jobRequirements() {
        return $this->hasMany(JobRequirements::class, 'post_id', 'id');
    }

    public function jobResponsibilities() {
        return $this->hasMany(JobResponsibilities::class, 'post_id', 'id');
    }

    public function abilities() {
        return $this->belongsToMany(Abilities::class, 'post_ability', 'post_id', 'ability_id');
    }

    public function specializations() {
        return $this->belongsToMany(Specializations::class, 'post_specializations', 
        'post_id', 'specialization_id');
    }
}
