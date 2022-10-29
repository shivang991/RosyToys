<template>
    <notification-root />
    <div v-if="isUserLoaded">
        <nav-bar v-if="isLayoutEnabled"></nav-bar>
        <div class="min-h-screen flex flex-col">
            <div class="flex-grow">
                <router-view />
            </div>
            <footer-bar v-if="isLayoutEnabled"></footer-bar>
        </div>
    </div>
    <div v-else class="min-h-screen flex items-center justify-center">
        <p
            class="w-10 h-10 border-4 border-b-transparent border-amber-500 animate-spin rounded-full"
        ></p>
    </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import NavBar from "@/components/layout/nav/Nav.vue";
import FooterBar from "@/components/layout/footer/Footer.vue";
import { useAxios } from "@/plugins/Axios";
import NotificationRoot from "@/components/global/NotificationRoot.vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const router = useRouter();

const store = useStore();
const isUserLoaded = computed(() => store.state.auth.isReady);

onMounted(async () => {
    store.dispatch("auth/init");
    await router.isReady();
});

const isLayoutEnabled = computed(() => !route.meta.isLayoutDisabled);

// Initialize product list
useStore().dispatch("products/refetch");
</script>
