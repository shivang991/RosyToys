<template>
    <form
        @submit.prevent="executeSearch"
        class="flex flex-grow focus-within:ring rounded-md overflow-hidden"
    >
        <input
            type="text"
            class="flex-grow bg-gray-100 outline-none px-4"
            placeholder="Búsqueda"
            v-model="searchQuery"
        />
        <button
            class="w-10 h-10 px-4 bg-sky-600 text-white disabled:opacity-50 text-sm grid place-content-center"
            :disabled="isLoading"
        >
            <span
                v-if="isLoading"
                class="block w-4 h-4 border-2 rounded-full border-white border-b-transparent animate-spin"
            ></span>
            <FontAwesomeIcon v-else icon="fa fa-search"></FontAwesomeIcon>
        </button>
    </form>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const searchQuery = ref("");
const isLoading = computed(() => store.state.products.isLoading);

function executeSearch() {
    store.commit("products/SET_QUERY", searchQuery.value);
    store.dispatch("products/refetch");
}
</script>
