<template>
    <footer class="px-8 md:px-12 bg-sky-900 py-12">
        <div
            class="w-3/4 mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between"
        >
            <div class="mb-8 sm:mb-0">
                <BaseImage src="logo.png" class="w-40"></BaseImage>
                <ul class="flex space-x-4 mt-4">
                    <li v-for="(link, index) in socialMediaLinks" :key="index">
                        <a
                            :href="link.href"
                            class="text-sky-900 w-8 h-8 bg-white rounded-full flex items-center justify-center"
                        >
                            <FontAwesomeIcon
                                :icon="link.icon"
                            ></FontAwesomeIcon>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h5 class="text-xl text-white font-semibold mb-4">
                    Get in touch
                </h5>
                <table class="text-white">
                    <tr>
                        <td>Phone</td>
                        <td class="pl-4 text-blue-100">022-20277564</td>
                    </tr>
                    <tr>
                        <td>Service Center</td>
                        <td class="pl-4 text-blue-100">0811-233-8899</td>
                    </tr>
                    <tr>
                        <td>Customer Service</td>
                        <td class="pl-4 text-blue-100">0811-235-9988</td>
                    </tr>
                </table>
            </div>
            <div class="sm:block hidden">
                <h4 class="text-xl font-semibold mb-4 text-slate-200">Menu</h4>
                <ul>
                    <li v-for="(link, index) in internalLinks" :key="index">
                        <router-link
                            :to="{ name: 'Home' }"
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
