<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PDO;

class ShopController extends Controller
{
    //
    function man(){
        return view('shopSection', ['category' => "men's clothing"]);
    }
    
    function woman(){
        return view('shopSection', ['category' => "women's clothing"]);
    }

    function product($id){
        return view('productSection', ['id' => $id]); 
    }
}
