<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'key',
        'src',
        'imagable_id',
        'imagable_type'
    ];

    protected $hidden = [
        'key',
    ];

    /**
     * Delete storage from disk when model is deleted
     */
    protected static function booted()
    {
        static::deleting(function ($image) {
            Storage::delete($image->key);
        });
    }

    public function imagable()
    {
        return $this->morphTo();
    }
}
