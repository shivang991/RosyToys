<?php

use App\Http\Controllers\AdminProfileController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\ManualController;
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

Route::post('/login', [LoginController::class, 'index']);
Route::post('/logout', [LogoutController::class, 'index']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum', 'admin'])->prefix('/admin')->group(function () {
    Route::post('/register', [RegisterController::class, 'index']);
    Route::post('/update', [AdminProfileController::class, 'update']);
    Route::post('/delete', [AdminProfileController::class, 'destroy']);
});

Route::prefix('/product')->group(function () {
    Route::get('/all', [ProductController::class, 'index']);
    Route::get('/{product}', [ProductController::class, 'show']);
    Route::post('/create', [ProductController::class, 'store']);
    Route::post('/update/{product}', [ProductController::class, 'update']);
    Route::delete('/{product}', [ProductController::class, 'destroy']);
});

Route::prefix('/manual')->group(function () {
    Route::get('/all', [ManualController::class, 'index']);
    Route::get('/{manual}', [ManualController::class, 'show']);
    Route::delete('/{manual}', [ManualController::class, 'destroy']);
    Route::post('/create', [ManualController::class, 'store']);
    Route::post('/update/{manual}', [ManualController::class, 'update']);
});
