<?php

namespace Database\Factories;

use App\Models\Abilities;
use App\Models\Posts;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PostAbility>
 */
class PostAbilityFactory extends Factory
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
            "ability_id" => Abilities::inRandomOrder()->first()->ability_id
        ];
    }
}
