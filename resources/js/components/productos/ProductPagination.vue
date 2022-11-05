<template>
    <BasePagination
        :pagination-data="paginationData"
        @refetch-requested="loadPageByURL"
    ></BasePagination>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import BasePagination from "../global/BasePagination.vue";

const store = useStore();
const paginationData = computed(() => store.state.products.pagination);

const loadPageByURL = (url) => {
    store.dispatch("products/refetch", url);
};
</script>
