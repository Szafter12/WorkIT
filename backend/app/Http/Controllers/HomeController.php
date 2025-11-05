<?php

namespace App\Http\Controllers;

use App\Models\Abilities;
use App\Models\ContractType;
use App\Models\JobLevel;
use App\Models\Specializations;
use App\Models\WorkDimension;
use App\Models\WorkMode;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $specializations = Specializations::all();
        $technology = Abilities::all();
        $level = JobLevel::all();
        $contractType = ContractType::all();
        $workDimension = WorkDimension::all();
        $workMode = WorkMode::all();

        return response()->json([
            'specializations' => $specializations,
            'technology' => $technology,
            'filters' => [
                [
                    'name' => 'level',
                    'data' => $level,
                ],
                [
                    'name' => 'contractType',
                    'data' => $contractType,
                ],
                [
                    'name' => 'workDimension',
                    'data' => $workDimension,
                ],
                [
                    'name' => 'workMode',
                    'data' => $workMode,
                ]
            ],
        ]);
    }


}
