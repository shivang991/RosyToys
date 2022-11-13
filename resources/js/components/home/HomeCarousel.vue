<template>
    <div class="py-12" v-if="carouselSlides.length">
        <div class="flex justify-between w-3/4 items-center mx-auto mb-8">
            <h4 class="text-slate-900 text-2xl">Tendencia ahora mismo</h4>
            <div class="flex space-x-2 text-slate-900">
                <button
                    :disabled="marginLeft <= minXTranslation"
                    @click="marginLeft -= 350"
                    class="w-8 h-8 flex items-center justify-center border border-slate-900 rounded-full rotate-180 disabled:opacity-50 disabled:pointer-events-none"
                >
                    <FontAwesomeIcon icon="fa-arrow-right"></FontAwesomeIcon>
                </button>
                <button
                    :disabled="marginLeft >= 0"
                    @click="marginLeft += 350"
                    class="w-8 h-8 flex items-center justify-center border border-slate-900 rounded-full disabled:opacity-50 disabled:pointer-events-none"
                >
                    <FontAwesomeIcon icon="fa-arrow-right"></FontAwesomeIcon>
                </button>
            </div>
        </div>
        <div class="overflow-hidden">
            <div
                class="grid gap-x-4 grid-flow-col duration-500 ease-out"
                :style="{
                    transform: `translateX(${marginLeft}px)`,
                    gridTemplateColumns: `repeat(${carouselSlides.length},400px)`,
                }"
                ref="carouselEl"
            >
                <div v-for="(slide, i) in carouselSlides" :key="i">
                    <BaseImage
                        :src="slide.image_url"
                        is-external
                        class="min-w-full h-64 object-cover rounded block mb-4"
                        :alt="slide.description"
                    ></BaseImage>

                    <p class="text-center text-lg text-slate-900">
                        {{ slide.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, watch } from "vue";
import BaseImage from "@/components/global/BaseImage.vue";
import useAxios from "@/plugins/Axios";

const marginLeft = ref(0);
const carouselEl = ref(null);
const minXTranslation = ref(0);

const carouselSlides = ref([]);

const axios = useAxios();

axios.get("/api/carousel").then((res) => {
    carouselSlides.value = res.data;
});

watch(carouselEl, (val) => {
    if (val)
        minXTranslation.value = -(
            val.scrollWidth - val.getBoundingClientRect().width
        );
});
</script>
