<template>
    <transition name="fade">
        <img
            :src="processedSrc ?? '/images/noimage.svg'"
            :alt="alt"
            v-show="isLoaded"
            @load="isLoaded = true"
        />
    </transition>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
    isExternal: {
        type: Boolean,
        default: false,
    },
    src: { type: String },
    alt: {
        type: String,
        default: "",
    },
});

const processedSrc = computed(() =>
    props.isExternal ? props.src : window.asset(`images/${props.src}`)
);

const isLoaded = ref(false);
</script>
