<?php

use App\Http\Controllers\AdminProfileController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\UserController;
use App\Http\Controllers\CarouselImageController;
use App\Http\Controllers\StaffController;
use App\Http\Controllers\Choices\ProductFieldChoices;
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

Route::middleware(['auth:sanctum', 'admin'])->prefix('/admin')->group(function () {
    Route::post('/register', [RegisterController::class, 'index']);
    Route::post('/update', [AdminProfileController::class, 'update']);
    Route::post('/delete', [AdminProfileController::class, 'destroy']);
});

Route::prefix("/user")->group(function () {
    Route::middleware('auth:sanctum')->get('', function (Request $request) {
        return $request->user();
    });
    Route::get('/all', [UserController::class, 'index']);
    Route::post('/staff/create', [StaffController::class, 'store']);
    Route::delete('/staff/{user}', [StaffController::class, 'destroy']);
});

Route::prefix('/product')->group(function () {
    Route::get('/all', [ProductController::class, 'index']);
    Route::get('/{product}', [ProductController::class, 'show']);
    Route::post('/create', [ProductController::class, 'store']);
    Route::post('/update/{product}', [ProductController::class, 'update']);
    Route::delete('/{product}', [ProductController::class, 'destroy']);
});

Route::prefix('/carousel')->group(function () {
    Route::get('', [CarouselImageController::class, 'index']);
    Route::post('/create', [CarouselImageController::class, 'store']);
    Route::post('/update/{item}', [CarouselImageController::class, 'update']);
    Route::delete('/{item}', [CarouselImageController::class, 'destroy']);
});


Route::prefix('/choices')->group(function () {
    Route::get('/brands', [ProductFieldChoices::class, 'brands']);
});
