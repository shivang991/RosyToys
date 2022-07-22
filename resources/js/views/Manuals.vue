<template>
    <div>
        <manuals-head></manuals-head>
        <div class="manuals-view mx-auto mb-5">
            <div class="my-5">
                <manuals-search
                    v-model:queryParams="apiQueryParams"
                ></manuals-search>
                <base-progress-bar
                    :shouldShow="isRequestSent"
                ></base-progress-bar>
            </div>
            <div class="my-5">
                <manuals-list
                    v-if="paginatedData"
                    :manuals="paginatedData.data"
                ></manuals-list>
                <base-pagination v-model="paginatedData" />
            </div>
            <div class="mt-5 w-fit mx-auto text-center">
                <p class="mb-1">¿No encontro lo que buscaba?</p>
                <router-link :to="{ name: 'Contacto' }">
                    Comuniquese con nosotros
                </router-link>
            </div>
        </div>
    </div>
</template>
<script setup>
import ManualsSearch from "@/components/manuals/ManualsSearch.vue";
import ManualsHead from "@/components/manuals/ManualsHead.vue";
import ManualsList from "@/components/manuals/ManualsList.vue";
import { ref, watch } from "vue";
import { useAxios } from "@/plugins/Axios";

const axios = useAxios();
const paginatedData = ref(null);
const apiQueryParams = ref(null);
const isRequestSent = ref(false);

const apiEndPoint = "/api/manual/all";

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

<style lang="scss" scoped>
.manuals-view {
    max-width: 75vw;
}
</style>
