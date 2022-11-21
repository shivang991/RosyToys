<template>
    <div class="grid place-content-center py-2 bg-sky-600">
        <div
            class="flex space-x-8 row-start-1 col-start-1 self-center text-white"
        >
            <router-link
                v-for="(link, index) in links"
                :key="index"
                class="hover:underline text-lg"
                active-class="font-semibold"
                :to="{ name: link.route }"
                >{{ link.title }}</router-link
            >
        </div>
        <div class="row-start-1 col-start-1 justify-self-end">
            <input
                type="text"
                ref="searchInputEl"
                placeholder="Search"
                class="outline-primary bg-white shadow pl-4 py-2 translate-x-6 rounded-full transition-all duration-300"
                :class="shouldShowSearch ? 'w-60' : 'w-0'"
            />
            <button
                @click="toggleSearchBox"
                class="w-12 h-12 rounded-full relative hover:bg-white text-sky-600"
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
