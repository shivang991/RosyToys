<template>
    <form @submit.prevent="login">
        <div class="space-y-8 mb-12">
            <base-text-field
                v-model="email"
                label="Correo electrónico"
            ></base-text-field>
            <base-text-field
                type="password"
                v-model="password"
                label="Contraseña"
            ></base-text-field>
        </div>
        <button class="bg-amber-500 w-full py-2 rounded-md text-white">
            Enviar
        </button>
    </form>
</template>

<script setup>
import { ref } from "vue";
import { useAxios } from "@/plugins/Axios";
import { fireNotification, NotificationTypes } from "@/plugins/Notifications";
import { useRouter } from "vue-router";
import BaseTextField from "../global/BaseTextField.vue";

const axios = useAxios();
const router = useRouter();

const password = ref("");
const email = ref("");

const login = async () => {
    try {
        await axios.adminLogin(email.value, password.value);
        fireNotification(NotificationTypes.LOGIN_SUCCESS);
        router.push({ name: "AdminDashboard" });
    } catch (error) {
        if (
            error.message === "IsNonAdminUser" ||
            error.response.status === 401
        ) {
            fireNotification(NotificationTypes.INVALID_CREDENTIALS);
        }
    }
};
</script>
