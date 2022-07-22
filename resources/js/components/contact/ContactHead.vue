<template>
    <div
        class="head py-5 text-secondary"
        :style="{ backgroundImage: `url(${bgImgURL})` }"
    >
        <div class="pb-2 pt-5 mt-5 w-75 mx-auto">
            <h1>CONTACTO</h1>
            <p>¿Necesitas ayuda? Comuníquese con nosotros directamente.</p>
            <div class="decoration-two-boxes mt-4">
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script setup>
const bgImgURL = window.asset("images/contact.jpg");
</script>

<style scoped lang="scss">
.head {
    background-size: cover;
    width: 100%;
}
</style>
