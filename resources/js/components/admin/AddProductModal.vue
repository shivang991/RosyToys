<template>
    <base-modal
        :should-show="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <div class="px-4 pb-8">
            <div class="space-y-8">
                <BaseImageInput
                    class="w-full h-40 object-cover"
                    label="Product Image"
                ></BaseImageInput>
                <div class="flex space-x-4 items-center">
                    <BaseTextField
                        class="flex-grow"
                        label="Product Name"
                    ></BaseTextField>
                    <div class="flex space-x-2">
                        <input type="checkbox" class="accent-amber-500" />
                        <label>Is Available</label>
                    </div>
                </div>
                <BaseTextField label="Description" is-text-area></BaseTextField>
                <div class="flex space-x-4">
                    <BaseTextField label="Price"></BaseTextField>
                    <BaseTextField label="Brand"></BaseTextField>
                </div>
            </div>
            <button class="bg-amber-500 py-2 mt-8 text-white rounded-md w-full">
                Create
            </button>
        </div>
    </base-modal>
</template>

<script setup>
import BaseTextField from "@/components/global/BaseTextField.vue";
import BaseImageInput from "@/components/global/BaseImageInput.vue";
import BaseModal from "../global/BaseModal.vue";

defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["update:shouldShow"]);
</script>
