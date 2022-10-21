<template>
    <base-modal
        :shouldShow="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <div class="px-4 pb-8 max-w-xs">
            <div class="text-slate-900 mb-8 text-center">
                <p> Are you sure you want to delete the product: </p>
                <p class="font-semibold"> "{{ productTitle }}" ?</p>
            </div>
            <button class="py-2 w-full bg-amber-500 rounded-md text-white">
                Yes
            </button>
        </div>
    </base-modal>
</template>

<script setup>
import BaseModal from "@/components/global/BaseModal.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const props = defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
    productId: {
        type: Number,
        default: null,
    },
});

const emit = defineEmits(["update:shouldShow"]);

const store = useStore();

const productTitle = computed(
    () =>
        store.state.products.data?.find((p) => p.id === props.productId)
            ?.title ?? ""
);
</script>
