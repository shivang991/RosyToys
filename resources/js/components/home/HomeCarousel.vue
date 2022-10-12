<template>
    <div class="py-12">
        <div class="flex justify-between w-3/4 items-center mx-auto mb-8">
            <h4 class="text-slate-900 text-2xl">Trending Right Now</h4>
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
                <div v-for="(slide, i) in carouselSlides" :key="i" class="">
                    <img
                        :src="slide.image"
                        :alt="slide.title"
                        class="min-w-full h-64 object-cover rounded block mb-4"
                    />
                    <p class="text-center text-lg text-slate-900">
                        {{ slide.title }}
                    </p>
                    <p class="text-center text-lg text-slate-900">
                        Price: ${{ slide.price }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, watch } from "vue";

const marginLeft = ref(0);
const carouselEl = ref(null);
const minXTranslation = ref(0);

const carouselSlides = [
    {
        title: "Star Wars The Clone War: Captain Rex",
        price: 3376,
        image: "https://w.wallhaven.cc/full/k9/wallhaven-k9j5gm.jpg",
    },
    {
        title: "Star Wars The Manadalorian Set",
        price: 3312,
        image: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    },
    {
        title: "Marvel: Doctor Strange",
        price: 4125,
        image: "https://images.unsplash.com/photo-1640499900704-b00dd6a1103a",
    },
    {
        title: "Naruto Part I 3D print",
        price: 3521,
        image: "https://images.unsplash.com/photo-1595309959777-08d5da891d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1043&q=80",
    },
];

watch(carouselEl, (val) => {
    if (val)
        minXTranslation.value = -(
            val.scrollWidth - val.getBoundingClientRect().width
        );
});
</script>
