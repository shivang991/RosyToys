<template>
    <div
        class="flex flex-grow focus-within:ring rounded-md overflow-hidden bg-gray-100"
    >
        <input
            type="text"
            class="flex-grow outline-none px-4 bg-transparent"
            placeholder="Búsqueda"
            @input="handleInput"
        />
        <p
            class="w-10 h-10 px-4 text-gray-600 disabled:opacity-50 text-sm grid place-content-center"
            :disabled="isLoading"
        >
            <span
                v-if="isLoading"
                class="block w-4 h-4 border-2 rounded-full border-gray-600 border-b-transparent animate-spin"
            ></span>
            <FontAwesomeIcon v-else icon="fa fa-search"></FontAwesomeIcon>
        </p>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const isLoading = computed(() => store.state.products.isLoading);

let throttleId = null;

function handleInput(event) {
    const inputValue = event.target.value;
    clearTimeout(throttleId);
    throttleId = setTimeout(
        () => {
            store.commit("products/SET_QUERY", inputValue);
            store.dispatch("products/refetch");
        },
        1000 // 1 sec
    );
}
</script>
