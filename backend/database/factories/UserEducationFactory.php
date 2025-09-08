<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserEducation>
 */
class UserEducationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $start = fake()->dateTimeBetween('-10 years', '-1 year');
        $end = fake()->dateTimeBetween($start, 'now');

        return [
            "user_id" => User::inRandomOrder()->first()->user_id,
            "school_name" => fake()->company(),
            "degree" => fake()->word(),
            "field_name" => fake()->word(),
            "start_date" => $start->format('d m Y'),
            "end_date" => $end->format('d m Y'),
        ];
    }
}
