<template>
    <div class="grid">
        <p class="text-sm mb-1">
            {{ label }}
        </p>
        <component
            :is="inputTagName"
            :placeholder="placeholder || label"
            rows="5"
            class="bg-transparent focus:outline-none resize-none rounded-md border px-4 py-1"
            :class="{ 'border-red-600 bg-red-50': isInvalid }"
            :type="type"
            :minlength="min"
            :maxlength="max"
            :value="modelValue"
            @input="(ev) => $emit('update:modelValue', ev.target.value)"
            @focus="isInputFocused = true"
            @blur="isInputFocused = false"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    modelValue: {
        type: String,
        default: "",
    },
    label: {
        type: String,
        default: "",
    },
    placeholder: {
        type: String,
        default: "",
    },
    isTextArea: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: "text",
    },
    min: {
        type: Number,
        default: null,
    },
    max: {
        type: Number,
        default: null,
    },
    isInvalid: {
        type: Boolean,
        default: false,
    },
});

defineEmits(["update:modelValue"]);

const isInputFocused = ref(false);
const inputTagName = props.isTextArea ? "textarea" : "input";
</script>
