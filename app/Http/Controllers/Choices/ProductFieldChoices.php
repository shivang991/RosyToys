<?php

namespace App\Http\Controllers\Choices;

use App\Http\Controllers\Controller;
use App\Models\Product;

class ProductFieldChoices extends Controller
{

    private function _getChoicesFor($field)
    {
        return Product::distinct($field)->get($field)->pluck($field);
    }


    public function brands()
    {
        return $this->_getChoicesFor('brand');
    }

    public function applications()
    {
        return $this->_getChoicesFor('application');
    }
}
