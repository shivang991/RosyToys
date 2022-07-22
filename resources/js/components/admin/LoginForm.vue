<template>
    <div class="login-form px-2 px-sm-4">
        <h1 class="fw-bolder mb-5">Admin Iniciar Sesión</h1>
        <form @submit.prevent="login">
            <div class="mb-4">
                <label class="form-label text-dark-blue mb-1"
                    >Correo electrónico</label
                >
                <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    v-model="email"
                />
            </div>
            <div class="mb-4">
                <label class="form-label text-dark-blue mb-1">Contraseña</label>
                <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="password"
                />
            </div>
            <button class="btn my-4 btn-primary w-100">Enviar</button>
        </form>
        <p class="mt-5 mx-auto w-fit">
            <span class="mb-0 w-fit me-2">¿No eres administrador?</span>
            <router-link :to="{ name: 'Home' }">Ir al casa</router-link>
        </p>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useAxios } from "@/plugins/Axios";
import { NotificationTypes, useNotification } from "@/plugins/Notifications";
import { useRouter } from "vue-router";

const axios = useAxios();
const notification = useNotification();
const router = useRouter();

const password = ref("");
const email = ref("");

const login = async () => {
    try {
        await axios.adminLogin(email.value, password.value);
        notification.fire(NotificationTypes.LOGIN_SUCCESS);
        router.push({ name: "AdminDashboard" });
    } catch (error) {
        if (
            error.message === "IsNonAdminUser" ||
            error.response.status === 401
        ) {
            notification.fire(NotificationTypes.INVALID_CREDENTIALS);
        }
    }
};
</script>

<style lang="scss" scoped>
.login-form {
    max-width: 512px;
    margin: auto;
}
</style>
