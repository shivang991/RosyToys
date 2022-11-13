<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerReview extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'message',
        'image_url',
        'image_path',
        'stars',
        'is_verified'
    ];
}
