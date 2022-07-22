<template>
    <nav
        class="d-none d-lg-grid w-75 mx-auto mt-2 nav-bar rounded-bottom-left overflow-hidden bg-white shadow"
    >
        <div class="nav-bar__logo py-1">
            <img :src="logoURL" />
        </div>
        <div
            class="px-3 small bg-dark text-sm text-secondary w-100 py-1 d-flex align-items-center justify-content-between rounded-bottom-left"
        >
            <p class="d-flex mb-0">
                <span class="me-2">Call: (007) 123 456 7890</span>
                <span>Email: inquiry@domain.com</span>
            </p>
            <p class="d-flex mb-0">
                <span class="nav-bar__social-media me-1 rounded-circle">
                    <a href="" class="text-secondary">
                        <BIconFacebook></BIconFacebook>
                    </a>
                </span>
                <span class="nav-bar__social-media me-1 rounded-circle">
                    <a href="" class="text-secondary">
                        <BIconGoogle></BIconGoogle>
                    </a>
                </span>
                <span class="nav-bar__social-media rounded-circle">
                    <a href="" class="text-secondary">
                        <BIconLinkedin></BIconLinkedin>
                    </a>
                </span>
            </p>
        </div>
        <nav-links
            :links="links"
            class="d-none d-lg-flex nav-bar__links"
        ></nav-links>
    </nav>
    <button
        class="d-lg-none btn btn-secondary btn-lg nav-toggler rounded-bottom-right ms-1 mt-1"
        @click="shouldShowSideBar = true"
    >
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

const shouldShowSideBar = ref(false)

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

const logoURL = window.asset("images/logo_rect.png");
</script>

<style lang="scss" scoped>
.nav-bar {
    z-index: 1;
    display: grid;
    grid-template-columns: 12rem auto;
    @include media-query(xl) {
        grid-template-columns: 14rem auto;
    }
    &__social-media {
        padding: 0.25rem 0.5rem;
        &:hover {
            background-color: $secondary;
            a {
                color: $text !important;
            }
        }
    }
    &__logo {
        grid-row: 1 / span 2;
        align-self: center;

        img {
            width: 8rem;
            margin: auto;
            display: block;
            @include media-query(xl) {
                width: 10rem;
            }
        }
    }
}
.nav-toggler {
    z-index: 1;
    max-width: max-content;
}
</style>
