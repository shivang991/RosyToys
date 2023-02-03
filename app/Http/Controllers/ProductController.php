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
        $this->middleware(['auth:sanctum', 'ability:productManager,server:update'])->except(['index', 'indexRandom', 'show']);
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
        $add_filter('category');
        return $productBuilder
            ->select('id', 'title', 'price', 'image_url', 'is_promoted')
            ->paginate(12);
    }
    public function indexRandom()
    {
        return Response::json(Product::inRandomOrder()->where('is_promoted', true)->select('title', 'image_url', 'price', 'id')->paginate(4));
    }
    public function store()
    {
        $data = Request::validate([
            'title' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'brand' => 'required',
            'image' => 'required|image',
            'is_promoted' => 'required|boolean',
            'category' => 'required'
        ]);
        $imgPath = Request::file('image')->store('products');

        $imgUrl = Storage::url($imgPath);

        $productAttrs = collect($data)
            ->merge([
                'image_path' => $imgPath,
                'image_url' => $imgUrl,
            ])
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
            'is_promoted' => 'boolean',
            'category' => 'required'
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
        $product->is_promoted = $data['is_promoted'];
        $product->category = $data['category'];
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
