<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StaffAbilities extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'carouselManager',
        'productManager',
        'customerServiceManager',
        'postCreator'
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
