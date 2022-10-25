<template>
    <div class="mt-8 py-8 w-11/12 lg:w-3/4 mx-auto bg-white rounded-md shadow">
        <div class="px-12 mb-8">
            <h4 class="font-semibold mb-8 text-2xl">Product Manager</h4>
            <product-search-box class="w-full mb-8"></product-search-box>
            <div class="flex justify-end space-x-4">
                <button
                    class="rounded-md shadow-lg px-4 py-2 text-slate-500"
                    @click="shouldShowAddProductModal = true"
                >
                    Add <FontAwesomeIcon icon="fa fa-plus"></FontAwesomeIcon>
                </button>
                <button
                    class="rounded-md shadow-lg px-4 py-2 text-amber-500 disabled:opacity-50"
                    :disabled="selectedProductId === null"
                    @click="shouldShowEditProductModal = true"
                >
                    Edit <FontAwesomeIcon icon="fa fa-pen"></FontAwesomeIcon>
                </button>
                <button
                    class="rounded-md shadow-lg px-4 py-2 text-red-600 disabled:opacity-50"
                    :disabled="selectedProductId === null"
                    @click="shouldShowRemoveProductModal = true"
                >
                    Remove
                    <FontAwesomeIcon icon="fa fa-times"></FontAwesomeIcon>
                </button>
            </div>
        </div>
        <div class="grid mb-12">
            <div class="h-16 bg-slate-200 col-start-1 row-start-1"></div>
            <table
                v-if="products"
                class="w-3/4 mx-auto col-start-1 row-start-1"
            >
                <tr class="text-slate-900 h-16 mb-8">
                    <th class="text-left px-2 w-16">Id No</th>
                    <th class="text-left px-2">Image</th>
                    <th class="text-left px-2">Name</th>
                    <th class="text-left px-2">Price</th>
                </tr>
                <tr class="h-4"></tr>
                <tr
                    v-for="(product, index) in products"
                    :key="index"
                    class="border-b border-amber-500 hover:bg-slate-100 cursor-pointer"
                    @click="selectedProductId = product.id"
                    :class="{
                        'bg-slate-100 border-transparent  rounded-lg shadow':
                            selectedProductId === product.id,
                    }"
                >
                    <td class="w-16 px-4">
                        <FontAwesomeIcon
                            v-if="selectedProductId === product.id"
                            icon="fa fa-check-square"
                            class="text-slate-500"
                        ></FontAwesomeIcon>
                        <span v-else>{{ product.id }}</span>
                    </td>
                    <td class="px-2 w-24 py-2">
                        <BaseImage
                            :src="product.image_url"
                            is-external
                            class="w-full h-24 mx-auto object-cover"
                        ></BaseImage>
                    </td>
                    <td class="px-2">{{ product.title }}</td>
                    <td class="px-2">${{ product.price }}</td>
                </tr>
            </table>
        </div>
        <ProductPagination></ProductPagination>
        <AddModal v-model:shouldShow="shouldShowAddProductModal" />
        <RemoveModal
            v-model:shouldShow="shouldShowRemoveProductModal"
            :product-id="selectedProductId"
        ></RemoveModal>
        <EditModal
            v-model:should-show="shouldShowEditProductModal"
            :product-id="selectedProductId"
        ></EditModal>
    </div>
</template>

<script setup>
import ProductSearchBox from "@/components/global/ProductSearchBox.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BaseImage from "@/components/global/BaseImage.vue";
import ProductPagination from "@/components/productos/ProductPagination.vue";
import AddModal from "@/components/admin/product/AddModal.vue";
import RemoveModal from "@/components/admin/product/RemoveModal.vue";
import EditModal from "@/components/admin/product/EditModal.vue";

const store = useStore();
const products = computed(() => store.state.products.data);

const selectedProductId = ref(null);

store.watch(
    (state) => state.products.data,
    () => (selectedProductId.value = null)
);

const shouldShowAddProductModal = ref(false);
const shouldShowRemoveProductModal = ref(false);
const shouldShowEditProductModal = ref(false);
</script>
