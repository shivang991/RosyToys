<template>
    <div
        class="grid rounded-md border-t border-b-2 px-4 py-1"
        :class="
            isInvalid
                ? 'border-red-600 bg-red-50'
                : 'border-amber-500 bg-slate-100'
        "
    >
        <component
            :is="inputTag"
            rows="5"
            class="row-start-1 col-start-1 bg-transparent focus:outline-none resize-none"
            :type="type"
            :minlength="min"
            :maxlength="max"
            :value="modelValue"
            @input="(ev) => $emit('update:modelValue', ev.target.value)"
            @focus="isInputFocused = true"
            @blur="isInputFocused = false"
        />
        <p
            :class="{
                'scale-75 -translate-y-6 -translate-x-2 opacity-100':
                    isInputFocused || modelValue.length,
            }"
            class="pointer-events-none origin-top-left col-start-1 row-start-1 duration-200 opacity-50"
        >
            {{ label }}
        </p>
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

const inputTag = props.isTextArea ? "textarea" : "input";

const isInputFocused = ref(false);
</script>
