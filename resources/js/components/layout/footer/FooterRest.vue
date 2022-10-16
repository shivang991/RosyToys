<template>
    <footer class="px-8 md:px-20 bg-slate-900">
        <div class="flex flex-col sm:flex-row items-center sm:items-start justify-between py-12">
            <div class="mb-8 sm:mb-0">
                <BaseImage src="logo.png" class="w-40"></BaseImage>
                <p class="text-slate-200 mt-4 text-center sm:text-left">Terms & Conditions</p>
                <p class="text-slate-200 text-center sm:text-left">Privacy Policies</p>
            </div>
            <div class="sm:block hidden">
                <h4 class="text-xl font-semibold mb-4 text-slate-200">
                    Useful links
                </h4>
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
            <div>
                <h4 class="text-xl text-slate-200 font-semibold mb-4">
                    Connect With Us
                </h4>
                <ul class="flex space-x-4">
                    <li v-for="(link, index) in socialMediaLinks" :key="index">
                        <a :href="link.href" class="text-slate-200 text-2xl">
                            <FontAwesomeIcon
                                :icon="link.icon"
                            ></FontAwesomeIcon>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <p class="text-center text-slate-200 py-2">
            &copy; 2022 Annonymous Toys PVT LTD
        </p>
    </footer>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BaseImage from "@/components/global/BaseImage.vue";

const props = defineProps({
    internalLinks: {
        type: Array,
        required: true,
    },
    socialMediaLinks: {
        type: Array,
        required: true,
    },
});
</script>
