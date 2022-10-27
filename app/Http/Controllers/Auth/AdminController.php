<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

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

    public function destroyImage()
    {
        $user = Auth::user();
        if ($user->profile_image_path) {
            Storage::delete($user->profile_image_path);
            $user->profile_image_path = null;
            $user->profile_image_url = null;
            $user->save();
        }
        return Response::json(['message' => 'success', 'profile' => $user]);
    }

    public function update()
    {
        $data = Request::validate([
            'name' => 'required|min:4|max:12',
        ]);
        $user = Auth::user();
        $image = Request::file('image');
        if ($image) {
            if ($user->profile_image_path)
                Storage::delete($user->profile_image_path);
            $imgPath = $image->store('profile_image');
            $imgUrl = Storage::url($imgPath);
            $user->profile_image_url = $imgUrl;
            $user->profile_image_path = $imgPath;
        }
        $user->name = $data['name'];
        $user->save();
        return Response::json(['message' => 'success', 'profile' => $user]);
    }
}
