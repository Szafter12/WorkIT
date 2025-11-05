<?php

use App\Http\Controllers\CityController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get("home", [HomeController::class, "index"]);
Route::get("posts", [PostsController::class, "index"]);
Route::get("posts/{id}", [PostsController::class, "show"]);
Route::get("posts/search", [PostsController::class, "search"]);
Route::get("cities", [CityController::class, "getCity"]);
