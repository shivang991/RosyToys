<?php

use Illuminate\Support\Facades\Route;

Route::get('/mail', function () {
    return new App\Mail\OrderConfirmed(6);
});

Route::get('/{any?}', [
    function () {
        return view('index');
    }
])->where('any', '.*');
