<template>
    <div>
        <contact-head></contact-head>
        <div class="contact-page d-flex justify-content-between mx-auto my-5 w-75">
            <div class=" w-75 me-5">
                <p class="mb-5 fs-4">Use el siguiente formulario para enviarnos un mensaje directamente:</p>
                <contact-form ></contact-form>
            </div>
            <div class="contact-page__side d-none d-sm-flex">
                <div class="contact-page__ribbon"></div>
                <a href="#" class="fs-4 text mt-1">
                    <BIconFacebook />
                </a>
                <a href="#" class="fs-4 text mt-1">
                    <BIconLinkedin />
                </a>
                <a href="#" class="fs-4 text mt-1">
                    <BIconInstagram />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import ContactHead from "@/components/contact/ContactHead.vue";
import ContactForm from "@/components/contact/ContactForm.vue";
</script>

<style scoped lang="scss">
.contact-page {
    &__side {
        flex-direction: column;
        align-items: center;
        a {
            color: $text;
        }
    }
    &__ribbon {
        flex-grow: 1;
        width: 0.5rem;
        background-color: $text;
    }
}
</style>
