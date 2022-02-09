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
        $productBuilder = Product::where('code', 'LIKE', "$searchInput%");

        $add_filter = function (string $field) use ($productBuilder) {
            $input = Request::query($field);
            if (is_array($input))
                $productBuilder = $productBuilder->whereIn($field, $input);
        };

        $add_filter('application');
        $add_filter('brand');

        return $productBuilder->paginate(6);
    }

    public function store()
    {
        $data = Request::validate([
            'code' => 'required',
            'description' => 'required',
            'application' => 'required',
            'brand' => 'required'
        ]);
        $imgPath = Request::file('image')->store('products');

        $imgUrl = Storage::url($imgPath);

        $productAttrs = collect($data)
            ->merge([
                'image_path' => $imgPath,
                'image_url' => $imgUrl,
                'measurements' => Request::post('measurements')
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
            'code' => 'required',
            'description' => 'required',
            'application' => 'required',
            'brand' => 'required',
        ]);

        $image = Request::file('image');
        if ($image) {
            Storage::delete($product->image_path);
            $imgPath = $image->store('products');
            $imgUrl = Storage::url($imgPath);
            $product->image_url = $imgUrl;
            $product->image_path = $imgPath;
        }
        $product->code = $data['code'];
        $product->description = $data['description'];
        $product->application = $data['application'];
        $product->brand = $data['brand'];
        $product->measurements = $data['measurements'];
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
