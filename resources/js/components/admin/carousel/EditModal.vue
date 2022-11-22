<template>
    <base-modal :should-show="!!carouselImageObj" @close="emit('cancel')">
        <form class="px-4 pb-8" @submit.prevent="handleSubmit">
            <div class="space-y-8">
                <BaseImageInput
                    :default-src="defaultImgSrc"
                    class="w-full h-40 object-cover"
                    label="Image"
                    v-model="fields.image"
                ></BaseImageInput>
                <BaseTextField
                    v-model="fields.description"
                    label="Description"
                    is-text-area
                ></BaseTextField>
            </div>
            <button
                class="bg-sky-600 py-2 mt-8 text-white rounded-md w-full"
                :disabled="isLoading"
                type="submit"
            >
                <span
                    class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                    v-if="isLoading"
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
import BaseModal from "@/components/global/BaseModal.vue";
import { reactive, ref, watch } from "vue";
import useAxios from "@/plugins/Axios";
import { fireNotification, NotificationTypes } from "@/plugins/Notifications";

const props = defineProps({
    carouselImageObj: {
        type: Object, // {id:number, description:string, image_url:string}
        default: null,
    },
});

const emit = defineEmits(["cancel", "success"]);

const fields = reactive({
    image: null,
    description: "",
});

const isLoading = ref(false);
const defaultImgSrc = ref(null);
const invalidFields = reactive(new Set());

const axios = useAxios();

watch(
    () => props.carouselImageObj,
    (newVal) => {
        if (newVal) {
            defaultImgSrc.value = newVal.image_url;
            fields.description = newVal.description;
            fields.image = null;
        }
    }
);

function handleSubmit() {
    if (props.carouselImageObj) {
        invalidFields.clear();
        // Validation: Description required
        if (!fields.description) invalidFields.add("description");
        if (invalidFields.size) return;

        isLoading.value = true;
        axios
            .postMultipart(
                `/api/carousel/update/${props.carouselImageObj.id}`,
                fields
            )
            .then((response) => {
                if (response.data.message === "success") {
                    emit("success");
                    fireNotification(NotificationTypes.CAROUSEL_IMAGE_UPDATED);
                }
            })
            .catch((error) => {
                console.log(error.response);
                fireNotification(NotificationTypes.GENERAL_ERROR);
            })
            .finally(() => (isLoading.value = false));
    }
}
</script>
