<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//globalfiltercontrolelr
/* public function FilterProducts(Request $request)
  {
    $product = Product::filter($request->all(), GlobalFilter::class)->with(['category', 'brand', 'medias', 'types', 'series', 'modeles'])
      ->latest()
      ->paginate(10);

    return $product;
  }

  //filter accessories
  public function FilterAccessories(Request $request)
  {
    $accessories = Accessory::filter($request->all(), GlobalFilter::class)->with(['category', 'brand', 'medias', 'types', 'series', 'modeles'])
      ->latest()
      ->paginate(10);

    return $accessories;
  } */

//FilterProducts
//get
