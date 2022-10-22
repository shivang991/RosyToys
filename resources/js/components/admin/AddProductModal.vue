<template>
    <base-modal
        :should-show="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <form class="px-4 pb-8" @submit.prevent="handleSubmit">
            <div class="space-y-8">
                <BaseImageInput
                    :is-invalid="invalidFields.has('image')"
                    v-model="fields.image"
                    class="w-full h-40 object-cover"
                    label="Product Image"
                ></BaseImageInput>
                <div class="flex space-x-4 items-center">
                    <BaseTextField
                        v-model="fields.title"
                        class="flex-grow"
                        label="Product Name"
                        :is-invalid="invalidFields.has('title')"
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
                    :is-invalid="invalidFields.has('description')"
                    v-model="fields.description"
                    label="Description"
                    is-text-area
                ></BaseTextField>
                <div class="flex space-x-4">
                    <BaseTextField
                        :is-invalid="invalidFields.has('price')"
                        v-model="fields.price"
                        label="Price"
                    ></BaseTextField>
                    <BaseTextField
                        :is-invalid="invalidFields.has('brand')"
                        v-model="fields.brand"
                        label="Brand"
                    ></BaseTextField>
                </div>
            </div>
            <button
                class="bg-amber-500 py-2 mt-8 text-white rounded-md w-full"
                :disabled="isLoading"
                type="submit"
            >
                <span
                    class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                    v-if="isLoading"
                >
                </span>
                <span v-else> Create </span>
            </button>
        </form>
    </base-modal>
</template>

<script setup>
import BaseTextField from "@/components/global/BaseTextField.vue";
import BaseImageInput from "@/components/global/BaseImageInput.vue";
import BaseModal from "../global/BaseModal.vue";
import { reactive, ref } from "vue";
import useAxios from "@/plugins/Axios";
import { fireNotification, NotificationTypes } from "@/plugins/Notifications";

defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
});

const fields = reactive({
    image: null,
    title: "",
    isAvailable: false,
    description: "",
    price: "",
    brand: "",
});

const invalidFields = reactive(new Set());

const isLoading = ref(false);

const axios = useAxios();

function handleSubmit() {
    invalidFields.clear();
    // Validation: All fields except isAvailable required
    Object.entries(fields).forEach(([key, val]) => {
        if (key === "isAvailable") return;
        if (!val) invalidFields.add(key);
    });
    // Validation: Price should be numeric
    const price = parseFloat(fields.price);
    if (isNaN(price)) invalidFields.add("price");
    if (invalidFields.size) return;

    isLoading.value = true;
    axios
        .postMultipart("/api/product/create", {
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
                emit("update:shouldShow", false);
                fireNotification(NotificationTypes.PRODUCT_CREATED);
            }
        })
        .catch((error) => {
            console.log(error.response);
            fireNotification(NotificationTypes.GENERAL_ERROR);
        })
        .finally(() => (isLoading.value = false));
}

const emit = defineEmits(["update:shouldShow"]);
</script>
