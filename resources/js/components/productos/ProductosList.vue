<template>
    <div
        v-if="products"
        class="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-20 mb-12"
    >
        <productos-list-item
            v-for="product in products"
            :key="product.id"
            :id="product.id"
            :imgSrc="product.image_url"
            :price="product.price"
            :title="product.title"
            :isLimited="product.is_limited_edition"
            :isLowStock="product.is_low_stock"
            :isPromoted="product.is_promoted"
        ></productos-list-item>
        <div
            class="flex space-x-4 text-xl items-center p-4 text-center justify-center bg-slate-100 text-slate-900 rounded-lg shadow-lg"
            v-if="!products.length"
        >
            <FontAwesomeIcon icon="fa-exclamation-triangle" />
            <p>Lo sentimos, no se pudo encontrar ningún producto.</p>
        </div>
    </div>
    <div v-else class="h-96 flex items-center justify-center">
        <div
            class="w-12 h-12 rounded-full border-4 border-sky-600 animate-spin border-b-transparent"
        ></div>
    </div>
</template>

<script setup>
import ProductosListItem from "./ProductosListItem.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const products = computed(() => store.state.products.data);
</script>
