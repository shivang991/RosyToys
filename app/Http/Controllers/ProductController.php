<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum', 'admin'])->except(['index', 'show']);
    }

    public function index()
    {
        $searchInput = Request::query('search');
        $priceInput = Request::query('price');

        $productBuilder = Product::where('name', 'ILIKE', "$searchInput%");

        if ($priceInput) {
            if (count($priceInput) > 1) {
                $productBuilder = $productBuilder->whereBetween('price', $priceInput);
            } else {
                $productBuilder = $productBuilder->where('price', '>', $priceInput[0]);
            }

        }

        return $productBuilder->paginate(6);
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

    public function update(Product $product)
    {
        $data = Request::validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required',
        ]);

        $image = Request::file('image');
        if (Request::file('image')) {
            Storage::delete($product->image_path);
            $imgPath = $image->store('products');
            $imgUrl = Storage::url($imgPath);
            $product->image_url = $imgUrl;
            $product->image_path = $imgPath;
        }
        $product->name = $data['name'];
        $product->description = $data['description'];
        $product->price = $data['price'];
        $product->save();
        return Response::json(['message' => 'success']);
    }

    public function destroy(Product $product)
    {
        Storage::delete($product->image_path);
        $product->delete();
        return Response::json(['message' => 'success']);
    }
}
