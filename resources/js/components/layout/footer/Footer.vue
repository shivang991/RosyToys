<template>
    <footer class="px-4 md:px-12 bg-sky-900 py-12">
        <div
            class="w-11/12 md:w-3/4 mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between"
        >
            <div class="mb-12 sm:mb-0">
                <BaseImage src="logo.png" class="h-24"></BaseImage>
                <RouterLink
                    class="text-white mt-2 mb-4"
                    :to="{ name: 'AdminLogin' }"
                    >Entrar en el panel de administración</RouterLink
                >
                <ul class="flex space-x-4 mt-4">
                    <li v-for="(link, index) in socialMediaLinks" :key="index">
                        <a
                            :href="link.href"
                            class="text-sky-900 w-8 h-8 bg-white rounded-full flex items-center justify-center"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                :icon="link.icon"
                            ></FontAwesomeIcon>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h5 class="text-xl text-white font-semibold mb-2">
                    Ponerse en contacto
                </h5>
                <div
                    class="text-sky-100 tracking-widest text-lg flex flex-col"
                >
                    <a href="tel:(+52)-5572833923" class="hover:underline">
                        5572833923
                    </a>
                    <a href="tel:(+52)-5528496221" class="hover:underline">
                        5528496221
                    </a>
                    <a href="tel:(+52)-5513718174" class="hover:underline">
                        5513718174
                    </a>
                </div>
            </div>
            <div class="sm:block hidden">
                <h4 class="text-xl font-semibold mb-4 text-slate-200">Menu</h4>
                <ul>
                    <li v-for="(link, index) in internalLinks" :key="index">
                        <router-link
                            :to="{ name: link.route }"
                            class="text-slate-200"
                            >{{ link.title }}</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BaseImage from "@/components/global/BaseImage.vue";

const socialMediaLinks = [
    {
        href: "https://wa.me/send?phone=5215572833923",
        icon: "fa-brands fa-whatsapp",
    },
    {
        href: "https://www.instagram.com/jugueteria.rosy/",
        icon: "fa-brands fa-instagram",
    },
    {
        href: "https://www.facebook.com/profile.php?id=100088553618713",
        icon: "fa-brands fa-facebook",
    },
];

const internalLinks = [
    { route: "Home", title: "Inicio" },
    { route: "About", title: "Acerca de" },
    { route: "Productos", title: "Productos" },
    { route: "Contacto", title: "Contacto" },
];
</script>
