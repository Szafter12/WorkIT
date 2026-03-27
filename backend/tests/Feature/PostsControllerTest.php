<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostsControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_index_returns_paginated_posts()
    {
        $response = $this->getJson('/api/posts');
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'success',
            'data' => [
                'data', 'current_page', 'last_page', 'per_page', 'total'
            ]
        ]);
    }

    public function test_show_returns_post()
    {
        $post = \App\Models\Posts::factory()->create();
        $response = $this->getJson("/api/posts/{$post->id}");
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'success',
            'data',
        ]);
    }
}
