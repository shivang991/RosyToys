<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class CategoryController extends Controller
{
    public function index(){
        $categories = Product::distinct('category')->pluck('category')->all();
        return Response::json($categories);
    }
}
