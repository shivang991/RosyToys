<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index()
    {
        return Product::paginate(6);
    }

    public function store()
    {
        $data = collect(Request::validate(
            collect(['name', 'description', 'price', 'image'])
                ->mapWithKeys(function ($item, $key) {
                    return [$item => 'required'];
                })->toArray()
        ))->except('image');
        $imgPath = Request::file('image')->store('products');
        $imgUrl = Storage::url($imgPath);
        $productAttrs = $data->merge(['image_path' => $imgPath, 'image_url' => $imgUrl])->toArray();
        Product::create($productAttrs);
        return Response::json(['message' => 'success']);
    }

    public function show(Product $product)
    {
        return Response::json($product);
    }

    public function destroy(Product $product)
    {
        Storage::delete($product->image_path);
        $product->delete();
        return Response::json(['message' => 'success']);
    }
}
