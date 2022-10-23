<template>
    <div class="mt-8 py-8 w-11/12 lg:w-3/4 mx-auto bg-white rounded-md shadow">
        <div class="px-12">
            <h4 class="font-semibold mb-8 text-2xl">Image Carousel Manager</h4>
            <div class="py-8 flex justify-center" v-if="isLoading">
                <div
                    class="w-8 h-8 border-4 border-amber-500 border-b-transparent rounded-full animate-spin"
                ></div>
            </div>
            <div v-else>
                <ul v-if="items.length" class="grid grid-cols-2 gap-4 mb-4">
                    <li
                        v-for="(item, index) in items"
                        :key="index"
                        class="px-4 rounded-md shadow py-8"
                    >
                        <BaseImage
                            :src="item.image_url"
                            class="w-full h-40 object-cover rounded-md"
                            is-external
                        ></BaseImage>
                        <div class="text-slate-900 text-center mb-4">
                            {{ item.description }}
                        </div>
                        <div class="col-start-2 flex justify-center space-x-2">
                            <button
                                class="px-2 py-1 border border-amber-500 rounded-md text-amber-500"
                                @click="imageIdForDeletion = item.id"
                            >
                                Remove
                            </button>
                            <button
                                class="px-2 py-1 border border-amber-500 rounded-md text-amber-500"
                                @click="imgObjForUpdation = item"
                            >
                                Edit
                            </button>
                        </div>
                    </li>
                </ul>
                <p
                    v-else
                    class="p-4 text-center bg-slate-100 rounded-md shadow text-slate-900"
                >
                    Ningún elemento para mostrar aquí
                </p>
                <button
                    class="py-2 px-8 bg-amber-500 text-white mt-8 rounded-md"
                    @click="shouldShowAddImageModal = true"
                >
                    Add an item
                </button>
            </div>
        </div>
        <AddCarouselImageModal
            v-model:should-show="shouldShowAddImageModal"
            @item-added="fetchData"
        ></AddCarouselImageModal>
        <RemoveCarouselImageModal
            :carousel-image-id="imageIdForDeletion"
            @cancel="imageIdForDeletion = null"
            @success="handleDeletionSuccess"
        ></RemoveCarouselImageModal>
        <EditCarouselImageModal
            :carousel-image-obj="imgObjForUpdation"
            @cancel="imgObjForUpdation = null"
            @success="handleUpdationSuccess"
        ></EditCarouselImageModal>
    </div>
</template>

<script setup>
import useAxios from "@/plugins/Axios";
import { ref } from "vue";
import AddCarouselImageModal from "@/components/admin/AddCarouselImageModal.vue";
import BaseImage from "@/components/global/BaseImage.vue";
import RemoveCarouselImageModal from "@/components/admin/RemoveCarouselImageModal.vue";
import EditCarouselImageModal from "@/components/admin/EditCarouselImageModal.vue";

const axios = useAxios();
const isLoading = ref(true);
const items = ref([]);

const fetchData = () => {
    axios.get("/api/carousel").then((respose) => {
        isLoading.value = false;
        items.value = respose.data;
    });
};
fetchData();

const shouldShowAddImageModal = ref(false);
const imageIdForDeletion = ref(null);
const imgObjForUpdation = ref(null);

function handleDeletionSuccess() {
    items.value = items.value.filter((i) => i.id !== imageIdForDeletion.value);
    imageIdForDeletion.value = null;
}

function handleUpdationSuccess() {
    imgObjForUpdation.value = null;
    fetchData();
}
</script>
