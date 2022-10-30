<template>
    <div
        v-if="store.state.cart.totalPrice && $route.name !== 'Cart'"
        class="px-8 md:px-20 py-2 justify-end flex items-center bg-gradient-to-r from-orange-600 to-pink-700 space-x-8"
    >
        <p class="text-slate-200">
            <span> Cart Total: </span>
            <span class="text-xl"> {{ formattedTotal }} </span>
        </p>
        <router-link
            :to="{ name: 'Cart' }"
            class="rounded-md py-2 px-4 bg-slate-900 bg-opacity-25 text-slate-200 font-semibold flex items-center hover:underline"
        >
            <span class="hidden sm:block mr-2"> View </span>
            <FontAwesomeIcon icon="fa fa-cart-shopping"></FontAwesomeIcon>
        </router-link>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const formattedTotal = computed(() =>
    new Intl.NumberFormat("es-mx", {
        style: "currency",
        currency: "USD",
    }).format(store.state.cart.totalPrice)
);
</script>
