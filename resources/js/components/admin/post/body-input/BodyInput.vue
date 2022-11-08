<template>
    <div
        class="flex duration-100 shadow"
        @focusin="shouldDisableToolbar = false"
        @focusout="shouldDisableToolbar = true"
    >
        <BodyInputTools
            class="max-w-max min-w-max rounded-l-md"
            :is-disabled="shouldDisableToolbar"
            @image-inserted="insertImage"
        ></BodyInputTools>
        <BodyInputText
            ref="inputAreaComponent"
            class="flex-grow bg-slate-100 rounded-r-md"
            :class="{ 'border-red-600 ring-red-100': isInvalid }"
            @update="handleContentUpdate"
        ></BodyInputText>
    </div>
</template>

<script setup>
import { ref } from "vue";
import BodyInputTools from "./BodyInputTools.vue";
import BodyInputText from "./BodyInputText.vue";
import { nanoid } from "nanoid";

const emit = defineEmits(["update"]); // data: {content:string,images:File[]}

defineProps({
    isInvalid: { type: Boolean, default: false },
});

const inputAreaComponent = ref();

defineExpose({
    clear: () => inputAreaComponent.value.clear(),
});

// Set this to false if this component is "focused"
const shouldDisableToolbar = ref(true);

const postImages = ref([]); // {id:string,file:File}[]

// 1. Create an img element based on image param
// 2. Attach a nanoid to identify the img element uniquely
// 2. Insert the img into the input area and also record it in postImages
// image: {blob:File,src:string}
function insertImage(image) {
    // Dont use exec command for this
    if (inputAreaComponent.value) {
        const id = nanoid(); // random id
        const imageEl = document.createElement("img");
        imageEl.id = id;
        imageEl.src = image.src;
        postImages.value.push({ file: image.blob, id });
        inputAreaComponent.value.insertImage(imageEl);
    }
}

// val: {content:string, imgIds: string[]}
function handleContentUpdate(val) {
    // Filter off the images which were potentially removed by user action
    postImages.value = postImages.value.filter((img) =>
        val.imgIds.includes(img.id)
    );

    emit("update", {
        content: val.content,
        images: postImages.value.map((img) => img.file),
    });
}
</script>
