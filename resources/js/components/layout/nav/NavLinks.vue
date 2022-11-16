<template>
    <div class="grid">
        <div
            class="flex space-x-8 row-start-1 col-start-1 self-center text-gray-600"
        >
            <router-link
                v-for="(link, index) in links"
                :key="index"
                class="hover:underline text-lg"
                active-class="text-sky-600"
                :to="{ name: link.route }"
                >{{ link.title }}</router-link
            >
            <div class="w-10"></div>
        </div>
        <div class="row-start-1 col-start-1 justify-self-end">
            <input
                type="text"
                ref="searchInputEl"
                placeholder="Search"
                autofocus
                class="outline-primary bg-white shadow pl-4 py-2 translate-x-6 rounded-full transition-all duration-300"
                :class="shouldShowSearch ? 'w-60' : 'w-0'"
            />
            <button
                @click="toggleSearchBox"
                class="w-12 h-12 rounded-full relative hover:bg-white text-gray-600"
                :class="shouldShowSearch ? 'bg-white' : 'bg-gray-100'"
            >
                <FontAwesomeIcon
                    :icon="shouldShowSearch ? 'fa-times' : 'fa-search'"
                ></FontAwesomeIcon>
            </button>
        </div>
        <button
            class="col-start-2 w-12 h-12 bg-primary rounded-full text-gray-600 ml-2"
        >
            <FontAwesomeIcon icon="fa-cart-shopping"></FontAwesomeIcon>
        </button>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "vue";

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
</script>
