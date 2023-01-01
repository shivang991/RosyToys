<template>
    <div
        class="w-60 shadow-lg hover:shadow-xl cursor-pointer px-4 py-12 rounded-md"
    >
        <BaseImage
            isExternal
            :src="imgSrc"
            class="w-40 h-40 object-cover mb-4 rounded"
        />
        <div
            class="flex flex-col items-start mb-4 space-y-2"
        >
            <p
                class="px-2 text-sm bg-red-50 border border-red-600 text-red-600 rounded-full"
                v-if="isLowStock"
            >
                Existencias bajas
            </p>
            <p
                class="px-2 text-sm bg-white text-slate-500 rounded-full border border-slate-500"
                v-if="isLimited"
            >
                Edición limitada
            </p>
            <p
                class="px-2 text-sm bg-white text-sky-600 rounded-full border border-sky-600"
                v-if="isPromoted"
            >
                Promocionado
            </p>
        </div>
        <div class="flex justify-between space-x-8">
            <p class="leading-none">
                {{ title }}
            </p>
            <h5 class="font-semibold text-xl">${{ price }}</h5>
        </div>
    </div>
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
