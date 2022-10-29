<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\AdminController;
use App\Http\Controllers\Auth\StaffController;
use App\Http\Controllers\CarouselImageController;
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


Route::prefix("/user")->group(function () {
    Route::middleware('auth:sanctum')->get('', function (Request $request) {
        return $request->user();
    });
    Route::get('/all', [AdminController::class, 'index']);
    Route::post('/admin/register',[AdminController::class,'store']);
    Route::post('/admin/update',[AdminController::class,'update']);
    Route::delete('/admin/image',[AdminController::class,'destroyImage']);

    Route::post('/staff/create', [StaffController::class, 'store']);
    Route::post('/staff/update/{user}', [StaffController::class, 'update']);
    Route::delete('/staff/{user}', [StaffController::class, 'destroy']);
    Route::delete('/staff/image/{user}', [StaffController::class, 'destroyImage']);
    Route::get('/staff/{user}', [StaffController::class, 'show']);
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
