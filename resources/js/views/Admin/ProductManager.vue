<template>
    <div class="mt-8 py-8 w-11/12 lg:w-3/4 mx-auto rounded-md shadow">
        <div class="px-12 mb-8">
            <h4 class="font-semibold mb-8 text-2xl">Administrador de Productos</h4>
            <div class="flex space-x-8">
                <SearchBox></SearchBox>
                <div class="flex">
                    <button
                        @click="shouldShowAddProductModal = true"
                        class="px-4 flex items-center space-x-2 text-sky-600 border border-r-transparent border-sky-100 rounded-l-md"
                    >
                        <span>Agregar</span>
                        <FontAwesomeIcon
                            icon="fa fa-plus"
                            class="text-sm"
                        ></FontAwesomeIcon>
                    </button>
                    <button
                        :disabled="selectedProductId === null"
                        @click="shouldShowEditProductModal = true"
                        class="px-4 flex items-center space-x-2 text-sky-600 border border-sky-100 group"
                    >
                        <span class="group-disabled:opacity-50">Editar</span>
                        <FontAwesomeIcon
                            icon="fa fa-pen"
                            class="text-sm group-disabled:opacity-50"
                        ></FontAwesomeIcon>
                    </button>
                    <button
                        :disabled="selectedProductId === null"
                        @click="shouldShowRemoveProductModal = true"
                        class="px-4 flex items-center space-x-2 text-red-600 border border-red-100 border-l-transparent rounded-r-md group"
                    >
                        <span class="group-disabled:opacity-50">Eliminar</span>
                        <FontAwesomeIcon
                            icon="fa fa-times"
                            class="text-sm group-disabled:opacity-50"
                        ></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
        <div class="grid mb-12">
            <div class="h-16 bg-gray-100 col-start-1 row-start-1"></div>
            <table
                v-if="products"
                class="w-3/4 mx-auto col-start-1 row-start-1"
            >
                <tr class="h-16 mb-8">
                    <th class="text-left px-2 w-16">SKU</th>
                    <th class="text-left px-2">Imagen</th>
                    <th class="text-left px-2">Nombre</th>
                    <th class="text-left px-2">Precio (MXN)</th>
                    <th class="text-left px-2"></th>
                </tr>
                <tr class="h-4"></tr>
                <tr
                    v-for="(product, index) in products"
                    :key="index"
                    class="border-b border-gray-600 hover:bg-gray-100 cursor-pointer"
                    @click="selectedProductId = product.id"
                    :class="{
                        'bg-gray-100 border-transparent  rounded-lg shadow':
                            selectedProductId === product.id,
                    }"
                >
                    <td class="w-16 px-4">
                        <FontAwesomeIcon
                            v-if="selectedProductId === product.id"
                            icon="fa fa-check-square"
                            class="text-gray-600"
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
                    <td class="px-2 py-4 space-y-2 flex flex-col items-end">
                        <p
                            v-if="product.is_limited_edition"
                            class="text-sm bg-gray-200 text-gray-600 border border-gray-600 px-2 rounded-full py-1 w-max"
                        >
                            Limited Edition
                        </p>
                        <p
                            v-if="product.is_low_stock"
                            class="text-sm bg-red-50 text-red-600 border border-red-600 px-2 rounded-full py-1 w-max"
                        >
                            Low stock
                        </p>
                        <p
                            v-if="product.is_promoted"
                            class="text-sm text-sky-600 border border-sky-600 px-2 rounded-full py-1 w-max"
                        >
                            Promoted
                        </p>
                    </td>
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
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BaseImage from "@/components/global/BaseImage.vue";
import ProductPagination from "@/components/productos/ProductPagination.vue";
import AddModal from "@/components/admin/product/AddModal.vue";
import RemoveModal from "@/components/admin/product/RemoveModal.vue";
import EditModal from "@/components/admin/product/EditModal.vue";
import SearchBox from "@/components/admin/product/SearchBox.vue";

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
