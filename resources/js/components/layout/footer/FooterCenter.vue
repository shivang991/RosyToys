<template>
    <div class="footer-center text-secondary">
        <img :src="logoURL" alt="Logo" />
        <div class="d-flex text-secondary mb-5 mt-3">
            <a href="" class="mx-3">
                <BIconLinkedin />
            </a>
            <a href="" class="mx-3">
                <BIconFacebook />
            </a>
            <a href="" class="mx-3">
                <BIconTwitter />
            </a>
            <a href="" class="mx-3">
                <BIconInstagram />
            </a>
        </div>
        <div class="py-4"></div>
        <p>© Refacciones Condor 2021</p>
    </div>
</template>

<script setup>
const logoURL = window.asset("images/logo.png");
</script>

<style lang="scss" scoped>
.footer-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: nth($blues, 3);

    img {
        transform: translateY(-12px);
    }
    a {
        color: $secondary;
        font-size: 1.5rem;
        display: block;
        padding: 0.5rem;
        transition: 0.2s;
        line-height: 1;
        &:hover {
            background-color: $secondary;
            color: $primary;
        }
    }
}
</style>
