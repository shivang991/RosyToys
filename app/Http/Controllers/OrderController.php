<?php

namespace App\Http\Controllers;

use App\Mail\OrderDelivered;
use App\Mail\OrderShipped;
use App\Models\Order;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Response;

class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum', 'ability:customerServiceManager,server:update'])->except(['show']);
    }
    public function index()
    {
        return Order::with('user:email,id')
            ->where('is_paid', true)
            ->select('id', 'user_id', 'created_at', 'total_price', 'status')
            ->paginate(10);
    }
    public function show($id)
    {
        return Response::json(
            Order::with(['order_items' => function ($query) {
                $query->with('product:id,title,price');
            }, 'user:id,email'])
                ->where('id', $id)
                ->select('id', 'user_id', 'created_at', 'secret', 'address', 'total_price')
                ->first()
        );
    }
    public function update(Order $order)
    {
        switch ($order->status) {
            case 'paid':
                $order->status = 'shipped';
                $order->save();
                Mail::to($order->user->email)->send(new OrderShipped());
                break;
            case 'shipped':
                $order->delete();
                Mail::to($order->user->email)->send(new OrderDelivered());
            default:
                break;
        }
        return Response::json(['message' => 'success']);
    }
}
