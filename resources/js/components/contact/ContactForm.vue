<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col items-end">
        <div class="space-y-4 w-full">
            <base-text-field
                v-model="fields.name"
                placeholder="Your Name"
                label="Nombre"
                :is-invalid="invalidFields.has('name')"
            />
            <base-text-field
                type="email"
                placeholder="you@company.com"
                v-model="fields.email"
                label="Email"
                :is-invalid="invalidFields.has('email')"
            />
            <base-text-field
                v-model="fields.phone"
                placeholder="+1 (555) 000-0000"
                label="Phone number"
                type="tel"
                :min="10"
                :max="10"
                :is-invalid="invalidFields.has('phone')"
            />
            <base-text-field
                v-model="fields.message"
                placeholder="Tell us a little about the project..."
                label="¿Cómo podemos ayudar?"
                is-text-area
                :is-invalid="invalidFields.has('message')"
            />
        </div>
        <button
            class="bg-sky-600 px-8 py-2 text-white rounded-md mt-8 w-full"
            type="submit"
            :disabled="isSubmitting"
        >
            <span
                class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                v-if="isSubmitting"
            >
            </span>
            <span v-else> Enviar mensaje </span>
        </button>
    </form>
</template>

<script setup>
import useAxios from "@/plugins/Axios";
import { fireNotification, NotificationTypes } from "@/plugins/Notifications";
import { reactive, ref } from "vue";
import BaseTextField from "../global/BaseTextField.vue";

const fields = reactive({
    name: "",
    email: "",
    phone: "",
    message: "",
});

const invalidFields = ref(new Set([]));
const isSubmitting = ref(false);
const axios = useAxios();

function handleSubmit() {
    invalidFields.value.clear();
    // Validation: all fields required
    Object.entries(fields).forEach(([field, value]) => {
        if (!value) invalidFields.value.add(field);
    });
    if (invalidFields.value.size) return;

    isSubmitting.value = true;

    // axios.post("/api/contact/create", fields).then((response) => {
    //     if (response.data.message === "success") {
    //         fields.message = "";
    //         fields.phone = "";
    //         fireNotification(NotificationTypes.CONTACT_MESSAGE_ADDED);
    //         isSubmitting.value = false;
    //     }
    // });
}
</script>
