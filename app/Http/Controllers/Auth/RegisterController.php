<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;

class RegisterController extends Controller
{
    public function index()
    {
        $data = Request::validate([
            'name' => 'required|min:4|max:12',
            'password' => 'required|min:6',
            'email' => 'required|email|unique:users',
        ]);
        $authUser = Auth::user();
        $userAttributes = array_merge($data, [
            'password' => Hash::make($data['password']),
            'role' => ($authUser && $authUser->isAdmin()) ? 'admin' : 'user',
        ]);

        User::create($userAttributes);

        return Response::json(['message' => 'success']);
    }
}
