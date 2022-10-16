<template>
    <div
        class="bg-slate-100 flex flex-col items-center px-8 py-12 shadow-sm rounded-tl-md rounded-tr-2xl rounded-bl-2xl rounde-br-md"
    >
        <BaseImage
            isExternal
            :src="imgSrc"
            class="w-60 h-40 object-cover mb-4 rounded"
        />
        <h5 class="text-xl font-semibold mb-2 text-center leading-none">
            {{ title }}
        </h5>
        <p class="mb-8 text-center">Price: {{ price }}$</p>
        <button
            class="flex justify-between w-full items-center py-2 px-4 bg-amber-500 text-white rounded-md"
            @click="viewProduct"
        >
            <span>Add to Cart</span>
            <FontAwesomeIcon icon="fa-shopping-cart"></FontAwesomeIcon>
        </button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import BaseImage from "../global/BaseImage.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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
});

const router = useRouter();

function viewProduct() {
    router.push({ name: "ProductDetail", params: { id: props.id } });
}
</script>
