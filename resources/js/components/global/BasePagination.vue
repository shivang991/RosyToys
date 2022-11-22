<template>
    <div
        v-if="paginationData && paginationData.last_page !== 1"
        class="flex flex-col items-center"
    >
        <p>
            Mostrando <strong>{{ paginationData.per_page }}</strong> de
            <strong>{{ paginationData.total }}</strong> elementos.
        </p>
        <div class="flex space-x-4 items-center">
            <button
                class="rotate-180 px-4 py-2 hover:bg-gray-100 rounded-md disabled:opacity-50"
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
                class="px-4 py-2 hover:bg-gray-100 rounded-md disabled:opacity-50"
                @click="loadNextPage()"
            >
                <FontAwesomeIcon icon="fa-chevron-right"></FontAwesomeIcon>
            </button>
        </div>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps({
    paginationData: {
        type: Object,
        default: null,
    },
});

const emit = defineEmits(["refetch-requested"]);

const loadPageByURL = (url) => {
    emit("refetch-requested", url);
};

function loadPrevPage() {
    const { url } = props.paginationData.links[0];
    loadPageByURL(url);
}
function loadNextPage() {
    const { url } = props.paginationData.links.slice(-1)[0];
    loadPageByURL(url);
}
</script>
