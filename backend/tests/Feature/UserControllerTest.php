<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_update_pictures_requires_authentication()
    {
        $response = $this->postJson('/api/user/update-pictures', []);
        $response->assertStatus(401);
    }
}
