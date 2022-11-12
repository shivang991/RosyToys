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
        $this->middleware(['auth:sanctum', 'ability:customerServiceManager,server:update'])->except('store');
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
}
