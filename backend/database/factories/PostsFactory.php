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

        $itJobs = [
            'Frontend Developer',
            'Backend Developer',
            'Fullstack Developer',
            'DevOps Engineer',
            'Data Engineer',
            'Data Scientist',
            'Machine Learning Engineer',
            'QA Engineer',
            'Mobile Developer',
            'Cloud Architect',
            'Cybersecurity Specialist',
            'System Administrator',
            'IT Support Specialist',
            'Product Owner',
            'Scrum Master'
        ];

        $jobTitle = fake()->randomElement($itJobs);

        return [
            "company_id" => Companies::inRandomOrder()->first()->id,
            "job_title" => $jobTitle,
            "level_id" => JobLevel::inRandomOrder()->first()->id,
            "contract_type_id" => ContractType::inRandomOrder()->first()->id,
            "job_description" => fake()->text(200),
            "end_date" => fake()->dateTimeBetween('now', '+2 months')->format('Y-m-d'),
            "work_mode_id" => WorkMode::inRandomOrder()->first()->id,
            "work_dimension_id" => WorkDimension::inRandomOrder()->first()->id
        ];
    }
}
