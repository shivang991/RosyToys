<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->streetAddress(),
            'description' => $this->faker->paragraph(),
            'price' => random_int(500, 10_000),
            'brand' => collect(["Naruto", "Echi", "StarWars", "Marvel"])->random(),
            'image_url' => 'https://s3.us-east-2.amazonaws.com/arda.storage/products/2TM431ipQhXXCYuTJTEOVXBU1HXF39T1ZUDC0twG.png',
            'image_path' => '',
        ];
    }
}
