<template>
    <div class="bg-slate-900">
        <div
            class="flex justify-center md:justify-between items-center w-3/4 mx-auto"
        >
            <div class="hidden md:block">
                <h1 class="text-4xl text-slate-200 mb-4">Naruto Shippuden</h1>
                <p
                    class="mb-12 text-xl bg-gradient-to-r bg-clip-text text-transparent font-bold from-amber-800 w-max to-amber-500"
                >
                    #DATTEBAYO
                </p>
                <div class="flex space-x-8 mb-12">
                    <BaseImage
                        class="w-20 mb-12"
                        v-for="(src, index) in leftDecorationImages"
                        :src="src"
                        :key="index"
                    />
                </div>
                <router-link
                    :to="{ name: 'Productos' }"
                    class="text-2xl py-4 px-8 text-white bg-amber-500 rounded-md mt-8 font-semibold"
                    >View More
                </router-link>
            </div>
            <div class="lg:flex space-x-8 items-center">
                <BaseImage src="home_central.png" width="480" />
                <div class="hidden lg:block">
                    <div
                        class="border rounded-md border-amber-500 px-4 py-2 text-slate-200 mb-8"
                    >
                        <p>Upto</p>
                        <p class="flex space-x-2 items-end">
                            <span class="text-amber-500 text-4xl font-semibold"
                                >40%</span
                            >
                            <span>off</span>
                        </p>
                    </div>
                    <BaseImage src="home_dec1.png" class="w-40" />
                </div>
            </div>
        </div>
        <div class="flex justify-center pb-8">
            <button class="text-slate-200 text-lg">
                <FontAwesomeIcon icon="fa-chevron-down" />
            </button>
        </div>
    </div>
    <HomeCarousel></HomeCarousel>
    <div class="grid">
        <BaseImage
            src="home_promotions_2.png"
            class="justify-self-end row-start-1 col-start-1 hidden sm:block"
        />
        <div
            class="w-11/12 lg:w-3/4 justify-self-center py-16 col-start-1 row-start-1"
        >
            <h4 class="text-center text-2xl text-slate-900 mb-4 font-semibold">
                Don't Miss These Promotions
            </h4>
            <BaseImage
                src="home_promotions_1.png"
                class="block translate-y-12 w-80"
            />
            <div
                class="bg-gradient-to-br from-orange-600 to-pink-700 py-12 px-8 rounded-xl relative"
            >
                <h2 class="text-center text-slate-200 text-4xl font-bold mb-8">
                    Marvel
                </h2>
                <div
                    class="md:grid grid-cols-2 gap-y-20 space-y-12 md:space-y-0"
                >
                    <div
                        class="grid"
                        v-for="(tile, index) in promotionTiles"
                        :key="index"
                    >
                        <BaseImage
                            :src="tile.image"
                            class="w-64 row-start-1 col-start-1 -translate-y-8 place-self-center z-10"
                        />
                        <div
                            class="col-start-1 row-start-1 w-64 h-32 bg-slate-900 opacity-25 rounded-xl self-end justify-self-center"
                        ></div>
                        <div class="mt-4 text-slate-200 text-center">
                            {{ tile.title }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="my-16 w-11/12 lg:w-3/4 mx-auto">
        <h4 class="text-2xl font-semibold text-slate-900 mb-8 sm:mb-20">Services</h4>
        <ul class="space-y-12">
            <li
                class="flex even:flex-row-reverse group items-center w-full"
                v-for="(service, index) in services"
                :key="index"
            >
                <div
                    class="flex shadow-xl items-center group-even:flex-row-reverse p-8 border-b-4 border-amber-500 rounded-xl max-w-lg"
                >
                    <p class="text-6xl font-bold text-slate-500">
                        0{{ index + 1 }}
                    </p>
                    <div
                        class="space-y-4 text-slate-900 ml-8 group-even:mr-8 group-even:ml-0"
                    >
                        <h5 class="text-xl font-semibold">
                            {{ service.title }}
                        </h5>
                        <p>{{ service.desc }}</p>
                    </div>
                </div>
                <div
                    class="hidden md:block text-8xl text-slate-500 p-8 rounded border-b-4 border-amber-500 shadow-xl ml-8 group-even:mr-8 group-even:ml-0"
                >
                    <FontAwesomeIcon :icon="service.icon"></FontAwesomeIcon>
                </div>
            </li>
        </ul>
    </div>
    <HomeTestimonial></HomeTestimonial>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import HomeCarousel from "@/components/home/HomeCarousel.vue";
import HomeTestimonial from "@/components/home/HomeTestimonial.vue";
import BaseImage from "@/components/global/BaseImage.vue";

const leftDecorationImages = [
    "home_dec4.png",
    "home_dec3.png",
    "home_dec2.png",
];

const promotionTiles = [
    {
        image: "home_promotions_tile_1.png",
        title: "Spider Man",
    },
    {
        image: "home_promotions_tile_2.png",
        title: "Captain America",
    },
    {
        image: "home_promotions_tile_3.png",
        title: "Hawkeye",
    },
    {
        image: "home_promotions_tile_4.png",
        title: "Black Panther",
    },
];

const services = [
    {
        title: "Absolute Packaging",
        desc: "All our shipments are 100% protected with collector s grade packaging.",
        icon: "fa-envelope",
    },
    {
        title: "Satisfaction or Return",
        desc: "We have a 100% satisfaction policy, if you are bot satisfied with the prouct we will return your money",
        icon: "fa-smile",
    },
    {
        title: "24 Hrs Customer Support",
        desc: "We know the importance of solving all your doubts, which is why our email is always open.",
        icon: "fa-headset",
    },
    {
        title: "Secure payments",
        desc: "We use reliable methods and keep your information fully protected.",
        icon: "fa-money-check-dollar",
    },
];
</script>
