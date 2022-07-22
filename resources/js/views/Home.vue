<template>
    <div class="home-pg">
        <div
            class="home-pg__hero min-vh-100"
            :style="{ backgroundImage: `url(${bgImgURL})` }"
        >
            <div class="w-75 mx-auto text-secondary mt-5">
                <h1 class="fw-bolder">Calidad a tu disposición</h1>
                <h2 class="fw-bolder">Tu mejor opcion en refacciones</h2>
                <div class="decoration-two-boxes my-4"><span /><span /></div>
                <router-link :to="{ name: 'Productos' }" class="icon-btn mt-5">
                    <span class="icon-btn__text">Nuestros Productos</span>
                    <span class="icon-btn__icon">
                        <span class="d-block home-pg__decoration-box"></span>
                    </span>
                </router-link>
            </div>
        </div>
        <HomeOverviewSection></HomeOverviewSection>
        <div class="my-5 py-5">
            <HomeLogoSection></HomeLogoSection>
            <HomeFeaturesSection></HomeFeaturesSection>
            <div class="text-center pt-5">
                <p>Llámanos ahora</p>
                <h2>
                    <span>
                        <BIconTelephone></BIconTelephone>
                    </span>
                    <span class="text-primary">(007) 123 456 7890</span>
                </h2>
                <h5 class="fw-normal">
                    Nosotros estamos abiertos 24/7 para asistencia.
                </h5>
                <div class="d-none d-md-flex w-50 mx-auto flip-y mt-4">
                    <img :src="arrowImgURL" class="img-fluid w-25" />
                    <div class="flex-grow-1"></div>
                    <img :src="arrowImgURL" class="img-fluid w-25 flip-x" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import HomeFeaturesSection from "@/components/home/HomeFeaturesSection.vue";
import HomeLogoSection from "@/components/home/HomeLogoSection.vue";
import HomeOverviewSection from "@/components/home/HomeOverviewSection.vue";

const arrowImgURL = window.asset("images/arrow.svg");
const bgImgURL = window.asset("images/image_bg.jpg");
</script>
<style lang="scss">
.home-pg {
    &__hero {
        background-size: cover;
        display: flex;
        align-items: center;
    }
    &__decoration-balls {
        display: grid;
        grid-template-columns: repeat(2, 0.5rem);
        grid-template-rows: 0.5rem;
        column-gap: 0.25rem;
    }
    &__decoration-bar {
        background-color: $primary;
        height: 0.5rem;
        width: 4rem;
        @include media-query(md) {
            margin: auto;
        }
    }
    &__decoration-box {
        background-color: $secondary;
        width: 0.5rem;
        height: 0.5rem;
    }
}
</style>
