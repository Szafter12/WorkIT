<?php

namespace Database\Factories;

use App\Models\Posts;
use App\Models\Specializations;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PostSpecializations>
 */
class PostSpecializationsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "post_id" => Posts::inRandomOrder()->first()->post_id,
            "specialization_id" => Specializations::inRandomOrder()->first()->specialization_id,
        ];
    }
}
