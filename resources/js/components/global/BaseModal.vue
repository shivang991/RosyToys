<template>
    <teleport to="#app-modals">
        <transition name="scale-y">
            <div
                class="p-2 mt-2 fixed-top w-fit mx-auto bg-secondary shadow-lg border"
                v-if="modelValue"
            >
                <div class="d-flex justify-content-end">
                    <button
                        class="btn btn-close text-secondary"
                        @click.stop="$emit('update:modelValue', false)"
                    ></button>
                </div>
                <div class="v-modal__content">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script setup>
import { watch } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    duration: {
        type: Number,
        default: null,
    },
});

if (props.duration) {
    watch(
        () => props.modelValue,
        (newVal) => {
            if (newVal) {
                window.setTimeout(
                    () => emit("update:modelValue", false),
                    props.duration
                );
            }
        },
    );
}
</script>
