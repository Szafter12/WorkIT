<?php

use App\Http\Controllers\CityController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get("home", [HomeController::class, "index"]);
Route::get("posts", [PostsController::class, "index"]);
Route::get("posts/{id}", [PostsController::class, "show"]);
Route::get("posts/search", [PostsController::class, "search"]);
Route::get("cities", [CityController::class, "getCity"]);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', function () {
        return response()->json(auth()->user());
    });
});


