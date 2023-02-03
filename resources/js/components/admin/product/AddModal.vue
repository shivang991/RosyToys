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
                    label="Imagen del Producto"
                ></BaseImageInput>
                <BaseTextField
                    v-model="fields.title"
                    label="Nombre"
                    :is-invalid="invalidFields.has('title')"
                ></BaseTextField>
                <BaseTextField
                    :is-invalid="invalidFields.has('description')"
                    v-model="fields.description"
                    label="Descripción"
                    is-text-area
                ></BaseTextField>
                <div class="flex space-x-4">
                    <BaseTextField
                        :is-invalid="invalidFields.has('price')"
                        v-model="fields.price"
                        label="Precio MXN"
                    ></BaseTextField>
                    <BaseTextField
                        :is-invalid="invalidFields.has('brand')"
                        v-model="fields.brand"
                        label="Marca"
                    ></BaseTextField>
                </div>
                <div>
                    <p class="mb-2">Categoría</p>
                    <select
                        v-model="fields.category"
                        class="px-4 w-full py-2 bg-gray-100 cursor-pointer outline-none rounded-md focus:ring"
                    >
                        <option
                            v-for="(category, index) in categoryOptions"
                            :key="index"
                            :value="category"
                            :selected="index === 0"
                        >
                            {{ category }}
                        </option>
                    </select>
                </div>
                <div class="flex space-x-2">
                    <input
                        type="checkbox"
                        class="accent-sky-600"
                        v-model="fields.isPromoted"
                    />
                    <label>Tendencia</label>
                </div>
            </div>
            <button
                class="bg-sky-500 py-2 mt-8 text-white rounded-md w-full"
                :disabled="isLoading"
                type="submit"
            >
                <span
                    class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                    v-if="isLoading"
                >
                </span>
                <span v-else> Agregar </span>
            </button>
        </form>
    </base-modal>
</template>

<script setup>
import BaseTextField from "@/components/global/BaseTextField.vue";
import BaseImageInput from "@/components/global/BaseImageInput.vue";
import BaseModal from "@/components/global/BaseModal.vue";
import { reactive, ref } from "vue";
import useAxios from "@/plugins/Axios";
import { fireNotification, NotificationTypes } from "@/plugins/Notifications";
import { useStore } from "vuex";
import { categoryOptions } from "@/store/products";

defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
});

const fields = reactive({
    image: null,
    title: "",
    description: "",
    price: "",
    brand: "",
    isPromoted: false,
    category: categoryOptions[0],
});

const invalidFields = reactive(new Set());

const isLoading = ref(false);

const axios = useAxios();
const store = useStore();

function handleSubmit() {
    invalidFields.clear();
    // Validation: All fields except booleans required
    Object.entries(fields).forEach(([key, val]) => {
        if (key.startsWith("is")) return;
        if (!val) invalidFields.add(key);
    });
    // Validation: Price should be numeric
    const price = parseFloat(fields.price);
    if (isNaN(price)) invalidFields.add("price");
    if (invalidFields.size) return;

    isLoading.value = true;

    const { isLimitedEdition, isLowStock, isPromoted, ...data } = fields;

    axios
        .postMultipart("/api/product/create", {
            ...data,
            is_promoted: Number(isPromoted),
        })
        .then((response) => {
            if (response.data.message === "success") {
                fields.image = null;
                fields.title = "";
                fields.price = "";
                fields.brand = "";
                fields.description = "";
                fields.isPromoted = false;
                emit("update:shouldShow", false);
                fireNotification(NotificationTypes.PRODUCT_CREATED);
                store.dispatch("products/refetch");
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
