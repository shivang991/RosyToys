<template>
    <div class="py-12">
        <div class="md:flex md:space-x-4">
            <productos-filters></productos-filters>
            <div class="flex-grow">
                <productos-list></productos-list>
                <product-pagination></product-pagination>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProductosFilters from "@/components/productos/ProductosFilters.vue";
import ProductosList from "@/components/productos/ProductosList.vue";
import ProductPagination from "@/components/productos/ProductPagination.vue";
import { onBeforeRouteLeave } from "vue-router";
import { useStore } from "vuex";
const store = useStore();

onBeforeRouteLeave(() => {
    store.commit("products/SET_FILTERS", {});
    store.commit("products/SET_QUERY", "");
    store.dispatch("products/refetch");
});
</script>
