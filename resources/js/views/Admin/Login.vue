<template>
    <div class="d-flex w-100">
        <div class="min-vh-100 px-sm-2 bg-primary"></div>
        <div class="admin-login__form">
            <login-form></login-form>
        </div>
        <img
            :src="hammerImg"
            class="admin-login__image align-self-end d-none d-md-inline"
        />
    </div>
</template>

<script setup>
import LoginForm from "@/components/admin/LoginForm.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const hammerImg = window.asset("images/hammer.png");

const store = useStore();
const router = useRouter();
if (store.getters["auth/isAdmin"]) {
    router.push({ name: "AdminDashboard" });
}
</script>


<style lang="scss" scoped>
.admin-login {
    &__image {
        height: 100vh;
        max-width: 100px;
        @include media-query(lg) {
            max-width: 300px;
        }
    }

    &__form {
        flex-grow: 1;
        align-self: center;
    }
}
</style>
