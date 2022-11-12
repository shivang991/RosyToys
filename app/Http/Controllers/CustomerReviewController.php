<?php

namespace App\Http\Controllers;

use App\Models\CustomerReview;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class CustomerReviewController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum', 'ability:customerServiceManager,server:update'])->except(['store', 'indexRandom']);
    }

    public function store()
    {
        $data = Request::validate([
            'name' => 'required',
            'message' => 'required',
            'image' => 'image|required'
        ]);

        $imgPath = Request::file('image')->store('customers');
        $imgUrl = Storage::url($imgPath);

        CustomerReview::create([
            'name' => $data['name'],
            'message' => $data['message'],
            'image_url' => $imgUrl,
            'image_path' => $imgPath
        ]);
        return Response::json(['message' => 'success']);
    }
    public function index()
    {
        return Response::json(CustomerReview::paginate(10));
    }
    public function indexRandom()
    {
        return Response::json(CustomerReview::inRandomOrder()->where('is_verified', true)->paginate(10));
    }
    public function update(CustomerReview $review)
    {
        $review->is_verified = !$review->is_verified;
        $review->save();
        return Response::json(['message' => 'success']);
    }
    public function destroy(CustomerReview $review)
    {
        if ($review->image_path)
            Storage::delete($review->image_path);
        $review->delete();
        return Response::json(['message' => 'success']);
    }
}
