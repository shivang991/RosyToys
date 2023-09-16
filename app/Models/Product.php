<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'brand',
        'price',
        'is_promoted',
        'category'
    ];

    protected $casts = [
        'price' => 'float'
    ];

    /**
     * Delete associated image models when product is deleted
     */
    protected static function booted()
    {
        static::deleting(function ($product) {
            // must retrieve the images to trigger Image model's deleting event
            $product
                ->images()
                ->select('id', 'key') // need id to trigger event and 'key' to refer to its path
                ->get()
                ->each(fn ($image) => $image->delete());
        });
    }

    public function images()
    {
        return $this->morphMany(Image::class, 'imagable')->orderBy('id');
    }

    public function previewImage()
    {
        return $this->morphOne(Image::class, 'imagable')->oldestOfMany('id');
    }
}
