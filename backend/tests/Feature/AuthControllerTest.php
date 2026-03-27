<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_register_requires_fields()
    {
        $response = $this->postJson('/api/register', []);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['name', 'surname', 'email', 'phone', 'password', 'date_of_birth', 'address_line', 'city_id']);
    }

    public function test_login_fails_with_invalid_credentials()
    {
        $response = $this->postJson('/api/login', [
            'email' => 'wrong@example.com',
            'password' => 'invalidpassword',
        ]);
        $response->assertStatus(401);
    }
}
