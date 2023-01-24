<template>
    <main class="w-11/12 md:w-3/4 mx-auto my-12">
        <div class="grid bg-primary overflow-hidden">
            <div
                class="flex justify-between mt-8 px-20 col-start-1 row-start-1"
            >
                <BaseImage src="sparkle.png" class="h-12"></BaseImage>
                <BaseImage src="heart.png" class="h-12"></BaseImage>
            </div>
            <div
                class="flex justify-between items-end self-end col-start-1 row-start-1"
            >
                <BaseImage
                    src="home_hero_1.png"
                    class="h-40 sm:h-60 opacity-50 lg:opacity-50"
                ></BaseImage>
                <BaseImage
                    src="home_hero_2.png"
                    class="h-40 sm:h-80 opacity-50 lg:opacity-50"
                ></BaseImage>
            </div>
            <div class="col-start-1 row-start-1 px-4 py-20 relative">
                <h2
                    class="text-4xl text-center font-serif max-w-lg mx-auto mb-1"
                >
                    ¿Estas buscando la mejor opcion de juguete por mayoreo?
                </h2>
                <div class="h-4 flex justify-center mb-8">
                    <BaseImage
                        src="underline.png"
                        class="max-h-full"
                    ></BaseImage>
                </div>

                <p class="mb-12 max-w-md text-center mx-auto">
                    Tenemos el mas amplio surtido para todo tipo de ocasión ,
                    todo lo que necesitas esta aqui en Juguetes Rosy.
                </p>
                <router-link
                    :to="{ name: 'Productos' }"
                    class="text-xl bg-sky-600 w-max text-white rounded-md py-2 px-8 font-serif mx-auto block"
                >
                    Ver Productos
                </router-link>
            </div>
        </div>
        <HomePromotions class="my-20"></HomePromotions>
        <HomeTrending></HomeTrending>
        <div class="py-12 sm:w-3/4 mx-auto">
            <div
                class="px-8 py-12 rounded-lg bg-primary flex space-x-8 justify-between items-start"
            >
                <div>
                    <h4 class="text-2xl text-sky-600 mb-4 font-semibold">
                        ¿Buscas algo que no esta a la vista ? ¿Te gustaria
                        realizar un pedido grande?
                    </h4>
                    <p class="text-sky-600">
                        Puedes contactarnos dando clic en el boton para que
                        podamos atenderte
                    </p>
                </div>
                <router-link :to="{name:'Contacto'}" class="border px-4 py-2 font-serif rounded-md bg-white">
                    Contacto
                </router-link>
            </div>
        </div>
    </main>
</template>

<script setup>
import HomePromotions from "@/components/home/HomePromotions.vue";
import HomeTrending from "@/components/home/HomeTrending.vue";
import BaseImage from "@/components/global/BaseImage.vue";
</script>
