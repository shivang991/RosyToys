<template>
    <base-modal
        :should-show="!!modelValue"
        @close="emit('update:modelValue', null)"
    >
        <div class="py-8 flex justify-center w-80" v-if="isLoading">
            <div
                class="w-8 h-8 border-4 border-sky-600 border-b-transparent rounded-full animate-spin"
            ></div>
        </div>

        <div v-else class="w-96">
            <base-image
                is-external
                :src="currentViewingImg?.src"
                class="h-48 w-full object-cover mb-2"
            />
            <div class="flex gap-2 justify-center px-2 flex-wrap">
                <button
                    v-for="img in product.images"
                    :key="img.id"
                    @click="currentViewingImg = img"
                    class="basis-24 h-12 duration-150"
                    :class="{
                        'scale-75 opacity-50': currentViewingImg !== img,
                    }"
                >
                    <base-image
                        class="w-full h-full object-cover rounded"
                        is-external
                        :src="img.src"
                    />
                </button>
            </div>
            <div class="p-8">
                <h2 class="font-semibold text-2xl">
                    {{ product.title }}
                </h2>
                <p class="leading-loose mb-2">
                    {{ product.description }}
                </p>
                <p class="font-semibold text-sky-600 mb-2">
                    ${{ product.price }}
                </p>

                <div class="flex space-x-4">
                    <div>
                        <p class="text-sm text-gray-600">Marca</p>
                        <p class="text-xl">{{ product.brand }}</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-600">Categoría</p>
                        <p class="text-xl">{{ product.category }}</p>
                    </div>
                </div>
            </div>
        </div>
    </base-modal>
</template>

<script setup>
import BaseModal from "@/components/global/BaseModal.vue";
import useAxios from "@/plugins/Axios";
import { ref, watch } from "vue";
import BaseImage from "../global/BaseImage.vue";

const props = defineProps({
    modelValue: { type: Number },
});

const emit = defineEmits(["update:modelValue"]);

const isLoading = ref(false);

/**
 * @typedef ProductData
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} brand
 * @property {string} category
 * @property {number} price
 * @property {{id : number, src : string}[]} images
 * @property {string} created_at
 * @property {string} updated_at
 */

/**
 * @type {import('vue').Ref<ProductData|null>}
 */
const product = ref(null);

/**
 * @type {import('vue').Ref<ProductData["images"][number]|null>}
 */
const currentViewingImg = ref(null);

const axios = useAxios();

watch(
    () => props.modelValue,
    async (newProductId) => {
        // avoid refetching if viewing same product again after closing the modal once
        if (!newProductId || newProductId === product.value?.id) return;

        isLoading.value = true;

        /**
         * @type {{ data: ProductData }}
         */
        const { data } = await axios.get(`/api/product/${newProductId}`);

        product.value = data;
        currentViewingImg.value = data.images[0];

        isLoading.value = false;
    }
);
</script>
