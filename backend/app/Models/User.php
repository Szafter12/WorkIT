<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;

use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail, JWTSubject
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasApiTokens, HasFactory, Notifiable;

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'surname',
        'date_of_birth',
        'phone',
        'prof_picture_path',
        'background_picture_path',
        'description',
        'email',
        'password',
    ];

    public function address() {
        return $this->hasOne(UserAddress::class);
    }

    public function education() {
        return $this->hasMany(UserEducation::class);
    }

    public function languages() {

    return $this->belongsToMany(Languages::class, 'user_language', 'user_id', 'language_id')
                ->withPivot('level');
    }


    public function abilities() {
        return $this->belongsToMany(Abilities::class, 'user_abilities', 'user_id', 'ability_id');
    }

    public function socials() {
        return $this->hasMany(UserSocialLinks::class);
    }

    public function works() {
        return $this->hasMany(UserWork::class);
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
