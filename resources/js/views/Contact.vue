<template>
    <div>
        <div class="mx-4 sm:mx-20 py-8 grid gap-8 sm:grid-cols-3">
            <div class="row-start-1 col-start-1">
                <BaseImage
                    src="contact.jpg"
                    class="object-cover w-full opacity-10 sm:opacity-100 rounded-md"
                    :style="{ height: `${contactFormHeight}px` }"
                ></BaseImage>
            </div>
            <div
                class="row-start-1 col-start-1 sm:col-start-2 sm:col-span-2 py-8 sm:py-20 px-8 relative h-max"
                ref="contactFormEl"
            >
                <h2 class="text-4xl mb-4 font-semibold">
                    Nos encanta saber de nuestros clientes
                </h2>
                <div class="hidden mb-8 sm:flex gap-2 flex-wrap">
                    <p class="py-2 px-4 rounded-md bg-sky-100 w-max text-sm">
                        <span>Nuestro correo electrónico:</span>
                        <a
                            href="mailto:jugueteria.rosy@gmail.com"
                            class="text-sky-600 hover:underline"
                        >
                            jugueteria.rosy@gmail.com
                        </a>
                    </p>
                    <h4 class="py-2 px-4 rounded-md bg-sky-100 w-max text-sm">
                        <span> Números telefónicos:</span>
                        <a
                            href="tel:(+52)-5572833923"
                            class="text-sky-600 hover:underline"
                        >
                            5572833923,
                        </a>
                        <a
                            href="tel:(+52)-5528496221"
                            class="text-sky-600 hover:underline"
                        >
                            5528496221,
                        </a>
                        <a
                            href="tel:(+52)-5513718174"
                            class="text-sky-600 hover:underline"
                        >
                            5513718174
                        </a>
                    </h4>
                </div>
                <p class="hidden sm:block text-gray-600 text-lg mb-4">
                    ..o dejar un mensaje directamente:
                </p>
                <ContactForm></ContactForm>
            </div>
        </div>
        <div class="mx-4 sm:mx-20 py-8">
            <p class="space-x-2 mb-4 text-center">
                <span class="font-semibold"> Visítanos en: </span>
                <span class="text-sky-600">
                    Sucursal uno Mercado del sonora pasillo 6 local 147 Bodega
                    Ubicada en Sur 105 No. 1522, C.P. 15900 Ciudad México
                </span>
            </p>
            <ContactMap></ContactMap>
        </div>
    </div>
</template>

<script setup>
import ContactForm from "@/components/contact/ContactForm.vue";
import ContactMap from "@/components/contact/ContactMap.vue";
import BaseImage from "@/components/global/BaseImage.vue";
import { watch, ref } from "vue";

const contactFormEl = ref(null);
const contactFormHeight = ref(0);

watch(contactFormEl, (newVal) => {
    const computeContactFormHeight = () => {
        const { height } = newVal.getBoundingClientRect();
        console.log(height);
        contactFormHeight.value = height;
    };
    computeContactFormHeight();
    window.addEventListener("resize", computeContactFormHeight);
    return () => window.removeEventListener("resize", computeContactFormHeight);
});
</script>
