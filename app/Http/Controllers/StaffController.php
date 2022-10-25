<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\StaffAbilities;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class StaffController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum', 'admin']);
    }

    public function store()
    {
        $data = collect(
            Request::validate([
                'name' => 'required|min:4|max:12',
                'password' => 'required|min:6',
                'email' => 'required|email|unique:users',

                // Access
                'carouselManager' => 'boolean',
                'productManager' => 'boolean',
                'customerServiceManager' => 'boolean',
                'postCreator' => 'boolean'
            ])
        );

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
            $data->only('carouselManager', 'productManager', 'customerServiceManager', 'postCreator')->toArray()
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
}
