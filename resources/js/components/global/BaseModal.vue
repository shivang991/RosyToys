<template>
    <Teleport to="#app-modals">
        <Transition name="modal" @afterEnter="shouldShowContent = true">
            <div
                class="bg-slate-100 z-20 bg-opacity-50 grid"
                :style="{ height: `${bgHeight}px` }"
                v-if="shouldShow"
            >
                <Transition name="modal" @afterLeave="emit('close')">
                    <div
                        v-if="shouldShowContent"
                        class="bg-white mx-auto my-8 shadow-xl rounded-md overflow-hidden max-w-lg h-max"
                    >
                        <div class="flex justify-end">
                            <button
                                class="text-xl text-slate-900 p-4"
                                @click="shouldShowContent = false"
                            >
                                <FontAwesomeIcon
                                    icon="fa fa-times"
                                ></FontAwesomeIcon>
                            </button>
                        </div>
                        <slot></slot>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, watch } from "vue";

const props = defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["close"]);

const shouldShowContent = ref(false);

const bgHeight = ref(0);

watch(
    () => props.shouldShow,
    (newVal) => {
        if (newVal) bgHeight.value = document.body.scrollHeight;
    }
);
</script>
