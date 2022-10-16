<template>
    <div
        v-if="paginationData && paginationData.last_page !== 1"
        class="flex flex-col items-center"
    >
        <p>
            Mostrando <strong>{{ paginationData.per_page }}</strong> de
            <strong>{{ paginationData.total }}</strong> productos.
        </p>
        <div class="flex space-x-4 items-center text-slate-900">
            <button
                class="rotate-180 px-4 py-2 hover:bg-slate-200 rounded-md disabled:opacity-50"
                @click="loadPrevPage()"
                :disabled="paginationData.current_page === 1"
            >
                <FontAwesomeIcon icon="fa-chevron-right"></FontAwesomeIcon>
            </button>
            <div class="space-x-2">
                <button
                    v-for="link in paginationData.links.slice(1, -1)"
                    :key="link.url"
                    class="text-xl hover:underline"
                    :class="{ 'font-bold': link.active }"
                    :disabled="!link.url"
                    @click="loadPageByURL(link.url)"
                >
                    {{ link.label }}
                    {{
                        link.label === paginationData.last_page.toString() ||
                        !link.url
                            ? ""
                            : ","
                    }}
                </button>
            </div>
            <button
                :disabled="
                    paginationData.current_page === paginationData.last_page
                "
                class="px-4 py-2 hover:bg-slate-200 rounded-md disabled:opacity-50"
                @click="loadNextPage()"
            >
                <FontAwesomeIcon icon="fa-chevron-right"></FontAwesomeIcon>
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useStore } from "vuex";

const store = useStore();
const paginationData = computed(() => store.state.products.pagination);

const loadPageByURL = (url) => {
    store.dispatch("products/refetch", url);
};

function loadPrevPage() {
    const { url } = paginationData.value.links[0];
    loadPageByURL(url);
}
function loadNextPage() {
    const { url } = paginationData.value.links.slice(-1)[0];
    loadPageByURL(url);
}
</script>
