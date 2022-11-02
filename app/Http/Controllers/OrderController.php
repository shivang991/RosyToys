<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Support\Facades\Response;

class OrderController extends Controller
{
    public function show(Order $order)
    {
        return Response::json($order);
    }
}
