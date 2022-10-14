<template>
    <div v-if="isUserLoaded">
        <nav-bar v-if="isLayoutEnabled"></nav-bar>
        <div>
            <router-view />
            <footer-bar v-if="isLayoutEnabled"></footer-bar>
        </div>
        <base-notification />
    </div>
    <div
        v-else
        class="vh-100 w-100 d-flex justify-content-center align-items-center"
    >
        <p class="spinner spinner-grow text-primary"></p>
    </div>
</template>

<script setup>
import { ref } from "vue";
import NavBar from "@/components/layout/nav/Nav.vue";
import FooterBar from "@/components/layout/footer/Footer.vue";
import { useAxios } from "@/plugins/Axios";
import BaseNotification from "@/components/global/BaseNotification.vue";
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";

const isUserLoaded = ref(false);
const { setUser } = useAxios();
setUser().then(() => {
    isUserLoaded.value = true;
});

const route = useRoute();

const isLayoutEnabled = computed(() => !route.meta.isLayoutDisabled);
</script>
