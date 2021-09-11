<?php

use App\Http\Controllers\Auth\UserAuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::post('/login', [UserAuthController::class, 'update']);
Route::post('/logout', [UserAuthController::class, 'destroy'])->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/product')->group(function () {
    Route::get('/all', [ProductController::class, 'index']);
    Route::get('/{product}', [ProductController::class, 'show']);
    Route::post('/create', [ProductController::class, 'store']);
    Route::post('/update/{product}', [ProductController::class, 'update']);
    Route::delete('/{product}', [ProductController::class, 'destroy']);
});
