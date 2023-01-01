<template>
    <div class="px-12 py-8 w-80 shadow-lg h-max rounded-md">
        <h4 class="text-2xl font-semibold pb-2 mb-4 border-b border-gray-600">Filtros:</h4>
        <productos-filters-multiselect
            v-for="(filter, key) in filters"
            :key="key"
            :options="filter.options"
            :label="filter.label"
            v-model="input[key]"
        ></productos-filters-multiselect>
        <div class="my-8" v-if="Object.keys(filters).length">
            <button
                class="bg-sky-600 py-2 px-4 text-white rounded-md w-full mb-2"
                @click="applyFilters"
            >
                Aplicar
            </button>
            <button
                class="btn btn-secondary ms-1 py-2 px-4 border text-sky-600 border-sky-600 rounded-md w-full"
                @click="clearFilters"
            >
                Borrar
            </button>
        </div>
    </div>
</template>

<script setup>
import { useAxios } from "@/plugins/Axios";
import { reactive, ref } from "vue";
import ProductosFiltersMultiselect from "./ProductosFiltersMultiselect.vue";
// import ProductosFiltersPrice from './ProductosFiltersPrice.vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useStore } from "vuex";

const shouldShowFilters = ref(false);
const input = reactive({
    brand: [],
});

const store = useStore();

function applyFilters() {
    store.commit("products/SET_FILTERS", input);
    store.dispatch("products/refetch");
    shouldShowFilters.value = false;
}

function clearFilters() {
    input.brand = [];
    applyFilters();
}

// Fetch choices for filters from server
const axios = useAxios();
const filters = reactive({});
axios.get("/api/choices/brands").then((res) => {
    filters.brand = {
        label: "Marcas",
        options: res.data,
    };
});
</script>
