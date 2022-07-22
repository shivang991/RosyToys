<template>
    <footer class="footer-bar pt-5 px-md-5 bg-dark">
        <div
            class="mx-4 mx-sm-5 d-md-flex justify-content-between text-secondary"
        >
            <div class="footer-bar__text">
                <img :src="logoURL" class="mb-4" width="240" />
                <small class="d-block mb-2 alpha-75"
                    >Tempor incididunt ut labore dolore magna aliqua sed ipsum
                    envenia dolor sit consectetur adipisicing elit sed ao
                    dseiusmod exercitation ullamco laboris nisi aliquip maodo
                    consequat duis aute irure dolor in reprehenderit voluptate
                    velit sed ese.</small
                >
                <small class="d-block mb-4 alpha-75"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit
                    sed.</small
                >
                <ul class="d-flex list-inline alpha-75">
                    <li v-for="(link, index) in socialMediaLinks" :key="index">
                        <a
                            :href="link.href"
                            class="footer-bar__social-media-link btn btn-sm rounded-bottom-left me-1"
                        >
                            <component :is="link.icon"></component>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h5>Detalles de contacto</h5>
                <div class="footer-bar__decoration-bar mt-2">
                    <div class="bg-primary"></div>
                    <div class="bg-secondary"></div>
                </div>
                <div class="mt-4">
                    <h6>Sede:</h6>
                    <div class="small my-2 alpha-75">
                        <p class="mb-0">54 NewHill Station Ave CA</p>
                        <p class="mb-4">New york 33102 US</p>
                        <p>Phone: (007) 123 456 7890</p>
                        <p>Email: Inquiry@domain.com</p>
                        <p class="mt-5 d-flex flex-column">
                            <span> ¿Eres administrador? </span>
                            <router-link :to="{ name: 'AdminLogin' }">
                                Iniciar sesión como administrador
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="footer-bar__copyright mx-4 mx-sm-5 d-sm-flex justify-content-between text-secondary pt-4 mt-5"
        >
            <p>
                <span class="alpha-50">© 2021</span>
                <span>24/7 Condor Parts</span>
                <span class="alpha-50 ms-1">All rights reserved.</span>
            </p>
            <p class="mb-0 alpha-50">Terms of Use | Privacy Policy</p>
        </div>
    </footer>
</template>

<script setup>
const socialMediaLinks = [
    {
        href: "#",
        icon: "BIconTwitter",
    },
    {
        href: "#",
        icon: "BIconFacebook",
    },
    {
        href: "#",
        icon: "BIconLinkedin",
    },
    {
        href: "#",
        icon: "BIconInstagram",
    },
];

const logoURL = window.asset("images/logo_transparent.png");
</script>

<style lang="scss" scoped>
.footer-bar {
    &__decoration-bar {
        width: 2rem;
        height: 0.25rem;
        display: grid;
        column-gap: 0.25rem;
        grid-template-columns: repeat(2, minmax(0, 50%));
    }
    &__copyright {
        border-top: 1px solid rgba($secondary, 0.25);
    }
    &__social-media-link {
        background-color: $text;
        color: rgba($secondary, 0.5);
        &:hover {
            color: $secondary;
        }
    }
    &__text {
        margin-bottom: 4rem;
        @include media-query(md) {
            max-width: 40%;
            margin-bottom: 0;
        }
    }
}
</style>
