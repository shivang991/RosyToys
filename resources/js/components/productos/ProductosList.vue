<template>
    <div
        class="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-8 md:gap-y-20 py-12"
    >
        <productos-list-item
            v-for="product in products"
            :key="product.id"
            :id="product.id"
            :imgSrc="product.image_url"
            :price="product.price"
            :title="product.title"
        ></productos-list-item>
        <div
            class="flex space-x-4 text-xl items-center p-4 text-center justify-center bg-slate-100 text-slate-900 rounded-lg shadow-lg"
            v-if="!products.length"
        >
            <FontAwesomeIcon icon="fa-exclamation-triangle" />
            <p>Lo sentimos, no se pudo encontrar ningún producto.</p>
        </div>
    </div>
</template>

<script setup>
import ProductosListItem from "./ProductosListItem.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps({
    products: {
        type: Array,
        default: () => [],
    },
});
</script>
