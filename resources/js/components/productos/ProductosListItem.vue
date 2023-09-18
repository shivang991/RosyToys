<template>
    <div class="shadow-lg px-4 py-4 rounded-md">
        <BaseImage
            isExternal
            :src="imgSrc"
            class="w-40 h-40 object-cover mb-4 rounded mx-auto"
        />
        <div class="flex justify-between space-x-2 mb-4 items-center">
            <p class="text-sm truncate">
                {{ title }}
            </p>
            <p class="font-semibold">${{ price }}</p>
        </div>
        <button
            class="bg-gray-100 text-gray-600 py-2 px-4 font-semibold rounded ml-auto block"
            @click="emit('more-click')"
        >
            Ver más
        </button>
    </div>
</template>

<script setup>
import BaseImage from "../global/BaseImage.vue";

const emit = defineEmits(["more-click"]);

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
