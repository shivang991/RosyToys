<template>
    <div v-if="modelValue && modelValue.last_page !== 1">
        <p>
            Mostrando <strong>{{ modelValue.per_page }}</strong> de
            <strong>{{ modelValue.total }}</strong> productos.
        </p>
        <div class="flex space-x-4 items-center text-slate-900">
            <button
                class="rotate-180 px-4 py-2 hover:bg-slate-200 rounded-md disabled:opacity-50"
                @click="loadPrevPage()"
                :disabled="modelValue.current_page === 1"
            >
                <FontAwesomeIcon icon="fa-chevron-right"></FontAwesomeIcon>
            </button>
            <div class="space-x-2">
                <button
                    v-for="link in modelValue.links.slice(1, -1)"
                    :key="link.url"
                    class="text-xl hover:underline"
                    :class="{ 'font-bold': link.active }"
                    :disabled="!link.url"
                    @click="loadPageByURL(link.url)"
                >
                    {{ link.label }}
                    {{
                        link.label === modelValue.last_page.toString() ||
                        !link.url
                            ? ""
                            : ","
                    }}
                </button>
            </div>
            <button
                :disabled="modelValue.current_page === modelValue.last_page"
                class="px-4 py-2 hover:bg-slate-200 rounded-md disabled:opacity-50"
                @click="loadNextPage()"
            >
                <FontAwesomeIcon icon="fa-chevron-right"></FontAwesomeIcon>
            </button>
        </div>
    </div>
</template>

<script setup>
import { useAxios } from "@/plugins/Axios";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps({
    modelValue: {
        type: Object,
        default: null,
    },
    queryParams: {
        type: Object,
        default: () => ({}),
    },
});

const emit = defineEmits(["update:modelValue"]);

const axios = useAxios();

async function loadPageByURL(url) {
    const { data } = await axios.get(url, {
        baseURL: null,
        params: props.queryParams,
    });
    console.log(data);
    emit("update:modelValue", data);
}

function loadPrevPage() {
    const { url } = props.modelValue.links[0];
    loadPageByURL(url);
}
function loadNextPage() {
    const { url } = props.modelValue.links.slice(-1)[0];
    loadPageByURL(url);
}
</script>
