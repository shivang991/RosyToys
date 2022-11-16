<template>
    <nav class="bg-gray-100">
        <div
            v-if="$route.name === 'Home'"
            class="flex justify-between w-3/4 mx-auto items-center py-8"
        >
            <div class="h-24">
                <BaseImage src="logo.png" class="h-full" />
            </div>
            <nav-links class="hidden md:grid" :links="links"></nav-links>
        </div>
        <div v-else>
            <div class="bg-blue-100 flex md:justify-center">
                <div class="h-12">
                    <BaseImage src="logo.png" class="h-full" />
                </div>
                <button
                    @click="shouldShowSideBar = !shouldShowSideBar"
                    class="md:hidden text-white text-xl ml-auto py-2 w-12 bg-blue-600"
                >
                    <FontAwesomeIcon
                        :icon="shouldShowSideBar ? 'fa-times' : 'fa-bars'"
                    ></FontAwesomeIcon>
                </button>
            </div>
            <nav-links class="hidden md:flex" :links="links"></nav-links>
            <NavCart></NavCart>
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
import NavLinks from "./NavLinks.vue";
import NavCart from "./NavCart.vue";
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
