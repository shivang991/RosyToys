<template>
    <div>
        <div class="mb-20">
            <h4 class="text-2xl text-sky-600 font-serif mb-8 text-center">
                Tenemos la mejor variedad del mercado
            </h4>
            <div
                class="sm:grid space-y-4 sm:space-y-0 grid-cols-3 overflow-hidden gap-2 sm:gap-8 mb-8"
            >
                <BaseImage
                    src="home_variety_1.jpg"
                    class="h-60 w-full object-cover rounded-md shadow-xl"
                />
                <BaseImage
                    src="home_variety_2.jpg"
                    class="h-60 w-full object-cover rounded-md shadow-xl"
                />
                <BaseImage
                    src="home_variety_3.jpg"
                    class="h-60 w-full object-cover rounded-md shadow-xl"
                />
            </div>
            <router-link
                :to="{ name: 'Productos' }"
                class="px-4 py-2 bg-sky-600 text-white rounded-md block w-max mx-auto"
                >Productos</router-link
            >
        </div>
        <div class="grid lg:grid-cols-2 gap-8">
            <div
                v-for="ad in ads"
                class="py-4 px-8 bg-white rounded-md shadow-xl flex justify-between flex-col-reverse sm:flex-row sm:space-x-4"
            >
                <div>
                    <h4 class="text-2xl mb-2">{{ ad.title }}</h4>
                    <p>{{ ad.description }}</p>
                    <router-link
                        :to="{ name: 'Productos' }"
                        class="block mt-4 pb-1 border-b-2 border-black font-serif w-max"
                    >
                        Ver Productos
                    </router-link>
                </div>
                <BaseImage
                    class="h-40 object-cover mb-4 sm:w-40 rounded-md"
                    :src="ad.img"
                ></BaseImage>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseImage from "@/components/global/BaseImage.vue";

const ads = [
    {
        title: "Articulos de temporada",
        description: "Contamos con amplio surtido para cualquier epoca del año",
        img: "home_ad_1.jpg",
    },
    {
        title: "Las mejores marcas",
        description:
            "Extensa variedad en articulos de tendencia para todas las edades",
        img: "home_ad_2.jpg",
    },
];
</script>
