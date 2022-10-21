<template>
    <base-modal
        :should-show="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <div class="px-4 pb-8">
            <div class="space-y-8">
                <BaseImageInput
                    class="w-full h-40 object-cover"
                    label="Product Image"
                ></BaseImageInput>
                <div class="flex space-x-4 items-center">
                    <BaseTextField
                        v-model="fields.title"
                        class="flex-grow"
                        label="Product Name"
                    ></BaseTextField>
                    <div class="flex space-x-2">
                        <input
                            type="checkbox"
                            class="accent-amber-500"
                            v-model="fields.isAvailable"
                        />
                        <label>Is Available</label>
                    </div>
                </div>
                <BaseTextField
                    v-model="fields.description"
                    label="Description"
                    is-text-area
                ></BaseTextField>
                <div class="flex space-x-4">
                    <BaseTextField
                        v-model="fields.price"
                        label="Price"
                    ></BaseTextField>
                    <BaseTextField
                        v-model="fields.brand"
                        label="Brand"
                    ></BaseTextField>
                </div>
            </div>
            <button class="bg-amber-500 py-2 mt-8 text-white rounded-md w-full">
                Update
            </button>
        </div>
    </base-modal>
</template>

<script setup>
import BaseTextField from "@/components/global/BaseTextField.vue";
import BaseImageInput from "@/components/global/BaseImageInput.vue";
import BaseModal from "../global/BaseModal.vue";
import { reactive, watch } from "vue";
import useAxios from "@/plugins/Axios";

const props = defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
    productId: {
        type: Number,
        default: null,
    },
});

const emit = defineEmits(["update:shouldShow"]);

const fields = reactive({
    imageUrl: null,
    title: "",
    description: "",
    price: "",
    brand: "",
    isAvailable: false,
});

const axios = useAxios();

watch(
    () => props.shouldShow,
    async (newVal) => {
        if (props.productId === null) return;
        if (newVal) {
            const { data: newProduct } = await axios.get(
                `/api/product/${props.productId}`
            );
            fields.title = newProduct.title;
            fields.description = newProduct.description;
            fields.price = String(newProduct.price);
            fields.brand = newProduct.brand;
            fields.isAvailable = newProduct.is_available;
        }
    }
);
</script>
