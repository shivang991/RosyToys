<template>
    <base-modal
        :should-show="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <div class="px-4 py-8 w-80" v-if="order && nextStatus">
            <p class="text-slate-500 mb-2">
                Update order status to "{{ nextStatus.value }}"?
            </p>
            <p class="text-slate-900">{{ nextStatus.message }}</p>
            <button
                class="bg-sky-600 py-2 mt-8 text-white rounded-md w-full"
                :disabled="isLoading"
                type="button"
                @click="updateStatus"
            >
                <span
                    class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                    v-if="isLoading"
                >
                </span>
                <span v-else> Confirm </span>
            </button>
        </div>
    </base-modal>
</template>

<script setup>
import BaseModal from "@/components/global/BaseModal.vue";
import useAxios from "@/plugins/Axios";
import { ref, computed } from "vue";

const props = defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
    order: {
        type: Object,
        default: null,
    },
});
const emit = defineEmits(["update:shouldShow", "success"]);

const isLoading = ref(false);

const nextStatus = computed(() => {
    const currentStatus = props.order?.status;
    switch (currentStatus) {
        case "paid":
            return {
                value: "shipped",
                message:
                    "This action will notify the user that their order has been shipped.",
            };
        case "shipped":
            return {
                value: "delivered",
                message:
                    "Confirm that order is delivered. This action will delete the order from database.",
            };

        default:
            return null;
    }
});

const axios = useAxios();

function updateStatus() {
    if (props.order && !isLoading.value) {
        isLoading.value = true;
        axios
            .authPost(`/api/order/update/${props.order.id}`)
            .then((response) => {
                isLoading.value = false;
                if (response.data.message === "success") emit("success");
            });
    }
}
</script>
