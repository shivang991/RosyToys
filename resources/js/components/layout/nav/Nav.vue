<template>
    <nav class="bg-gray-100">
        <div class="bg-primary flex md:justify-center">
            <div class="h-16 py-2">
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
        <!-- <div v-else>

            <NavCart></NavCart>
        </div> -->
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
