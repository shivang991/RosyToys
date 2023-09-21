<template>
    <div class="py-8" v-if="trendingProducts">
        <h2 class="text-4xl mb-12 text-center">Tendencia este mes 🔥</h2>
        <div class="grid grid-cols-2 gap-4 lg:gap-8">
            <div
                class="lg:flex lg:space-x-4 px-8 py-4 rounded-md shadow-xl"
                v-for="prod in trendingProducts"
            >
                <BaseImage
                    :src="prod.image_url"
                    is-external
                    class="w-full lg:w-40 h-40 rounded object-cover mb-8 lg:mb-0"
                ></BaseImage>
                <div class="flex-grow">
                    <h5 class="text-xl mb-8">{{ prod.title }}</h5>
                    <h4 class="text-2xl font-semibold">${{ prod.price }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseImage from "../global/BaseImage.vue";
import { ref } from "vue";
import { useAxios } from "@/plugins/Axios";

const trendingProducts = ref(null);

const axios = useAxios();

axios.get("/api/product/all?is_promoted=1").then((res) => {
    trendingProducts.value = res.data.data;
});
</script>
