<template>
    <div class="bg-slate-100 flex flex-col items-center px-8 py-12 shadow-sm rounded-tl-md rounded-tr-2xl rounded-bl-2xl rounde-br-md" @click="viewProduct">
        <BaseImage isExternal :src="imgSrc" class="w-60 h-40 object-cover mb-4 rounded" />
        <h5 class="text-xl font-semibold mb-2 text-center leading-none">Deer: Buy one get one Free</h5>
        <p class="mb-8 text-center">Price: 5$</p>
        <button class="flex justify-between w-full items-center py-2 px-4 bg-amber-500 text-white rounded-md">
            <span>Add to Cart</span>
            <FontAwesomeIcon icon="fa-shopping-cart"></FontAwesomeIcon>
        </button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import BaseImage from "../global/BaseImage.vue";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
    imgSrc: {
        type: String,
        required: true,
    },
    measurements: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    application: {
        type: String,
        required: true,
    },
});

const router = useRouter();
const productStats = {
    Marca: props.brand,
    Aplicacion: props.application,
    Codigo: props.code,
};

console.log(props.imgSrc);

function viewProduct() {
    console.log(router);
    // router.push({ name: 'ProductDetail', params: { id: props.id } });
}
</script>
