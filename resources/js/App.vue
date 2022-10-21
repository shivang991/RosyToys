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
import { onMounted, ref } from "vue";
import NavBar from "@/components/layout/nav/Nav.vue";
import FooterBar from "@/components/layout/footer/Footer.vue";
import { useAxios } from "@/plugins/Axios";
import NotificationRoot from "@/components/global/NotificationRoot.vue";
import { computed } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const isUserLoaded = ref(false);
const { setUser } = useAxios();

const route = useRoute();
const router = useRouter();

onMounted(async () => {
    await setUser();
    await router.isReady();
    isUserLoaded.value = true;
});

const isLayoutEnabled = computed(() => !route.meta.isLayoutDisabled);

// Initialize product list
useStore().dispatch("products/refetch");
</script>
