<template>
    <base-modal
        :should-show="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <div class="px-4 py-8 w-80" v-if="review && message">
            <p class="text-slate-900">{{ message }}</p>
            <button
                class="bg-sky-600 py-2 mt-8 text-white rounded-md w-full"
                :disabled="isLoading"
                type="button"
                @click="updateVerification"
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
    review: {
        type: Object,
        default: null,
    },
});
const emit = defineEmits(["update:shouldShow", "success"]);

const isLoading = ref(false);

const message = computed(() => {
    const isVerified = props.review?.is_verified;
    if (isVerified)
        return "Reject the review? This action will remove it from public showcase.";
    return "Accept the review? This action will add it to public showcase";
});

const axios = useAxios();

function updateVerification() {
    if (props.review && !isLoading.value) {
        isLoading.value = true;
        axios
            .authPost(`/api/review/update/${props.review.id}`)
            .then((response) => {
                isLoading.value = false;
                if (response.data.message === "success") emit("success");
            });
    }
}
</script>
