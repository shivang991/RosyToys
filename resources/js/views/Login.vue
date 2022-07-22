<template>
    <div class="login-view">
        <login-form></login-form>
        <img
            :src="bgImgURL"
            class="d-none d-md-block"
        />
    </div>
</template>

<script setup>
import LoginForm from "@/components/login/LoginForm.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

// redirect if user is already authenticated
const { state } = useStore();
if (state.auth.profile) useRouter().push({ name: "Productos" });

const bgImgURL = window.asset("images/login-background.png");
</script>

<style lang="scss" scoped>
.login-view {
    height: 100vh;
    display: flex;
    img {
        width: 14rem;
        max-height: 100vh;
    }
    @include media-query(md) {
        border-left: 0.5rem solid $primary;
    }
}
</style>
