<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/sessionStatus', function() {
//     return ['user' => Auth::user() ? Auth::user()->load('name') : null];
// });
Route::get('/', function () {
    return redirect()->to('/home/pesantren');
});

Route::group(['middleware' => 'IsLogin'], function () {
    Route::get('/logout', 'Auth\LoginController@logout')->name('logout');
});

Route::group(['prefix' => 'home', 'middleware' => 'IsPusatLembaga'], function () {
    Route::get('/', function () {
        return redirect()->to('/home/pesantren');
    });
    Route::get('/{vue_capture?}', function () {
        return view('home');
    })->where('vue_capture', '[\/\w\.-]*');

});

//DATA
Route::group([ 'middleware' => 'IsPusatLembaga'], function () {
    //PESANTREN
    Route::get('get-pesantren-index', 'Pusat\PesantrenController@index')->name('pesantren.index');

    //TAKHASUS
    Route::get('get-takhasus', 'Pusat\PesantrenController@create')->name('pesantren.create');
});
Auth::routes();


