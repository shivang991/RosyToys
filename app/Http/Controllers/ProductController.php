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
        $productBuilder = Product::where('title', 'LIKE', "$searchInput%");

        $add_filter = function (string $field) use ($productBuilder) {
            $input = Request::query($field);
            if (is_array($input))
                $productBuilder = $productBuilder->whereIn($field, $input);
        };

        // $add_filter('application');
        $add_filter('brand');
        return $productBuilder->select('id', 'title', 'price', 'image_url')->paginate(6);
    }

    public function store()
    {
        $data = Request::validate([
            'title' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'brand' => 'required',
            'image' => 'required|image',
            'isAvailable' => 'required|boolean'
        ]);
        $imgPath = Request::file('image')->store('products');

        $imgUrl = Storage::url($imgPath);

        $productAttrs = collect($data)
            ->merge([
                'image_path' => $imgPath,
                'image_url' => $imgUrl,
                'is_available' => $data['isAvailable']
            ])
            ->forget('isAvailable')
            ->toArray();

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
            'title' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'brand' => 'required',
            'isAvailable' => 'boolean'
        ]);

        $image = Request::file('image');
        if ($image) {
            Storage::delete($product->image_path);
            $imgPath = $image->store('products');
            $imgUrl = Storage::url($imgPath);
            $product->image_url = $imgUrl;
            $product->image_path = $imgPath;
        }
        $product->title = $data['title'];
        $product->description = $data['description'];
        $product->price = $data['price'];
        $product->brand = $data['brand'];
        error_log(json_encode($data));
        $product->is_available = $data['isAvailable'];
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
