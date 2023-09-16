<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Product;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function __construct()
    {
        $this
            ->middleware(['auth:sanctum', 'ability:productManager,server:update'])
            ->except(['index', 'indexRandom', 'show']);
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

        $products = $productBuilder
            ->select('id', 'title', 'price', 'is_promoted')
            ->with('previewImage')
            ->latest('id')
            ->paginate(12);

        // flatten the response
        $products->transform(function (Product $product) {
            return array_merge(
                $product->only('id', 'title', 'price', 'is_promoted'),
                ['image_url' => $product->previewImage->src]
            );
        });
        return $products;
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
            'is_promoted' => 'required|boolean',
            'category' => 'required',
            'image' => 'required|array',
            'image.*' => 'image'
        ]);

        $product = Product::create($data);

        // store product images
        $images = Request::file('image');

        foreach ($images as $image) {
            $key = $image->store('products');
            $product->images()->create([
                'key' => $key,
                'src' => Storage::url($key)
            ]);
        }

        return Response::json(['message' => 'success']);
    }

    public function show(Product $product)
    {
        $product->load('images:id,imagable_id,imagable_type,src');
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
            'category' => 'required',

            // image related fields
            'new_images' => 'array|nullable',
            'new_images.*' => 'image',
            'changed_images' => 'array|nullable',
            'changed_images.*' => 'image',
            'removed_images' => 'array|nullable',
            'removed_images.*' => 'numeric', // id of images to remove
        ]);

        $product->update($data);

        // remove specified images
        $removed_images = $data['removed_images'] ?? [];
        foreach ($removed_images as $id) Image::select('id', 'key')->find($id)->delete();

        // update already existing images
        $changed_images = Request::file('changed_images') ?? [];
        foreach ($changed_images as $id => $new_image) {
            $image = $product->images()->find($id);
            Storage::delete($image->key);

            $new_key = $new_image->store('products');
            $image->update([
                'key' => $new_key,
                'src' => Storage::url($new_key)
            ]);
        }
        // add new images
        $new_images = Request::file('new_images') ?? [];
        foreach ($new_images as $image) {
            $key = $image->store('products');
            $product->images()->create([
                'key' => $key,
                'src' => Storage::url($key)
            ]);
        }

        return Response::json(['message' => 'success']);
    }

    public function destroy(Product $product)
    {
        Storage::delete($product->image_path);
        $product->delete();
        return Response::json(['message' => 'success']);
    }
}
