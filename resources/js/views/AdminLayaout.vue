<template>
    <div>
        <div class="py-2 bg-sky-600 flex items-center px-2 sm:px-8 md:px-20">
            <router-link
                :to="{ name: 'AdminDashboard' }"
                class="font-semibold text-white ml-2 mr-auto text-xl"
                >Panel de Administración</router-link
            >
            <div class="flex space-x-2">
                <button
                    @click="logout"
                    class="flex items-center space-x-2 py-1 px-4 border rounded-md border-white text-white"
                >
                    <FontAwesomeIcon
                        icon="fa fa-right-from-bracket"
                    ></FontAwesomeIcon>
                    <span>Cerrar Sesión</span>
                </button>
                <router-link
                    :to="{ name: 'Home' }"
                    class="py-1 px-4 border rounded-md border-white text-white"
                    >Inicio</router-link
                >
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script setup>
import { useAxios } from "@/plugins/Axios";
import { useRouter } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const axios = useAxios();
const router = useRouter();

async function logout() {
    await axios.logout();
    router.push({ name: "AdminLogin" });
}
</script>
