<template>
    <div class="sm:py-12 sm:flex">
        <div class="sm:min-h-screen sm:w-1/2">
            <BaseImage
                src="contact.jpg"
                class="object-cover w-full h-40 sm:h-full"
            ></BaseImage>
        </div>
        <div class="sm:max-w-md py-8 sm:py-20 md:ml-20 px-8">
            <h2 class="text-4xl mb-4 font-semibold">
                Nos encanta saber de nuestros clientes
            </h2>
            <p class="mb-8">
                <span class="text-gray-600">
                    Puede comunicarse con nosotros en cualquier momento a través
                    de
                </span>
                <span class="text-sky-600"> sohan@gmail.com </span>
            </p>
            <ContactForm></ContactForm>
        </div>
    </div>
</template>

<script setup>
import ContactForm from "@/components/contact/ContactForm.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ContactMap from "@/components/contact/ContactMap.vue";
import TestimonialForm from "@/components/contact/TestimonialForm.vue";
import { ref } from "vue";
import BaseImage from "@/components/global/BaseImage.vue";

const contactInfo = [
    { icon: "fa-phone", text: "(406) 555-0120" },
    { icon: "fa-envelope", text: "contact@anonymoustoys.com.mx" },
    {
        icon: "fa-map-location",
        text: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    },
];

const shouldShowTestimonialForm = ref(false);
</script>
