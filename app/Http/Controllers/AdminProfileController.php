<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class AdminProfileController extends Controller
{
    public function update()
    {
        $data = Request::validate([
            'name' => 'required|min:4|max:12',
            'password' => 'min:6',
        ]);

        $user = User::find(Auth::user()->id);

        $imgPath = null;
        $imgUrl = null;

        if ($user->profile_image_path) {
            Storage::delete($user->profile_image_path);
        }

        $uploadedImage = Request::file('profile_image');
        if ($uploadedImage) {
            $imgPath = $uploadedImage->store('profile_images');
            $imgUrl = Storage::url($imgPath);
        }

        $user->profile_image_url = $imgUrl;
        $user->profile_image_path = $imgPath;
        $user->name = $data['name'];

        if (array_key_exists('password', $data)) {
            $user->password = Hash::make($data['password']);
        }

        $user->save();

        return Response::json(['message' => 'success']);
    }

    public function destroy()
    {
        $user = User::find(Auth::user()->id);
        if ($user->profile_image_path) {
            Storage::delete($user->profile_image_path);
        }

        $user->delete();
        return Response::json(['message' => 'success']);
    }
}
