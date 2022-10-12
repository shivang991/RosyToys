<template>
    <nav class="bg-slate-900">
        <div class="w-3/4 flex justify-between items-center py-8 mx-auto">
            <div class="w-40">
                <img :src="logoURL" class="w-full" />
            </div>
            <nav-links class="hidden sm:flex" :links="links"></nav-links>
        </div>
    </nav>
    <button @click="shouldShowSideBar = true" class="sm:hidden">
        <BIconList></BIconList>
    </button>
    <transition name="slide-x">
        <nav-side-bar
            v-if="shouldShowSideBar"
            :mobileOnlyLinks="links"
            @close="shouldShowSideBar = false"
        ></nav-side-bar>
    </transition>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import NavLinks from "./NavLinks.vue";
import NavSideBar from "./NavSideBar.vue";

const shouldShowSideBar = ref(false);

const { getters } = useStore();
const links = ref([
    { route: "Home", title: "Inicio" },
    { route: "About", title: "Acerca de" },
    { route: "Productos", title: "Productos" },
    { route: "Manuals", title: "Literatura" },
    { route: "Contacto", title: "Contacto" },
]);

// add or remove admin link from navbar when login or logout
const isAdmin = computed(() => getters["auth/isAdmin"]);
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

const logoURL = window.asset("images/logo.png");
</script>
