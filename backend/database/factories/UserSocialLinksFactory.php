<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserSocialLinks>
 */
class UserSocialLinksFactory extends Factory
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
            "platform_name" => fake()->randomElement(['Facebook', 'Twitter', 'LinkedIn', 'Instagram', 'GitHub']),
            "url" => fake()->url(),
        ];
    }
}
