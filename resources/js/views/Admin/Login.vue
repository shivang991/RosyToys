<template>
    <div class="mt-24 max-w-xl mx-4 md:mx-auto">
        <h1 class="text-4xl text-slate-900 font-bold mb-2">Admin Login</h1>
        <p class="mb-12 flex space-x-2">
            <span>¿No eres administrador?</span>
            <router-link class="text-amber-500 hover:underline" :to="{ name: 'Home' }">Ir al casa</router-link>
        </p>
        <login-form></login-form>
    </div>
</template>

<script setup>
import LoginForm from "@/components/admin/LoginForm.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
if (store.getters["auth/isAdmin"]) {
    router.push({ name: "AdminDashboard" });
}
</script>
