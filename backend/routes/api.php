<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get("home", [HomeController::class, "index"]);
Route::get("posts", [PostsController::class, "index"]);
