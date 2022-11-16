<template>
    <div class="grid">
        <div
            class="col-start-1 row-start-1 w-1/2 h-80 bg-primary justify-self-end"
        >
            <BaseImage
                src="bg-arrow.png"
                class="w-full scale-105 origin-right"
            ></BaseImage>
        </div>
        <div class="col-start-1 row-start-1 flex justify-between w-3/4 mx-auto">
            <div>
                <h4 class="text-2xl font-serif">Hot Trending</h4>
                <div class="w-20 h-px bg-black mb-20"></div>
                <div class="text-gray-600">Explore your favourites</div>
                <h2 class="max-w-xs text-4xl mb-8">Toy Story Collection</h2>
                <button
                    class="px-8 py-2 border-2 border-sky-600 text-sky-600 font-serif"
                >
                    Discover
                </button>
            </div>
            <BaseImage class="w-60 relative" src="trending.png"></BaseImage>
        </div>
        <div class="w-3/4 mx-auto grid grid-cols-3 gap-4 mt-12">
            <div>
                <h4 class="text-2xl font-serif">Hot & Trending</h4>
                <div class="w-20 h-px bg-black mb-8"></div>
                <div class="flex space-x-4 mt-4" v-for="i in 3" :key="i">
                    <BaseImage
                        src="toy.png"
                        class="bg-primary w-20 h-20 object-contain"
                    ></BaseImage>
                    <div>
                        <p class="text-gray-600 mb-4">Sugioti RC Car</p>
                        <h5 class="text-xl">$39.99</h5>
                    </div>
                </div>
            </div>
            <div>
                <h4 class="text-2xl font-serif">Most Buyed</h4>
                <div class="w-20 h-px bg-black mb-8"></div>
                <div class="flex space-x-4 mt-4" v-for="i in 3" :key="i">
                    <BaseImage
                        src="bot.png"
                        class="bg-primary w-20 h-20 object-contain"
                    ></BaseImage>
                    <div>
                        <p class="text-gray-600 mb-4">Sugioti RC Car</p>
                        <h5 class="text-xl">$39.99</h5>
                    </div>
                </div>
            </div>
            <div>
                <h4 class="text-2xl font-serif">Featured</h4>
                <div class="w-20 h-px bg-black mb-8"></div>
                <div class="flex space-x-4 mt-4" v-for="i in 3" :key="i">
                    <BaseImage
                        src="ulquiorra.jpg"
                        class="bg-primary w-20 h-20 object-contain"
                    ></BaseImage>
                    <div>
                        <p class="text-gray-600 mb-4">Sugioti RC Car</p>
                        <h5 class="text-xl">$39.99</h5>
                    </div>
                </div>
            </div>
            <div class="col-span-3 flex items-center my-8">
                <div class="flex-grow h-px bg-gray-600"></div>
                <button class="px-8 py-2 text-sky-600 border border-sky-600 mx-4 font-serif">See More</button>
                <div class="flex-grow h-px bg-gray-600"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseImage from "../global/BaseImage.vue";
</script>
