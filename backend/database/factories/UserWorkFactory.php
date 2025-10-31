<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserWork>
 */
class UserWorkFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $start = fake()->dateTimeBetween('-10 years', '-1 year');
        $end = fake()->dateTimeBetween($start,'now');

        return [
            "user_id" => User::inRandomOrder()->first()->id,
            "company_name" => fake()->company(),
            "position" => fake()->jobTitle(),
            "start_date" => $start->format('Y-m-d'),
            "end_date" => $end->format('Y-m-d'),
        ];
    }
}
