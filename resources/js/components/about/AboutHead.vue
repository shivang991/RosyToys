<template>
    <div
        class="productos-head py-5 text-secondary"
        :style="{ backgroundImage: `url(${bgImgURL})` }"
    >
        <div class="pb-2 pt-5 mt-5 w-75 mx-auto">
            <h1>SOBRE NOSOTROS</h1>
            <p>Conozca más sobre el equipo.</p>
            <div class="decoration-two-boxes mt-4">
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script setup>
const bgImgURL = window.asset("images/about-bg.jpg");
</script>

<style scoped lang="scss">
.productos-head {
    background-size: cover;
    width: 100%;
}
</style>
