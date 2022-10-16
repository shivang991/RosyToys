<template>
    <footer class="py-12 space-y-8">
        <div class="flex justify-center sm:justify-between w-3/4 mx-auto">
            <div class="w-80">
                <BaseImage src="logo.png" class="w-full block mb-4" />
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
            <ul class="space-y-4 hidden sm:block">
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
