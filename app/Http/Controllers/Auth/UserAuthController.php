<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;

class UserAuthController extends Controller
{
    // TODO: implement registeration
    public function store()
    {}

    // Login method
    public function update()
    {
        $validData = Request::validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        if (!Auth::attempt($validData)) {
            return Response::json(['message' => 'unauthenticated'], 401);
        }

        return Response::json([
            'message' => 'success',
            'token' => Auth::user()->createToken('api token')->plainTextToken,
        ]);
    }

    // Logout method
    public function destroy()
    {
        Auth::user()->tokens()->delete();
        return Response::json(['message' => 'success']);
    }
}
