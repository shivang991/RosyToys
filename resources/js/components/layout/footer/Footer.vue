<template>
    <footer class="py-12 space-y-8">
        <div class="flex justify-between w-3/4 mx-auto">
            <div class="w-80">
                <img :src="logoURL" class="w-full block mb-4" />
                <ul class="flex space-x-4 justify-center">
                    <li v-for="(link, index) in socialMediaLinks" :key="index">
                        <a :href="link.href" class="text-slate-900 text-2xl">
                            <FontAwesomeIcon
                                :icon="link.icon"
                            ></FontAwesomeIcon>
                        </a>
                    </li>
                </ul>
            </div>
            <ul class="space-y-4">
                <li v-for="(link, index) in internalLinks" :key="index">
                    <router-link
                        :to="{ name: link.route }"
                        class="text-xl text-slate-900 font-semibold"
                        >{{ link.title }}</router-link
                    >
                </li>
            </ul>
        </div>
        <p class="text-center text-slate-900">
            &copy; 2022 Annonymous Toys PVT LTD
        </p>
    </footer>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const socialMediaLinks = [
    {
        href: "#",
        icon: "fa-brands fa-instagram",
    },
    {
        href: "#",
        icon: "fa-brands fa-twitter",
    },
    {
        href: "#",
        icon: "fa-brands fa-facebook",
    },
    {
        href: "#",
        icon: "fa-brands fa-youtube",
    },
];

const internalLinks = [
    { route: "Home", title: "New Releases" },
    { route: "Home", title: "Brands" },
    { route: "Home", title: "Gaming" },
    { route: "Home", title: "Choice" },
    { route: "Home", title: "Deals" },
];

const logoURL = window.asset("images/logo.png");
</script>
