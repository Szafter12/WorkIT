<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    public function updatePictures(Request $request)
    {

    $request->validate([
        'prof_picture' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        'background_picture' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:4096',
    ]);

    $user = $request->user();

    if ($request->hasFile('prof_picture')) {

        if ($user->prof_picture_path) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $user->prof_picture_path));
        }
        $path = $request->file('prof_picture')->store('avatars', 'public');
        $user->prof_picture_path = "http://127.0.0.1:8000".Storage::url($path);
    }

    if ($request->hasFile('background_picture')) {
        if ($user->background_picture_path) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $user->background_picture_path));
        }
        $path = $request->file('background_picture')->store('covers', 'public');
        $user->background_picture_path = "http://127.0.0.1:8000".Storage::url($path);
    }

    $user->save();

    return response()->json([
        'message' => 'Profile updated successfully',
        'user' => $user
    ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
