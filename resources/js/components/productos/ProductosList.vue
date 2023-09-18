<template>
    <div
        v-if="products"
        class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12 px-4 sm:px-8"
    >
        <product-detail-modal v-model="currentShowingProductId" />
        <productos-list-item
            v-for="product in products"
            @more-click="currentShowingProductId = product.id"
            :key="product.id"
            :id="product.id"
            :imgSrc="product.image_url"
            :price="product.price"
            :title="product.title"
            :isLimited="!!product.is_limited_edition"
            :isLowStock="!!product.is_low_stock"
            :isPromoted="!!product.is_promoted"
        ></productos-list-item>

        <div
            class="col-span-4 p-4 bg-sky-100 rounded-lg"
            v-if="!products.length"
        >
            <div
                class="flex space-x-4 text-xl items-center justify-center mb-4"
            >
                <FontAwesomeIcon icon="fa-exclamation-triangle" />
                <p>Lo sentimos, no se pudo encontrar ningún producto.</p>
            </div>
            <button
                class="text-sky-600 hover:underline w-full text-center"
                @click="removeSearchQuery"
            >
                Mostrar todos los productos
            </button>
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
import { computed, ref } from "vue";
import ProductDetailModal from "./ProductDetailModal.vue";

const store = useStore();

const products = computed(() => store.state.products.data);

const currentShowingProductId = ref(null);

function removeSearchQuery() {
    store.commit("products/SET_QUERY", "");
    store.dispatch("products/refetch");
}
</script>
