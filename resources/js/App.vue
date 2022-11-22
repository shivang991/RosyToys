<template>
    <notification-root />
    <div v-if="isAuthReady">
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
            class="w-10 h-10 border-4 border-b-transparent border-sky-600 animate-spin rounded-full"
        ></p>
    </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import NavBar from "@/components/layout/nav/Nav.vue";
import FooterBar from "@/components/layout/footer/Footer.vue";
import NotificationRoot from "@/components/global/NotificationRoot.vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const router = useRouter();

const store = useStore();

// not using store.state.auth.isReady because we'll need to await router.isReady
// after "auth/init" action is complete
const isAuthReady = ref(false);

onMounted(async () => {
    store.dispatch("auth/init");
    await router.isReady();
    isAuthReady.value = true;
});

const isLayoutEnabled = computed(() => isAuthReady.value && !route.meta.isLayoutDisabled);

// Initialize product list
store.dispatch("products/refetch");
</script>
