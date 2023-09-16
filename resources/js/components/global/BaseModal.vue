<template>
    <Teleport to="#app-modals">
        <Transition name="fade" @afterEnter="shouldShowContent = true">
            <div
                class="bg-gradient-to-b from-transparent to-sky-100 grid w-full justify-center z-10 absolute min-h-full pointer-events-auto"
                v-if="shouldShow"
            >
                <Transition name="modal" @afterLeave="emit('close')">
                    <div
                        v-if="shouldShowContent"
                        class="z-20 bg-white my-8 shadow-xl rounded-md overflow-hidden max-w-lg h-max"
                    >
                        <div class="flex justify-end">
                            <button
                                class="text-xl p-4"
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
import { ref } from "vue";

const props = defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["close"]);

const shouldShowContent = ref(false);
</script>
