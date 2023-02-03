<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\StaffAbilities;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class StaffController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
        $this->middleware('admin')->except('show');
    }

    private function _getValidatedData(bool $shouldValidateEmailPass)
    {
        $fields = [
            'name' => 'required|min:4|max:24',
        ];

        if ($shouldValidateEmailPass) {
            $fields['password'] = 'required|min:6';
            $fields['email'] = 'required|email|unique:users';
        }

        return collect(Request::validate($fields));
    }

    public function store()
    {
        $data = $this->_getValidatedData(true);

        $userAttributes = $data->only('name', 'email')->merge([
            'password' => Hash::make($data['password']),
            'role' => 'staff'
        ])->toArray();

        $image = Request::file('image');
        if ($image) {
            $imgPath = $image->store('profile_image');
            $imgUrl = Storage::url($imgPath);
            $userAttributes['profile_image_url'] = $imgUrl;
            $userAttributes['profile_image_path'] = $imgPath;
        }

        $abilities = new StaffAbilities(
            ['productManager' => true]
            // $data->only('carouselManager', 'productManager', 'customerServiceManager', 'postCreator')->toArray()
        );

        User::create($userAttributes)->staffAbilities()->save($abilities);

        return Response::json(['message' => 'success']);
    }

    public function destroy(User $user)
    {
        Storage::delete($user->image_path);
        $user->delete();
        return Response::json(['message' => 'success']);
    }

    public function destroyImage(User $user)
    {
        if ($user->profile_image_path) {
            Storage::delete($user->profile_image_path);
            $user->profile_image_path = null;
            $user->profile_image_url = null;
            $user->save();
        }
        return Response::json(['message' => 'success']);
    }

    // return staff permissions
    public function show(User $user)
    {
        $authUser = Auth::user();
        if ($authUser->role === 'admin' || $authUser->id === $user->id) {
            $abilties = $user->staffAbilities()->first();
            if (!$abilties) return Response::json([]);
            return Response::json($abilties);
        }
        return Response::json(['message' => 'unauthenticated'], 401);
    }

    public function update(User $user)
    {
        $data = $this->_getValidatedData(false);
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
        return Response::json(['message' => 'success']);
    }
}
