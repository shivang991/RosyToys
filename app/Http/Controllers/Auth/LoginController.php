<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function index()
    {
        $validData = Request::validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        if (!Auth::attempt($validData)) {
            return Response::json(['message' => 'unauthenticated'], 401);
        }

        $user = Auth::user();

        if ($user->isAdmin()) {
            $token = $user->createToken('api token', ['server:update']);
        } else {
            $token = $user->createToken('api token');
        }

        return Response::json([
            'message' => 'success',
            'token' => $token->plainTextToken,
        ]);
    }
}
