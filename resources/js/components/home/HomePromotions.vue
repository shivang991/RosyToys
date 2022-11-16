<template>
    <div>
        <div class="grid grid-cols-2 gap-8 mb-20">
            <div
                v-for="ad in ads"
                class="pb-4 pt-8 px-8 bg-white flex flex-col"
            >
                <h4 class="text-2xl mb-2">{{ ad.title }}</h4>
                <p>{{ ad.description }}</p>
                <p class="mt-4 pb-1 border-b-2 border-black font-serif w-max">
                    Discover Now
                </p>
                <BaseImage
                    class="w-40 h-40 object-contain row-start-2 col-start-1 self-end"
                    is-external
                    src="https://tiimg.tistatic.com/fp/1/007/651/kid-high-speed-racing-sports-remote-control-colorful-3d-light-effects-toy-car--469-w410.jpg"
                ></BaseImage>
            </div>
        </div>
        
        <div v-if="products && products.length">
            <h2 class="text-4xl font-serif">All Product</h2>
            <div class="w-20 h-px bg-black mb-8"></div>
            <div class="grid grid-cols-4 gap-4">
                <div
                    class="py-8 px-4 bg-white flex flex-col"
                    v-for="prod in products"
                >
                    <BaseImage
                        :src="prod.image_url"
                        is-external
                        class="w-full h-60 mb-4 object-contain"
                    ></BaseImage>

                    <h5 class="font-serif text-xl mb-4">
                        {{ prod.title }}
                    </h5>
                    <h5 class="text-xl font-semibold mb-8">
                        ${{ prod.price }}
                    </h5>
                    <button class="py-2 w-full text-white bg-sky-600 mt-auto">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseImage from "@/components/global/BaseImage.vue";
import useAxios from "@/plugins/Axios";
import { ref } from "vue";

const axios = useAxios();

const ads = [
    {
        id: 1,
        title: "Luxurious RC Car",
        description: "See the beauty of exotic world with the luxurious Car",
    },
    {
        id: 1,
        title: "Sports RC Car",
        description:
            "Feels the balancing function and beauty in our spectacular RC Car",
    },
];

const products = ref(null);
axios.get("/api/product/random").then((res) => {
    // promotionTiles.value = res.data.data;
    products.value = [
        {
            image_url:
                "https://i.ebayimg.com/images/g/ivcAAOSwrqthvYBz/s-l500.jpg",
            title: "Mitsuri Kanroji figurine",
            price: 200,
            id: 1,
        },
        {
            image_url:
                "https://s.alicdn.com/@sc04/kf/H7f1860afb09e43d0bdd80c7709ae391eR.png_960x960.png",
            title: "Kakashi figurine",
            price: 200,
            id: 1,
        },
        {
            image_url:
                "https://images-cdn.ubuy.co.in/3LEPNT2-remote-control-robot-dog-toy-with-touch.jpg",
            title: "Robo Dog",
            price: 200,
            id: 1,
        },
        {
            image_url:
                "https://rukminim1.flixcart.com/image/416/416/k2w6xe80/action-figure/a/u/y/avengers-action-figure-face-mask-ironman-captain-america-hulk-original-imafm5gabzypfnkj.jpeg",
            title: "Thainos Mask Dog",
            price: 200,
            id: 1,
        },
    ];
});
</script>
