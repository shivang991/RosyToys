<template>
    <div
        class="flex bg-sky-100 px-4 py-2 rounded-md focus-within:ring-2 ring-sky-600 items-center"
    >
        <input
            type="text"
            placeholder="Búsqueda"
            class="bg-transparent focus:outline-none flex-grow"
            @input.stop="handleInput"
        />
        <div
            v-show="isSearchLoading"
            class="w-4 h-4 border-2 border-b-transparent border-sky-600 rounded-full animate-spin"
        ></div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const props = defineProps({
    shouldRedirectOnSuccess: {
        type: Boolean,
        default: false,
    },
});

let throttleId = null;
const router = useRouter();
const store = useStore();
const isSearchLoading = computed(() => store.state.products.isLoading);
function handleInput(event) {
    const inputValue = event.target.value;
    clearTimeout(throttleId);
    throttleId = setTimeout(
        () => {
            if (props.shouldRedirectOnSuccess)
                router.push({ name: "Productos" });
            store.commit("products/SET_QUERY", inputValue);
            store.dispatch("products/refetch");
        },
        1000 // 1 sec
    );
}
</script>
