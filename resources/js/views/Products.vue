<template>
    <div>
        <productos-head></productos-head>
        <div class="productos-body w-75 mx-auto my-5">
            <productos-filters
                v-model:queryParams="apiQueryParams"
                class="productos-body__filters"
            ></productos-filters>
            <div class="mb-5">
                <productos-search v-model:queryParams="apiQueryParams" />
                <base-progress-bar :shouldShow="isRequestSent" />
            </div>
            <div>
                <productos-list
                    v-if="paginatedData && paginatedData.data"
                    :products="paginatedData.data"
                ></productos-list>
                <base-pagination
                    v-model="paginatedData"
                    :queryParams="apiQueryParams"
                ></base-pagination>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProductosFilters from "@/components/productos/ProductosFilters.vue";
import ProductosList from "@/components/productos/ProductosList.vue";
import ProductosSearch from "@/components/productos/ProductosSearch.vue";
import { ref, watch } from "vue";
import { useAxios } from "@/plugins/Axios";
import ProductosHead from "@/components/productos/ProductosHead.vue";

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


