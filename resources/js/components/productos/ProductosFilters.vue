<template>
    <div class="relative">
        <div class="flex justify-between items-center">
            <h2 class="text-4xl font-semibold text-gray-800">
                Browse our Products
            </h2>
            <button
                class="flex space-x-2 py-2 px-4 rounded-md text-amber-500 shadow-md items-center"
                @click="shouldShowFilters = !shouldShowFilters"
            >
                <span>Filters</span>
                <span class="text-sm duration-100" :class="{'rotate-180':shouldShowFilters}">
                    <FontAwesomeIcon icon="fa-chevron-down"></FontAwesomeIcon>
                </span>
            </button>
        </div>
        <div
            v-show="shouldShowFilters"
            class="absolute bg-white w-full shadow-lg px-4 py-8 mt-2"
        >
            <div class="flex justify-between">
                <productos-filters-multiselect
                    v-for="(filter, key) in filters"
                    :key="key"
                    class="mb-5"
                    :options="filter.options"
                    :label="filter.label"
                    v-model="input[key]"
                ></productos-filters-multiselect>
                <div></div>
            </div>
            <div class="flex justify-center space-x-2 mt-4">
                <button
                    class="bg-amber-500 py-2 px-4 text-white rounded"
                    @click="applyFilters"
                >
                    Aplicar
                </button>
                <button
                    class="btn btn-secondary ms-1 py-2 px-4 border text-amber-500 border-amber-500 rounded"
                    @click="clearFilters"
                >
                    Borrar
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAxios } from "@/plugins/Axios";
import { reactive, ref } from "vue";
import ProductosFiltersMultiselect from "./ProductosFiltersMultiselect.vue";
// import ProductosFiltersPrice from './ProductosFiltersPrice.vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const shouldShowFilters = ref(false);

const props = defineProps({
    queryParams: {
        type: Object,
        default: () => ({}),
    },
});
const emit = defineEmits(["update:queryParams"]);

const input = reactive({
    application: [],
    brand: [],
});

function applyFilters() {
    const newVal = { ...props.queryParams, ...input };
    emit("update:queryParams", newVal);
    shouldShowFilters.value = false;
}

function clearFilters() {
    input.application = [];
    input.brand = [];
    applyFilters();
}

// Fetch choices,filters, etc. from server
const axios = useAxios();
const filters = reactive({});
axios.get("/api/choices/brands").then((res) => {
    filters.brand = {
        // label: "Marcas",
        label: "Captains",
        // options: res.data,
        options: [
            "Yamamoto",
            "Soifon",
            "Ichimaru",
            "Unohana",
            "Aizen",
            "Byakuya",
            "Kommamura",
            "Kyoraku",
            "Kaname",
            "Toshiro",
            "Kenpachi",
            "Mayuri",
            "Ukitake",
        ],
    };
});
axios.get("/api/choices/applications").then((res) => {
    filters.application = {
        // label: "Applicacion",
        label: "Hashira",

        // options: res.data,
        options: [
            "Rengoku",
            "Gyomei",
            "Shinobou",
            "Mitsuri",
            "Sanemi",
            "Tengen",
            "Giyu",
            "Obanai",
            "Muichiro",
        ],
    };
});
</script>
