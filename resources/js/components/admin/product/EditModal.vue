<template>
    <base-modal
        :should-show="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <div class="py-8 flex justify-center w-80" v-if="isFetchingProduct">
            <div
                class="w-8 h-8 border-4 border-sky-600 border-b-transparent rounded-full animate-spin"
            ></div>
        </div>
        <form v-else class="px-4 pb-8" @submit.prevent="handleSubmit">
            <div class="space-y-8">
                <BaseMultiImageInput
                    label="Imagen del Producto"
                    v-model="fields.image"
                    :initial-srcs="productImages"
                />
                <!-- <BaseImageInput
                    :default-src="productImgSrc"
                    class="w-full h-40 object-cover"
                    label="Product Image"
                    v-model="fields.image"
                ></BaseImageInput> -->
                <BaseTextField
                    v-model="fields.title"
                    label="Nombre"
                ></BaseTextField>
                <BaseTextField
                    v-model="fields.description"
                    label="Descripción"
                    is-text-area
                ></BaseTextField>
                <div class="flex space-x-4">
                    <BaseTextField
                        v-model="fields.price"
                        label="Precio MXN"
                    ></BaseTextField>
                    <BaseTextField
                        v-model="fields.brand"
                        label="Brand"
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
                class="bg-sky-600 py-2 mt-8 text-white rounded-md w-full"
                :disabled="isFormSubmitting"
                type="submit"
            >
                <span
                    class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                    v-if="isFormSubmitting"
                >
                </span>
                <span v-else> Modificar </span>
            </button>
        </form>
    </base-modal>
</template>

<script setup>
import BaseTextField from "@/components/global/BaseTextField.vue";
import BaseModal from "@/components/global/BaseModal.vue";
import { reactive, ref, watch } from "vue";
import useAxios from "@/plugins/Axios";
import { fireNotification, NotificationTypes } from "@/plugins/Notifications";
import { useStore } from "vuex";
import { categoryOptions } from "@/store/products";
import BaseMultiImageInput from "@/components/global/BaseMultiImageInput.vue";

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
    image: [],
    title: "",
    description: "",
    price: "",
    brand: "",
    isPromoted: false,
    category: categoryOptions[0],
});

/**
 * @type {import('vue').Ref<string[]>}
 */
const productImages = ref([]);

const isFetchingProduct = ref(false);
const isFormSubmitting = ref(false);

const invalidFields = reactive(new Set());

const axios = useAxios();

const store = useStore();

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
 * @type {ProductData}
 */
let lastProduct = null;

function handleSubmit() {
    invalidFields.clear();
    // Validation: Atleast 1 product image required
    if (!fields["image"].length) invalidFields.add("image");

    // Validation: All fields except booleans required
    Object.entries(fields).forEach(([key, val]) => {
        if (key.startsWith("is")) return;
        if (!val) invalidFields.add(key);
    });
    // Validation: Price should be numeric
    const price = parseFloat(fields.price);
    if (isNaN(price)) invalidFields.add("price");
    if (invalidFields.size) return;

    isFormSubmitting.value = true;
    const { isPromoted, image, ...data } = fields;

    //
    // compute changed, removed or newly added images
    //

    /**
     * Mapping of image id to new file for images changed by user
     * @type {Record<number,Blob>}
     */
    const changedImages = {};

    /**
     * ids of images deleted
     * @type {number[]}
     */
    const removedImages = [];

    /**
     * @type {(number|Blob)[]}
     */
    const fieldImages = [...fields.image];

    lastProduct.images.forEach(({ id }, index) => {
        // check if image was untouched
        if (fieldImages.some((img) => img === id)) return;

        // check whether image was deleted or changed
        const fileIndex = fieldImages
            .slice(0, index + 1)
            .findIndex((img) => img instanceof Blob);

        // image was deleted
        if (fileIndex === -1) {
            removedImages.push(id);
            return;
        }

        // image was changed
        changedImages[id] = fieldImages[fileIndex];

        // remove "Blob" from fieldImages array as we go
        fieldImages[fileIndex] = id;
        return;
    });

    /**
     * @type {Blob[]}
     */
    const newImages = fieldImages.filter((img) => img instanceof Blob);

    axios
        .postMultipart(`/api/product/update/${props.productId}`, {
            ...data,
            changed_images: changedImages,
            removed_images: removedImages,
            new_images: newImages,
            is_promoted: Number(isPromoted),
        })
        .then((response) => {
            if (response.data.message === "success") {
                lastProduct = null; // Should refetch next time (with updated data)
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
        if (lastProduct?.id === props.productId) return;
        if (newVal) {
            isFetchingProduct.value = true;

            /**
             * @type {{ data: ProductData }}
             */
            const { data: newProduct } = await axios.get(
                `/api/product/${props.productId}`
            );
            fields.title = newProduct.title;
            fields.description = newProduct.description;
            fields.price = String(newProduct.price);
            fields.brand = newProduct.brand;
            fields.isPromoted = Boolean(newProduct.is_promoted);
            fields.category = newProduct.category;

            // useful when later checking for deleted and changed images
            fields.image = newProduct.images.map(({ id }) => id);

            productImages.value = newProduct.images.map(({ src }) => src);

            isFetchingProduct.value = false;
            lastProduct = newProduct;
        }
    }
);
</script>
