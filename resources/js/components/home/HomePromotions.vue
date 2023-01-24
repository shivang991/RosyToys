<template>
    <div>
        <div class="mb-20">
            <h4 class="text-2xl text-sky-600 font-serif mb-8">
                Tenemos la mejor variedad del mercado
            </h4>
            <div class="grid grid-cols-3 h-60 gap-2 sm:gap-8">
                <BaseImage
                    src="home_variety_1.jpg"
                    class="h-full object-cover rounded-md shadow-xl"
                />
                <BaseImage
                    src="home_variety_2.jpg"
                    class="h-full object-cover rounded-md shadow-xl"
                />
                <BaseImage
                    src="home_variety_3.jpg"
                    class="h-full object-cover rounded-md shadow-xl"
                />
            </div>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
            <div
                v-for="ad in ads"
                class="py-4 px-8 bg-white rounded-md shadow-xl"
            >
                <BaseImage
                    class="h-40 object-cover mb-4 w-full rounded-md"
                    :src="ad.img"
                ></BaseImage>
                <h4 class="text-2xl mb-2">{{ ad.title }}</h4>
                <p>{{ ad.description }}</p>
                <router-link
                    :to="{ name: 'Productos' }"
                    class="block mt-4 pb-1 border-b-2 border-black font-serif w-max"
                >
                    Ver Productos
                </router-link>
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
