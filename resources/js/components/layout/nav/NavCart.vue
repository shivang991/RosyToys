<template>
    <div
        v-if="shouldShow && totalPrice > 0"
        class="px-8 md:px-20 py-2 justify-end flex items-center bg-gradient-to-r from-orange-600 to-pink-700 space-x-8"
    >
        <p class="text-slate-200">
            <span> Cart Total: </span>
            <span class="text-xl"> {{ formattedTotal }} </span>
        </p>
        <router-link :to="{ name: 'Cart' }" class="grid">
            <div
                class="col-start-1 row-start-1 bg-slate-900 bg-opacity-25 text-slate-200 font-semibold flex items-center rounded-md py-2 px-4 hover:underline"
            >
                <span class="hidden sm:block mr-2"> View </span>
                <FontAwesomeIcon icon="fa fa-cart-shopping"></FontAwesomeIcon>
            </div>
            <div
                v-if="shouldFlash"
                class="col-start-1 row-start-1 w-2 h-2 bg-amber-500 justify-self-end self-start rounded-full translate-x-1/4 -translate-y-1/4 animate-pulse"
            ></div>
        </router-link>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

const shouldFlash = ref(false);
const shouldShow = ref(true);

const totalPrice = computed(() => store.state.cart.totalPrice);

watch(totalPrice, (newPrice, oldPrice) => {
    if (newPrice > oldPrice) shouldFlash.value = true;
});

watch(
    () => route.name,
    (newRouteName) => {
        if (["Cart", "RequestCheckout", "Checkout"].includes(newRouteName)) {
            shouldFlash.value = false;
            shouldShow.value = false;
        } else shouldShow.value = true;
    }
);

const formattedTotal = computed(() =>
    new Intl.NumberFormat("es-mx", {
        style: "currency",
        currency: "USD",
    }).format(totalPrice.value)
);
</script>
