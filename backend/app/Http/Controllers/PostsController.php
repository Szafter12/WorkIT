<?php

namespace App\Http\Controllers;

use App\Models\Posts;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Posts::orderBy('created_at', 'desc')->with(['company', 'level', 'workDimension', 'workMode', 'contractType', 'jobRequirements', 'jobResponsibilities', 'abilities', 'specializations']);

        $query = $this->search($query, $request);
        $posts = $query->get();

        return response()->json([
            'success' => true,
            'data' => $posts
        ], 200);
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
        $post = Posts::where('id', $id)->with(['company', 'level', 'workDimension', 'workMode', 'contractType', 'jobRequirements', 'jobResponsibilities', 'abilities', 'specializations'])->first();

        return response()->json([
            'success' => true,
            'data' => $post
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
    private function search($query, Request $request)
    {
        $searchBar = $request->input('searchBar');
        $level = $request->query('level');
        $workDimension = $request->query('workDimension');
        $workMode = $request->query('workMode');
        $contractType = $request->query('contractType');
        $abilities = $request->query('abilities');
        $specializations = $request->query('specializations');

        if ($searchBar) {
            $query->where('job_title', 'like', '%' . $searchBar . '%');
        }
        if ($level) {
            $query->whereHas('level', function ($q) use ($level) {
                $q->whereIn('level.id', $level);
            });
        }
        if ($workDimension) {
            $query->whereHas('work_dimension', function ($q) use ($workDimension) {
                $q->whereIn('work_dimension.id', $workDimension);
            });
        }
        if ($workMode) {
            $query->whereHas('work_mode', function ($q) use ($workMode) {
                $q->whereIn('work_mode.id', $workMode);
            });
        }
        if ($contractType) {
            $query->whereHas('contract_type', function ($q) use ($contractType) {
                $q->whereIn('contract_type.id', $contractType);
            });
        }
        if ($abilities) {
            $query->whereHas('abilities', function ($q) use ($abilities) {
                $q->whereIn('abilities.id', $abilities);
            });
        }
        if ($specializations) {
            $query->whereHas('specializations', function ($q) use ($specializations) {
                $q->whereIn('specializations.id', $specializations);
            });
        }

        return $query;
    }
}
