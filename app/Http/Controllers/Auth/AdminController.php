<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum', 'admin']);
    }

    // List all users (admins and staff)
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

    // Create an admin account, then logout from old accound and login with new one
    public function store()
    {
        $data = Request::validate([
            'name' => 'required|min:4|max:12',
            'password' => 'required|min:6',
            'email' => 'required|email|unique:users',
        ]);

        $newUser = User::create([
            'name' => $data['name'],
            'password' => Hash::make($data['password']),
            'email' => $data['email'],
            'role' => 'admin'
        ]);

        Auth::user()->tokens()->delete();

        $token = $newUser->createToken('api token', ['server:update']);

        return Response::json([
            'message' => 'success',
            'token' => $token->plainTextToken,
        ]);
    }
}
