<template>
    <div class="admin-register mx-auto my-5 px-3 px-sm-5 px-xl-0">
        <h2 class="fw-bolder text-dark-blue">Registrarse</h2>
        <p class="mb-5">
            Utilice el siguiente formulario para registrar un nuevo
            administrador del sitio.
        </p>
        <register-form
            @success="fireSuccess"
            @input-error="fireInputErr"
            @general-error="fireGenErr"
        ></register-form>
    </div>
</template>

<script setup>
import {
    NotificationTypes,
    fireNotification as fire,
} from "@/plugins/Notifications";
import RegisterForm from "@/components/admin/RegisterForm.vue";

const fireSuccess = fire.bind(this, NotificationTypes.MANUAL_CREATED);
const fireGenErr = fire.bind(this, NotificationTypes.GENERAL_ERROR);
const fireInputErr = fire.bind(this, NotificationTypes.USER_EXISTS);
</script>
