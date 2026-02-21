<?php

use App\Http\Controllers\CityController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

Route::get("home", [HomeController::class, "index"]);
Route::get("posts", [PostsController::class, "index"]);
Route::get("posts/{id}", [PostsController::class, "show"]);
Route::get("posts/search", [PostsController::class, "search"]);
Route::get("cities", [CityController::class, "getCity"]);

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::middleware('auth:api')->get('me', function () {
    $user = auth()->user();

    $user->load([
        'abilities',
        'address.city',
        'education',
        'languages',
        'socials',
        'works'
    ]);

    return response()->json([
        'user' => $user,
        'user_work' => $user->works,
        'user_education' => $user->education,
        'user_address' => $user->address,
        'user_language' => $user->languages,
        'user_social_links' => $user->socials,
        'user_abilities' => $user->abilities,
    ]);
});
});

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();

    return response()->json(['message' => 'Email został zweryfikowany pomyślnie.']);
})->middleware(['auth:api', 'signed'])->name('verification.verify');

Route::get('/email/verify', function () {
    return response()->json(['message' => 'Twój adres email nie jest zweryfikowany.'], 403);
})->name('verification.notice');

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();

    return response()->json(['message' => 'Link weryfikacyjny został wysłany!']);
})->middleware(['auth:api', 'throttle:6,1'])->name('verification.send');

