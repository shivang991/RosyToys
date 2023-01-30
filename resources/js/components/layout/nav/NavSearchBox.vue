<template>
    <div class="flex">
        <input
            type="text"
            ref="searchInputEl"
            placeholder="Search"
            class="outline-primary bg-white shadow pl-4 py-2 translate-x-8 rounded-full transition-all duration-300 text-gray-600"
            :class="shouldShowSearch ? 'w-60' : 'w-0'"
            @input="handleInput"
        />
        <div class="grid w-12 h-12 rounded-full relative overflow-hidden">
            <div
                class="col-start-1 row-start-1 border-4 border-b-transparent animate-spin border-sky-600 rounded-full relative"
                v-show="isLoading"
            ></div>
            <button
                @click="toggleSearchBox"
                class="hover:bg-white text-sky-600 col-start-1 row-start-1"
                :class="shouldShowSearch ? 'bg-white' : 'bg-sky-100'"
            >
                <FontAwesomeIcon
                    :icon="shouldShowSearch ? 'fa-times' : 'fa-search'"
                ></FontAwesomeIcon>
            </button>
        </div>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

defineProps({
    links: {
        type: Array,
        default: () => [],
    },
});

const searchInputEl = ref(null);
const shouldShowSearch = ref(false);

function toggleSearchBox() {
    const newVal = !shouldShowSearch.value;
    shouldShowSearch.value = newVal;
    if (newVal && searchInputEl.value) searchInputEl.value.focus();
}

let throttleId = null;
const router = useRouter();
const store = useStore();
const isLoading = computed(() => store.state.products.isLoading);
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
