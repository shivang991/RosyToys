<template>
    <div class="py-12">
        <h2 class="max-w-xs text-2xl text-center mx-auto font-semibold mb-12">
            We Love to Hear from you, Get in Touch With Us &#x1F44B;
        </h2>
        <div
            class="flex flex-col-reverse sm:grid grid-cols-2 mx-auto gap-x-8 w-11/12 md:w-3/4 mb-12"
        >
            <div
                class="grid overflow-hidden rounded-xl mt-8 sm:mt-0 bg-amber-500"
            >
                <div
                    class="p-8 text-white row-start-1 col-start-1 min-w-0 z-10"
                >
                    <h4 class="text-2xl mb-8 font-semibold">
                        Contact Information
                    </h4>
                    <p class="mb-12">
                        Fill up the form and our team will get back to you
                        within 24Hrs
                    </p>
                    <ul class="space-y-4">
                        <li
                            class="flex items-center space-x-4"
                            v-for="(item, index) in contactInfo"
                            :key="index"
                        >
                            <FontAwesomeIcon
                                :icon="item.icon"
                                class="text-slate-600"
                            ></FontAwesomeIcon>
                            <p class="max-w-xs leading-none truncate">
                                {{ item.text }}
                            </p>
                        </li>
                    </ul>
                </div>
                <div
                    class="row-start-1 col-start-1 bg-slate-600 w-40 h-40 rounded-full self-end justify-self-end translate-x-1/4 translate-y-1/4"
                ></div>
            </div>
            <contact-form></contact-form>
        </div>
        <contact-map></contact-map>
    </div>
</template>

<script setup>
import ContactForm from "@/components/contact/ContactForm.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ContactMap from "@/components/contact/ContactMap.vue";

const contactInfo = [
    { icon: "fa-phone", text: "(406) 555-0120" },
    { icon: "fa-envelope", text: "contact@anonymoustoys.com.mx" },
    {
        icon: "fa-map-location",
        text: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    },
];
</script>
