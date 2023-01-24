<template>
    <div>
        <div class="sm:py-8 sm:flex">
            <div class="sm:w-1/2">
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
                        Puede comunicarse con nosotros en cualquier momento a
                        través de
                    </span>
                    <a
                        href="mailto:jugueteria.rosy@gmail.com"
                        class="text-sky-600"
                    >
                        jugueteria.rosy@gmail.com
                    </a>
                </p>
                <ContactForm></ContactForm>
            </div>
        </div>
        <div class="max-w-4xl mx-8 py-8 lg:mx-auto">
            <p class="space-x-2 mb-4 text-2xl font-semibold">
                <span class="text-sky-600">Número telefónico: </span>
                <span>5572833923 , 5528496221, 5513718174</span>
            </p>
            <p class="space-x-2 mb-4">
                <span class="flex-grow w-24 text-sky-600"> Visítanos en: </span>
                <span>
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
</script>
