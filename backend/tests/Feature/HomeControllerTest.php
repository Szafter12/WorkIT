<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class HomeControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_index_returns_filters()
    {
        $response = $this->getJson('/api/home');
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'specializations',
            'technology',
            'filters',
        ]);
    }
}
