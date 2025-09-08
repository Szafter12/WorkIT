<?php

namespace Database\Factories;

use App\Models\City;
use App\Models\Companies;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CompanyAddress>
 */
class CompanyAddressFactory extends Factory
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
            "street" => fake()->streetAddress(),
            "address_line2" => fake()->secondaryAddress(),
            "city_id" => City::inRandomOrder()->first()->city_id,
        ];
    }
}
