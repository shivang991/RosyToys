<template>
    <button
        class="shadow-lg hover:shadow-xl cursor-pointer px-4 py-12 rounded-md"
    >
        <BaseImage
            isExternal
            :src="imgSrc"
            class="w-40 h-40 object-cover mb-4 rounded mx-auto"
        />
        <div class="flex justify-between space-x-8">
            <p class="leading-none">
                {{ title }}
            </p>
            <h5 class="font-semibold text-xl">${{ price }}</h5>
        </div>
    </button>
</template>

<script setup>
import BaseImage from "../global/BaseImage.vue";

const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
    imgSrc: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    isLimited: {
        type: Boolean,
        required: true,
    },
    isPromoted: {
        type: Boolean,
        required: true,
    },
    isLowStock: {
        type: Boolean,
        required: true,
    },
});
</script>
