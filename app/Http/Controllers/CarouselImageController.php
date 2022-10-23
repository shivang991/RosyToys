<?php

namespace App\Http\Controllers;

use App\Models\CarouselImage;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class CarouselImageController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum', 'admin'])->except('index');
    }

    public function index()
    {
        return CarouselImage::select('image_url', 'description', 'id')->get();
    }

    public function store()
    {
        $data = Request::validate([
            'description' => 'required',
            'image' => 'required|image'
        ]);

        $imgPath = Request::file('image')->store('carousel');
        $imgUrl = Storage::url($imgPath);

        CarouselImage::create([
            'image_url' => $imgUrl,
            'image_path' => $imgPath,
            'description' => $data['description']
        ]);

        return Response::json(['message' => 'success']);
    }

    public function destroy(CarouselImage $item)
    {
        Storage::delete($item->image_path);
        $item->delete();
        return Response::json(['message' => 'success']);
    }

    public function update(CarouselImage $item)
    {
        $data = Request::validate([
            'description' => 'required',
        ]);

        $image = Request::file('image');
        if ($image) {
            Storage::delete($item->image_path);
            $imgPath = $image->store('carousel');
            $imgUrl = Storage::url($imgPath);
            $item->image_url = $imgUrl;
            $item->image_path = $imgPath;
        }
        $item->description = $data['description'];
        $item->save();

        return Response::json(['message' => 'success']);
    }
}
