<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Companies>
 */
class CompaniesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "company_name" => fake()->company(),
            "company_logo_url" => fake()->imageUrl(640, 480, 'business', true),
            "phone" => fake()->numerify('#########'),
            "email" => fake()->unique()->safeEmail(),
            "company_info" => fake()->text(500),
        ];
    }
}
