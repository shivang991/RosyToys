<template>
    <nav class="bg-gray-100">
        <div class="bg-primary flex md:justify-center">
            <div class="h-40 py-2">
                <BaseImage src="logo.png" class="h-full" />
            </div>
            <button
                @click="shouldShowSideBar = !shouldShowSideBar"
                class="md:hidden text-white text-xl ml-auto py-2 w-12 bg-sky-600"
            >
                <FontAwesomeIcon
                    :icon="shouldShowSideBar ? 'fa-times' : 'fa-bars'"
                ></FontAwesomeIcon>
            </button>
        </div>
        <div
            class="py-2 bg-sky-600 justify-center items-center space-x-8 text-white hidden md:flex"
        >
            <router-link
                v-for="(link, index) in links"
                :key="index"
                class="hover:underline text-lg"
                active-class="font-semibold"
                :to="{ name: link.route }"
                >{{ link.title }}</router-link
            >
            <nav-search-box :links="links"></nav-search-box>
        </div>
    </nav>

    <nav-mobile
        v-model:shouldShow="shouldShowSideBar"
        :links="links"
    ></nav-mobile>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import NavSearchBox from "./NavSearchBox.vue";
import NavMobile from "./NavMobile.vue";
import BaseImage from "@/components/global/BaseImage.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const shouldShowSideBar = ref(false);

const { getters } = useStore();
const links = ref([
    { route: "Home", title: "Inicio" },
    { route: "About", title: "Acerca de" },
    { route: "Productos", title: "Productos" },
    { route: "Contacto", title: "Contacto" },
]);

// add or remove admin link from navbar when login or logout
const isAdmin = computed(() => getters["auth/isLoggedIn"]);
const adminLink = { route: "AdminDashboard", title: "Admin" };
if (isAdmin.value) links.value.push(adminLink);
watch(isAdmin, (newVal) => {
    if (newVal) {
        links.value.push(adminLink);
    } else {
        links.value = links.value.filter(
            (link) => link.route !== adminLink.route
        );
    }
});
</script>
