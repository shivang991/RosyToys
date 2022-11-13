<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIsDiscountedColumnToProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn("is_available");
            $table->boolean('is_limited_edition')->default(false);
            $table->boolean('is_low_stock')->default(false);
            $table->boolean('is_promoted')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->boolean("is_available")->default(true);
            $table->dropColumn(['is_limited_edition', 'is_low_stock', 'is_promoted']);
        });
    }
}
