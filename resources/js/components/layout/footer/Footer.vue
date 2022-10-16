<template>
    <FooterHome
        v-if="$route.name === 'Home'"
        :internal-links="internalLinks"
        :social-media-links="socialMediaLinks"
    ></FooterHome>
    <FooterRest
        v-else
        :social-media-links="socialMediaLinks"
        :internal-links="internalLinks"
    ></FooterRest>
</template>

<script setup>
import FooterHome from "./FooterHome.vue";
import FooterRest from "./FooterRest.vue";

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
</script>
