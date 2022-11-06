<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;

class ContactMessageController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum', 'ability:customerServiceManager,server:update'])->except('store');
    }

    public function store()
    {
        $data = Request::validate([
            'name' => 'required',
            'email' => 'required|email',
            'subject' => 'required',
            'message' => 'required'
        ]);

        ContactMessage::create($data);
        return Response::json(['message' => 'success']);
    }
    public function index()
    {
        return ContactMessage::paginate(10);
    }
    public function show(ContactMessage $message)
    {
        return Response::json($message);
    }
    public function destroy(ContactMessage $message)
    {
        $message->delete();
        return Response::json(['message' => 'success']);
    }
}
