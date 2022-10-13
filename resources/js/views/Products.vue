<template>
    <div class="w-3/4 mx-auto py-12">
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
                :products="dummyProducts"
            ></productos-list>
            <base-pagination
                v-model="paginatedData"
                :queryParams="apiQueryParams"
            ></base-pagination>
        </div>
    </div>
</template>

<script setup>
import ProductosFilters from "@/components/productos/ProductosFilters.vue";
import ProductosList from "@/components/productos/ProductosList.vue";
import ProductosSearch from "@/components/productos/ProductosSearch.vue";
import { ref, watch } from "vue";
import { useAxios } from "@/plugins/Axios";

const axios = useAxios();
const paginatedData = ref(null);
const apiQueryParams = ref(null);
const isRequestSent = ref(false);

const apiEndPoint = "/api/product/all";

const dummyProducts = Array(9)
    .fill({
        image_url:
            "https://images.unsplash.com/photo-1484406566174-9da000fda645",
        description:
            "While sculpting, areas might be hidden behind parts of the mesh or they might be too close to other parts. To work through these, it is useful to isolate parts of a mesh to sculpt on.",
        code: "0123C",
        brand: "Brand_X",
        measurements: "10 by 10",
        application: "None",
    })
    .map((e, id) => ({ ...e, id }));

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
