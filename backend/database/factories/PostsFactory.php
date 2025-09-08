<?php

namespace Database\Factories;

use App\Models\Companies;
use App\Models\ContractType;
use App\Models\JobLevel;
use App\Models\WorkDimension;
use App\Models\WorkMode;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Posts>
 */
class PostsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "company_id" => Companies::inRandomOrder()->first()->company_id,
            "job_title" => fake()->jobTitle(),
            "level_id" => JobLevel::inRandomOrder()->first()->level_id,
            "contract_type_id" => ContractType::inRandomOrder()->first()->contract_type_id,
            "job_description" => fake()->text(200),
            "end_date" => fake()->dateTimeBetween('now', '+2 months')->format('d m Y'),
            "work_mode_id" => WorkMode::inRandomOrder()->first()->work_mode_id,
            "work_dimension_id" => WorkDimension::inRandomOrder()->first()->work_dimension_id
        ];
    }
}
