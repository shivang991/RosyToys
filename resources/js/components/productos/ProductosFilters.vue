<template>
    <div class="px-4 sm:px-8 md:px-0">
        <button
            class="flex md:hidden space-x-2 border rounded-md border-sky-600 text-sky-600 justify-between py-2 px-4 w-full items-center"
            @click="toggleFilters()"
        >
            <span>Filtros</span>
            <font-awesome-icon
                icon="fa-chevron-down"
                class="text-sm duration-500"
                :class="{ 'rotate-180': shouldShowFiltersDropdown }"
            ></font-awesome-icon>
        </button>
        <div
            class="duration-500 overflow-hidden h-0 md:h-max rounded-md bg-white shadow-lg"
            ref="filterContainerEl"
        >
            <div class="p-8 md:w-64">
                <h4
                    class="text-2xl font-semibold pb-2 mb-4 border-b border-gray-600"
                >
                    Filtros:
                </h4>
                <productos-filters-multiselect
                    v-for="(filter, key) in filters"
                    :key="key"
                    :options="filter.options"
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
        </div>
    </div>
</template>

<script setup>
// import { useAxios } from "@/plugins/Axios";
import { reactive, ref } from "vue";
import ProductosFiltersMultiselect from "./ProductosFiltersMultiselect.vue";
// import ProductosFiltersPrice from './ProductosFiltersPrice.vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useStore } from "vuex";
import { categoryOptions } from "@/store/products";

const input = reactive({
    brand: [],
});

const store = useStore();

function applyFilters() {
    store.commit("products/SET_FILTERS", input);
    store.dispatch("products/refetch");
}

function clearFilters() {
    input.brand = [];
    applyFilters();
}

// Fetch choices for filters from server
// const axios = useAxios();
const filters = reactive({
    category: {
        label: "Categoría",
        options: categoryOptions,
    },
});

// axios.get("/api/choices/brands").then((res) => {
//     filters.brand = {
//         label: "Marcas",
//         options: res.data,
//     };
// });

const isScreenWide = ref(window.innerWidth > 768);

window.addEventListener(
    "resize",
    () => (isScreenWide.value = window.innerWidth > 768)
);
const shouldShowFiltersDropdown = ref(false);
const filterContainerEl = ref(null);
function toggleFilters() {
    if (!filterContainerEl.value) return;
    shouldShowFiltersDropdown.value = !shouldShowFiltersDropdown.value;
    if (shouldShowFiltersDropdown.value) {
        filterContainerEl.value.style.height = "auto";
        const newHeight = getComputedStyle(
            filterContainerEl.value
        ).getPropertyValue("height");
        filterContainerEl.value.style.height = "0";
        requestAnimationFrame(
            () => (filterContainerEl.value.style.height = newHeight)
        );
    } else {
        filterContainerEl.value.style.height = "0";
    }
}
</script>
