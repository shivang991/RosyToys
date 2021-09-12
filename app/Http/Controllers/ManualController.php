<?php

namespace App\Http\Controllers;

use App\Models\Manual;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class ManualController extends Controller
{
    private function sendSuccessResponse()
    {
        return Response::json(['message' => 'success']);
    }


    public function show(Manual $manual)
    {
        return Response::json($manual);
    }

    public function store()
    {
        $data = Request::validate([
            'title' => 'required',
            'description' => 'required',
            'pdfFile' => 'required',
        ]);
        $pdfPath = Request::file('pdfFile')->store('manuals');
        $pdfUrl = Storage::url($pdfPath);
        $manualAttrs = [
            'title' => $data['title'],
            'description' => $data['description'],
            'pdf_path' => $pdfPath,
            'pdf_url' => $pdfUrl,
        ];
        Manual::create($manualAttrs);
        return $this->sendSuccessResponse();
    }

    public function update(Manual $manual){
        $data = Request::validate([
            'title' => 'required',
            'description' => 'required',
        ]);
        $pdf = Request::file('pdfFile');
        if(Request::file('pdfFile')){
            Storage::delete($manual->pdf_path);
            $pdfPath = $pdf->store('manuals');
            $pdfUrl = Storage::url($pdfPath);
            $manual->pdf_path = $pdfPath;
            $manual->pdf_url = $pdfUrl;
        }
        $manual->title = $data['title'];
        $manual->description = $data['description'];
        $manual->save();
        return $this->sendSuccessResponse();
    }
    public function destroy(Manual $manual)
    {
        Storage::delete($manual->pdf_path);
        $manual->delete();
        return $this->sendSuccessResponse();
    }
}
