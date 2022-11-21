<template>
    <div class="py-8">
        <h2 class="text-4xl mb-12 font-serif text-center">
            Trending this month 🔥
        </h2>
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
                    <h5 class="text-xl font-serif mb-4">{{ prod.title }}</h5>
                    <h4 class="text-2xl font-semibold mb-8">
                        ${{ prod.price }}
                    </h4>
                    <button
                        class="py-2 px-2 w-full bg-sky-600 text-white rounded-md"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseImage from "../global/BaseImage.vue";

const trendingProducts = [
    {
        title: "SS Goku",
        price: 30.99,
        image_url:
            "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
        title: "Toy Story Collection",
        price: 44.55,
        image_url:
            "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
        title: "Asuka Langley",
        price: 99.99,
        image_url:
            "https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
        title: "Uchiha Lite",
        price: 24.99,
        image_url:
            "https://images.unsplash.com/photo-1630710478039-9c680b99f800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
];
</script>
