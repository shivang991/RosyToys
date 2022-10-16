<template>
    <div class="w-11/12 md:w-3/4 mx-auto py-12">
        <productos-filters></productos-filters>
        <productos-list></productos-list>
        <product-pagination></product-pagination>
    </div>
</template>

<script setup>
import ProductosFilters from "@/components/productos/ProductosFilters.vue";
import ProductosList from "@/components/productos/ProductosList.vue";
import ProductPagination from "@/components/productos/ProductPagination.vue";
import { ref } from "vue";
</script>
