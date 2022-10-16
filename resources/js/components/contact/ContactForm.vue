<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col items-end">
        <div class="space-y-8 w-full">
            <base-text-field v-model="fields.firstName" label="First Name" />
            <base-text-field v-model="fields.lastName" label="Last Name" />
            <base-text-field v-model="fields.email" label="Email Id" />
            <base-text-field
                v-model="fields.message"
                label="Message"
                is-text-area
            />
        </div>
        <button class="mt-8 bg-amber-500 text-white py-2 px-4 rounded-md">
            Send Message
        </button>
    </form>
</template>

<script setup>
import { reactive } from "vue";
import BaseTextField from "../global/BaseTextField.vue";

const fields = reactive({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
});

function handleSubmit() {
    console.log("handling form submition");
}
</script>
