<template>
    <div class="w-11/12 md:w-3/4 mx-auto py-12">
        <productos-filters
            v-model:queryParams="apiQueryParams"
        ></productos-filters>
        <!-- <div class="mb-5">
                <productos-search v-model:queryParams="apiQueryParams" />
                <base-progress-bar :shouldShow="isRequestSent" />
            </div> -->
        <div>
            <productos-list
                v-if="paginatedData && paginatedData.data"
                :products="paginatedData.data"
            ></productos-list>
            <div v-else class="h-96 flex items-center justify-center">
                <div
                    class="w-12 h-12 rounded-full border-4 border-amber-500 animate-spin border-b-transparent"
                ></div>
            </div>
            <base-pagination
                class="flex flex-col items-center mt-8"
                v-model="paginatedData"
                :queryParams="apiQueryParams"
            ></base-pagination>
        </div>
    </div>
</template>

<script setup>
import ProductosFilters from "@/components/productos/ProductosFilters.vue";
import ProductosList from "@/components/productos/ProductosList.vue";
import { ref, watch } from "vue";
import { useAxios } from "@/plugins/Axios";

const axios = useAxios();
const paginatedData = ref(null);
const apiQueryParams = ref(null);
const isRequestSent = ref(false);

const apiEndPoint = "/api/product/all";

watch(apiQueryParams, async (newVal) => {
    isRequestSent.value = true;
    const { data } = await axios.get(apiEndPoint, { params: newVal });
    isRequestSent.value = false;
    paginatedData.value = data;
});
axios.get(apiEndPoint).then(({ data }) => {
    paginatedData.value = data;
});
</script>
