<template>
  <div
    class="flex-grow flex flex-col bg-slate-900"
  >
    <div class="grid grid-cols-2 p-2 gap-1">
      <button
        v-for="(tool, index) in simpleTools"
        :key="index"
        class="px-4 py-4 text-xl hove text-slate-200 rounded duration-100 hover:bg-sky-600 hover:text-slate-900"
        :class="{ 'pointer-events-none opacity-50': isDisabled }"
        type="button"
        @click="handleToolClick(tool)"
      >
        <component :is="tool.icon"></component>
      </button>
      <div
        class="col-span-2 my-4 mx-4 rounded overflow-hidden"
      >
        <button
          type="button"
          class="px-6 py-4 text-2xl hover:bg-sky-600 text-slate-200 w-full flex justify-center hover:text-slate-900"
          @click="fileInputEl && fileInputEl.click()"
        >
          <CameraImage></CameraImage>
          <input
            v-show="false"
            ref="fileInputEl"
            type="file"
            @change="handleFileInputChange"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// icon imports
import { CameraImage, FormatBold, FormatItalic } from "mdue";
import { FormatListBulleted, FormatListNumbered, FormatSize } from "mdue";
import { FormatHeader_2, FormatHeader_3, FormatHeader_1 } from "mdue";

const emit = defineEmits(["image-inserted"]) // data: {blob,src};

defineProps({
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

// These are the basic functionality tools that use the document.execCommand api
const simpleTools = [
  { icon: FormatBold, command: "bold" },
  { icon: FormatItalic, command: "italic" },
  { icon: FormatListBulleted, command: "insertUnorderedList" },
  { icon: FormatListNumbered, command: "insertOrderedList" },
  { icon: FormatHeader_1, command: "formatBlock", params: [false, "<h1>"] },
  { icon: FormatHeader_2, command: "formatBlock", params: [false, "<h2>"] },
  { icon: FormatHeader_3, command: "formatBlock", params: [false, "<h3>"] },
  { icon: FormatSize, command: "formatBlock", params: [false, "<p>"] },
];
function handleToolClick({ command, params }) {
  const args = params || [undefined, undefined];
  document.execCommand(command, ...args);
}

// Insert image tool implementation:

const fileInputEl = ref();

// If uploaded file is an image,
// prepare the src and emit to the parent component
function handleFileInputChange() {
  const file = fileInputEl.value?.files?.[0];
  if (file && file.type.startsWith("image")) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", () => {
      emit("image-inserted", {
        blob: file,
        src: reader.result,
      });
    });
  }
}
</script>
