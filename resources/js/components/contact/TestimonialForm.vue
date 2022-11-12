<template>
    <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto my-24 px-4">
        <h2 class="text-2xl text-center mx-auto font-semibold mb-8">
            Leave us a testimonial ❤️
        </h2>
        <div class="space-y-8 w-full">
            <base-image-input
                v-model="userImage"
                label="Please attach your photo"
                class="w-40 h-40 object-cover rounded-full shadow mx-auto"
                :is-invalid="invalidFields.has('image')"
            ></base-image-input>
            <base-text-field
                v-model="fields.name"
                label="Your Name"
                :is-invalid="invalidFields.has('name')"
            />
            <base-text-field
                v-model="fields.message"
                label="Message"
                is-text-area
                :is-invalid="invalidFields.has('message')"
            />
        </div>
        <button
            class="bg-amber-500 py-2 text-white rounded-md mt-8 w-full"
            type="submit"
            :disabled="isSubmitting"
        >
            <span
                class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                v-if="isSubmitting"
            >
            </span>
            <span v-else> Send </span>
        </button>
    </form>
</template>

<script setup>
import useAxios from "@/plugins/Axios";
import { fireNotification, NotificationTypes } from "@/plugins/Notifications";
import { reactive, ref } from "vue";
import BaseImageInput from "../global/BaseImageInput.vue";
import BaseTextField from "../global/BaseTextField.vue";

const fields = reactive({
    name: "",
    message: "",
});
const userImage = ref(null);

const invalidFields = ref(new Set([]));
const isSubmitting = ref(false);
const axios = useAxios();

function handleSubmit() {
    invalidFields.value.clear();
    // Validation: all fields required
    Object.entries(fields).forEach(([field, value]) => {
        if (!value) invalidFields.value.add(field);
    });
    if (!userImage.value) invalidFields.value.add("image");

    if (invalidFields.value.size) return;

    isSubmitting.value = true;

    axios
        .postMultipart("/api/review/create", {
            ...fields,
            image: userImage.value,
        })
        .then((response) => {
            if (response.data.message === "success") {
                fields.message = "";
                fields.name = "";
                userImage.value = null;
                fireNotification(NotificationTypes.REVIEW_ADDED);
                isSubmitting.value = false;
            }
        });
}
</script>
