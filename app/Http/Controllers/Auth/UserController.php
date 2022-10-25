<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum', 'admin']);
    }

    public function index()
    {
        $admins = User::where('role', 'admin')
            ->select('id', 'name', 'email', 'profile_image_url', 'created_at')
            ->get()
            ->toArray();
        $staff = User::where('role', 'staff')
            ->select('id', 'name', 'email', 'profile_image_url', 'created_at')
            ->get()
            ->toArray();
        return Response::json([
            'admins' => $admins,
            'staff' => $staff
        ]);
    }
}
