<?php

namespace App\Http\Controllers;

use App\Models\Abilities;
use App\Models\Specializations;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $specializations = Specializations::all();
        $technology = Abilities::all();
        
        return response()->json([
            'specializations' => $specializations,
            'technology' => $technology
        ]);
    }

    
}
