<?php

use Illuminate\Support\Facades\Route;

Route::get('/test', function () {
    return \Illuminate\Support\Facades\Blade::render(<<< X
    <body>
        <h1>Hello World!</h1>
        <form method="POST" action="/test" enctype="multipart/form-data" >
            @csrf
            <input type="file" name="anything[]" multiple />
            <input type="submit"/>
        </form>
        <script>
            const form = document.querySelector("form");
            form.addEventListener("submit",(ev)=>{
                // ev.preventDefault();
                form.submit();
            })
        </script>
    </body>
    X);
});

Route::post('/test', function (\Illuminate\Http\Request $request) {
    $request->validate([
        'anything' => 'required|array',
        'anything.*' => 'image'
    ]);
    $files = $request->file('anything');

    $data = [];

    foreach ($files as $i => $file) {
        array_push($data, $i);
    }

    dd($data);
    // $request->file('anything[]')->store('test', 'public');
    // \Illuminate\Support\Facades\Storage::disk('public')->putFile('test', $request->file('file'));
    // dd($request->anything);
    return back();
});

Route::get('/{any?}', [
    function () {
        return view('index');
    }
])->where('any', '.*');
