<template>
    <div class="py-8 px-4 flex flex-col items-center bg-white mt-8">
        <p class="text-4xl text-slate-500 mb-4">
            <FontAwesomeIcon
                icon="fa fa-exclamation-triangle"
            ></FontAwesomeIcon>
        </p>
        <h1 class="mb-2 text-2xl font-bold text-center text-slate-900">
            Page Under Development
        </h1>
        <button class="text-sky-600 hover:underline" @click="router.back()">
            Go back
        </button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const router = useRouter();
</script>
