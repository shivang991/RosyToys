<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $genders = collect(['male','female']);
        $gender = $genders->random();
        $profileImage =
        $gender == 'female'
        ? 'https://scontent.fknu1-2.fna.fbcdn.net/v/t1.6435-9/s180x540/184366654_286392893121552_1078940115487658410_n.jpg?_nc_cat=1&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=08TQKlvJJGAAX_tZ51J&_nc_ht=scontent.fknu1-2.fna&oh=e0bb1592b0b4584997a05a7c7653c2ba&oe=613BC8B7'
        : 'https://upload.wikimedia.org/wikipedia/en/6/6b/Death_Note_Ryuk.jpg';

        return [
            'name' => $this->faker->name($gender),
            'email' => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
            'profile_image' => $profileImage
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
