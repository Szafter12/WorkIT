<?php

namespace Database\Factories;

use App\Models\Abilities;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserAbilities>
 */
class UserAbilitiesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "user_id" => User::inRandomOrder()->first()->user_id,
            "ability_id" => Abilities::inRandomOrder()->first()->ability_id,
        ];
    }
}
