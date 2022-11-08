<template>
    <div
        ref="inputAreaEl"
        contenteditable
        class="input-area px-4 py-2 outline-none overflow-y-auto focus:ring ring-amber-500"
        @blur="updateMarkdown"
        @input="handleInput"
    ></div>
</template>

<script setup>
import { ref } from "vue";
import TurndownService from "turndown";

const emit = defineEmits(["update"]); // data: {imgIds,content}

// didContentChange variable allows us to update the md (which happens on blur event)
// only when there is a real change
// Its just a simulation of the "change" event for a contenteditable div
let didContentChange = false;

// Set it (didContentChange) to true in following two cases:
// 1. User inputs some text or formats it
// 2. User inserts an image
const handleInput = () => (didContentChange = true);
function insertImage(imgEl) {
    if (inputAreaEl.value) {
        didContentChange = true;
        inputAreaEl.value.appendChild(imgEl);
        updateMarkdown();
    }
}
function clear() {
    if (inputAreaEl.value) {
        inputAreaEl.value.innerHTML = "";
        emit("update", {
            content: "",
            imgIds: [],
        });
    }
}

// The parent component is responsible for calling inserImage (refer to BodyInput.vue)
defineExpose({ insertImage, clear });

const inputAreaEl = ref();

function updateMarkdown() {
    if (didContentChange) {
        didContentChange = false;
        if (inputAreaEl.value) {
            const service = new TurndownService({
                emDelimiter: "_",
                linkStyle: "inlined",
                headingStyle: "atx",
            });

            let currentImgIndex = -1;
            service.addRule("", {
                filter: "img",
                replacement: function () {
                    currentImgIndex++;
                    return `![]($image_${currentImgIndex})`;
                },
            });
            const imgEls = Array.from(
                inputAreaEl.value.getElementsByTagName("img")
            );

            emit("update", {
                content: service.turndown(inputAreaEl.value),
                imgIds: imgEls.map((i) => i.id),
            });
        }
    }
}
</script>

<style scoped>
.input-area:deep(h1) {
    @apply text-4xl font-bold text-slate-500 mb-4;
}
.input-area:deep(h2) {
    @apply text-3xl font-bold text-slate-500 mb-2;
}
.input-area:deep(h3) {
    @apply text-2xl font-bold text-slate-500 mb-2;
}
.input-area:deep(strong) {
    @apply font-bold text-slate-500;
}
.input-area:deep(blockquote) {
    @apply bg-slate-200 text-slate-500 p-1 pl-2 border-l-4;
}
.input-area:deep(ol) {
    @apply list-decimal list-inside;
}
.input-area:deep(ul) {
    @apply list-disc list-inside;
}
.input-area:deep(img) {
    @apply block max-w-full rounded;
}
</style>
