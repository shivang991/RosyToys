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

        error_log(json_encode($validData));

        if (!Auth::attempt($validData)) {
            return Response::json(['message' => 'unauthenticated'], 401);
        }

        /** @var App\Models\User  */
        $user = Auth::user();


        if ($user->role === 'admin') {
            $token = $user->createToken('api token', ['server:update']);
            return Response::json([
                'message' => 'success',
                'token' => $token->plainTextToken,
                'profile' => $user
            ]);
        } else {
            $tokenAbilites = [];
            $staffAbilites = $user->staffAbilities()->first();

            if ($staffAbilites) {
                // if ($staffAbilites->carouselManager) array_push($tokenAbilites, 'carouselManager');
                if ($staffAbilites->productManager) array_push($tokenAbilites, 'productManager');
                // if ($staffAbilites->customerServiceManager) array_push($tokenAbilites, 'customerServiceManager');
                // if ($staffAbilites->postCreator) array_push($tokenAbilites, 'postCreator');
            }
            $token = $user->createToken('api token', $tokenAbilites);

            return Response::json([
                'message' => 'success',
                'token' => $token->plainTextToken,
                'profile' => $user,
                'abilites' => $staffAbilites
            ]);
        }
    }
}
