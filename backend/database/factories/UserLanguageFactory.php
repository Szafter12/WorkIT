<?php

namespace Database\Factories;

use App\Models\Languages;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserLanguage>
 */
class UserLanguageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "language_id" => Languages::inRandomOrder()->first()->id,
            "user_id" => User::inRandomOrder()->first()->id,
            "level" => fake()->randomElement(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']),
        ];
    }
}
