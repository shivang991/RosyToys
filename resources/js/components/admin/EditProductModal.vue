<template>
    <base-modal
        :should-show="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <div class="py-8 flex justify-center w-80" v-if="isFetchingProduct">
            <div
                class="w-8 h-8 border-4 border-amber-500 border-b-transparent rounded-full animate-spin"
            ></div>
        </div>
        <form v-else class="px-4 pb-8" @submit.prevent="handleSubmit">
            <div class="space-y-8">
                <BaseImageInput
                    :default-src="productImgSrc"
                    class="w-full h-40 object-cover"
                    label="Product Image"
                    v-model="fields.image"
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
            <button
                class="bg-amber-500 py-2 mt-8 text-white rounded-md w-full"
                :disabled="isFormSubmitting"
                type="submit"
            >
                <span
                    class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                    v-if="isFormSubmitting"
                >
                </span>
                <span v-else> Update </span>
            </button>
        </form>
    </base-modal>
</template>

<script setup>
import BaseTextField from "@/components/global/BaseTextField.vue";
import BaseImageInput from "@/components/global/BaseImageInput.vue";
import BaseModal from "../global/BaseModal.vue";
import { reactive, ref, watch } from "vue";
import useAxios from "@/plugins/Axios";
import { fireNotification, NotificationTypes } from "@/plugins/Notifications";
import { useStore } from "vuex";

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

let lastProductId = null;

const fields = reactive({
    image: null,
    title: "",
    description: "",
    price: "",
    brand: "",
    isAvailable: false,
});

const isFetchingProduct = ref(false);
const isFormSubmitting = ref(false);
const productImgSrc = ref(null);
const invalidFields = reactive(new Set());

const axios = useAxios();

const store = useStore();

function handleSubmit() {
    invalidFields.clear();
    // Validation: All fields except image and isAvailable required
    Object.entries(fields).forEach(([key, val]) => {
        if (key === "image" || key === "isAvailable") return;
        if (!val) invalidFields.add(key);
    });
    // Validation: Price should be numeric
    const price = parseFloat(fields.price);
    if (isNaN(price)) invalidFields.add("price");
    if (invalidFields.size) return;

    isFormSubmitting.value = true;
    axios
        .postMultipart(`/api/product/update/${props.productId}`, {
            ...fields,
            isAvailable: Number(fields.isAvailable),
        })
        .then((response) => {
            if (response.data.message === "success") {
                fields.image = null;
                fields.title = "";
                fields.price = "";
                fields.brand = "";
                fields.isAvailable = false;
                fields.description = "";
                lastProductId = null; // Should refetch next time (with updated data)
                store.dispatch("products/refetch");
                emit("update:shouldShow", false);
                fireNotification(NotificationTypes.PRODUCT_UPDATED);
            }
        })
        .catch((error) => {
            console.log(error.response);
            fireNotification(NotificationTypes.GENERAL_ERROR);
        })
        .finally(() => (isFormSubmitting.value = false));
}

// Update the fields when productId changes
watch(
    () => props.shouldShow,
    async (newVal) => {
        if (lastProductId === props.productId) return;
        if (newVal) {
            isFetchingProduct.value = true;
            const { data: newProduct } = await axios.get(
                `/api/product/${props.productId}`
            );
            fields.title = newProduct.title;
            fields.description = newProduct.description;
            fields.price = String(newProduct.price);
            fields.brand = newProduct.brand;
            fields.isAvailable = Boolean(newProduct.is_available);
            productImgSrc.value = newProduct.image_url;
            isFetchingProduct.value = false;
            lastProductId = props.productId;
        }
    }
);
</script>
