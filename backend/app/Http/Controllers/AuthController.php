<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Auth\Events\Registered;

class AuthController extends Controller
{
    public function register(Request $request)
{
    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:50',
        'surname' => 'required|string|max:50',
        'email' => 'required|email|unique:users',
        'phone' => 'required|size:9|unique:users',
        'password' => 'required|min:8|confirmed',
        'date_of_birth' => 'required|date',
        'address_line' => 'required|string|max:100',
        'city_id' => 'required|exists:city,id', 
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 422);
    }

    $user = User::create([
        'name' => $request->name,
        'surname' => $request->surname,
        'email' => $request->email,
        'phone' => $request->phone,
        'date_of_birth' => $request->date_of_birth,
        'password' => Hash::make($request->password),
        'prof_picture_path' => 'default.jpg',
        'background_picture_path' => 'bg-default.jpg',
        'description' => $request->description ?? '',
    ]);

    $user->address()->create([
        'street' => $request->address_line,
        'city_id' => $request->city_id,
    ]);

    event(new Registered($user));
    $token = auth('api')->login($user);

        return $this->respondWithToken($token);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!$token = auth('api')->attempt($credentials)) {
            return response()->json(['error' => 'Błędne dane logowania'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function logout()
    {
        auth('api')->logout();
        return response()->json(['message' => 'Wylogowano pomyślnie']);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            'user' => auth('api')->user()
        ]);
    }
}