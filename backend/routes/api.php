<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get("home", [HomeController::class, "index"]);
Route::get("posts", [PostsController::class, "index"]);
Route::get("posts/{id}", [PostsController::class, "show"]);

Route::post('/tokens/create', function (Request $request) {
    $token = $request->user()->createToken($request->token_name);
    return ['token' => $token->plainTextToken];
});

Route::get("posts/search", [PostsController::class, "search"]);
