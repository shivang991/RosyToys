<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropCarouselManagerCustomerServiceManagerPostCreatorColumnsFromStaffAbilitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('staff_abilities', function (Blueprint $table) {
            $table->dropColumn('carouselManager');
            $table->dropColumn('customerServiceManager');
            $table->dropColumn('postCreator');
            $table->boolean('productManager')->default(true)->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('staff_abilities', function (Blueprint $table) {
            $table->boolean('productManager')->default(false)->change();
            $table->boolean('carouselManager')->default(false);
            $table->boolean('customerServiceManager')->default(false);
            $table->boolean('postCreator')->default(false);
        });
    }
}
