<template>
    <div class="py-8 w-11/12 lg:w-3/4 mx-auto">
        <h4 class="font-semibold mb-8 text-2xl">Welcome, {{ profile.name }}</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            <div
                class="col-span-2 flex py-8 px-4 bg-white rounded-md shadow justify-center space-x-8 cursor-pointer transition hover:shadow-xl hover:scale-110"
            >
                <h5 class="text-xl text-amber-500">Post Creator</h5>
                <BaseImage
                    src="admin_post_creator.png"
                    class="w-40 h-40 object-contain"
                ></BaseImage>
            </div>
            <router-link
                :to="{ name: 'CarouselManager' }"
                class="px-4 py-8 bg-white rounded-md shadow cursor-pointer transition hover:shadow-xl hover:scale-110"
            >
                <h5 class="text-xl text-amber-500 text-center">
                    Image Carousel Manager
                </h5>
            </router-link>
            <div
                class="py-8 px-4 bg-white rounded-md shadow cursor-pointer transition hover:shadow-xl hover:scale-110"
            >
                <h5 class="text-xl text-amber-500 text-center mb-8">
                    Customer Service Manager
                </h5>
                <BaseImage
                    src="admin_customer_service_manager.png"
                    class="w-32 mx-auto"
                ></BaseImage>
            </div>
            <router-link
                :to="{ name: 'ProductManager' }"
                class="col-span-2 flex py-8 px-4 bg-white rounded-md shadow justify-center space-x-8 cursor-pointer transition hover:shadow-xl hover:scale-110"
            >
                <h5 class="text-xl text-amber-500">Product Manager</h5>
                <BaseImage
                    src="admin_product_manager.png"
                    class="w-40 h-40 object-contain"
                ></BaseImage>
            </router-link>
            <div
                class="col-span-2 flex py-8 px-4 bg-white rounded-md shadow justify-center space-x-8 cursor-pointer transition hover:shadow-xl hover:scale-110"
            >
                <h5 class="text-xl text-amber-500">User Manager</h5>
                <BaseImage
                    src="admin_user_manager.png"
                    class="w-40 h-40 object-contain"
                ></BaseImage>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import BaseImage from "@/components/global/BaseImage.vue";
import { computed } from "vue";

const store = useStore();

const profile = computed(() => store.state.auth.profile);
</script>
