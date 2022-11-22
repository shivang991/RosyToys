<template>
    <form @submit.prevent="login">
        <div class="space-y-4 mb-12">
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
        <button class="bg-sky-600 w-full py-2 rounded-md text-white">
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
import { useStore } from "vuex";
const axios = useAxios();
const store = useStore();
const router = useRouter();
const password = ref("");
const email = ref("");

const login = async () => {
    try {
        const response = await axios.post("/api/login", {
            email: email.value,
            password: password.value,
        });
        if (response.data.message === "success") {
            console.log(response.data)
            store.commit("auth/SET_PROFILE", {
                accessToken: response.data.token,
                profile: response.data.profile,
            });
            if (response.data.abilites)
                store.commit(
                    "auth/SET_ACCESSIBLE_MODULES",
                    response.data.abilites
                );
            fireNotification(NotificationTypes.LOGIN_SUCCESS);
            router.push({ name: "AdminDashboard" });
        }
    } catch (error) {
        if (error.response.status === 401) {
            fireNotification(NotificationTypes.INVALID_CREDENTIALS);
        }
    }
};
</script>
