<template>
    <div
        class="flex bg-slate-100 px-4 py-2 rounded-md focus-within:ring-2 ring-amber-500 w-60 items-center"
    >
        <input
            type="text"
            placeholder="Search"
            class="bg-transparent focus:outline-none flex-grow"
            @input.stop="handleInput"
        />
        <div
            v-show="isSearchLoading"
            class="w-4 h-4 border-2 border-b-transparent border-amber-500 rounded-full animate-spin"
        ></div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

let throttleId = null;

const router = useRouter();
const store = useStore();

const isSearchLoading = computed(() => store.state.products.isLoading);

function handleInput(event) {
    const inputValue = event.target.value;
    clearTimeout(throttleId);
    throttleId = setTimeout(
        () => {
            router.push({ name: "Productos" });
            store.commit("products/SET_QUERY", inputValue);
            store.dispatch("products/refetch");
        },
        1000 // 1 sec
    );
}
</script>
