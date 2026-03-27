<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CityControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_get_city_returns_cities()
    {
        $response = $this->getJson('/api/cities');
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'success',
            'cities',
        ]);
    }
}
