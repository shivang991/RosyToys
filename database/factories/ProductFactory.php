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
            'name' => $this->faker->firstName(),
            'description' => $this->faker->sentence(),
            'price' => random_int(20, 1000),
            'image_url' => 'https://www.indiumsoftware.com/wp-content/uploads/2019/01/7-Reasons-Why-Software-Testing-is-Important.jpg',
            'image_path' => '',
        ];
    }
}
