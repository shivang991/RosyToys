<template>
    <base-modal
        :should-show="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <div class="flex justify-center w-80" v-if="isLoading">
            <div
                class="w-8 h-8 border-4 border-sky-600 border-b-transparent rounded-full animate-spin"
            ></div>
        </div>
        <div class="p-4 max-w-lg text-slate-900" v-else>
            <h4 class="text-2xl mb-2 font-semibold">{{ msg.subject }}</h4>
            <p class="mb-4">{{ msg.message }}</p>
            <p class="flex items-center space-x-2">
                <span class="text-sm text-slate-500">Name:</span>
                <span>{{ msg.name }}</span>
            </p>
            <p class="flex items-center space-x-2">
                <span class="text-sm text-slate-500">Email:</span>
                <span>{{ msg.email }}</span>
            </p>
            <p class="flex items-center space-x-2">
                <span class="text-sm text-slate-500">Date:</span>
                <span>{{ msg.created_at }}</span>
            </p>
        </div>
    </base-modal>
</template>

<script setup>
import BaseModal from "@/components/global/BaseModal.vue";
import useAxios from "@/plugins/Axios";
import { ref, watch } from "vue";

const props = defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
    msgId: {
        type: Number,
        default: null,
    },
});
const emit = defineEmits(["update:shouldShow"]);

const isLoading = ref(true);

const axios = useAxios();
const msg = ref(null); // {id,created_at,order_items:[{id,quantity,product:{id,title,price}}]}
watch(
    () => props.shouldShow,
    (newVal) => {
        if (!props.msgId || props.msgId === msg.value?.id) return;
        if (newVal) {
            isLoading.value = true;
            axios.authGet(`/api/contact/${props.msgId}`).then((response) => {
                msg.value = response.data;
                isLoading.value = false;
            });
        }
    }
);
</script>
