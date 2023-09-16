<template>
    <div>
        <label
            class="text-sm mb-1 block"
            :class="{ 'text-red-600': isInvalid }"
        >
            {{ label }}
        </label>
        <input
            type="file"
            multiple
            v-show="false"
            ref="imgInputEl"
            accept="image/*"
            @change="handleImgInputChange"
        />
        <div class="grid grid-cols-3 gap-2">
            <div class="grid" v-for="(src, i) in imgSrcs" :key="i">
                <img
                    :src="src"
                    class="w-full h-32 rounded shadow object-cover col-start-1 row-start-1"
                />
                <div
                    class="flex space-x-2 col-start-1 row-start-1 self-start justify-self-end p-2"
                >
                    <button
                        type="button"
                        class="bg-sky-600 text-white w-8 h-8 rounded-full grid place-content-center"
                        @click="replaceImage(i)"
                    >
                        <FontAwesomeIcon size="xs" icon="upload" />
                    </button>
                    <button
                        type="button"
                        class="bg-sky-600 text-white w-8 h-8 rounded-full grid place-content-center"
                        @click="removeImage(i)"
                    >
                        <FontAwesomeIcon size="xs" icon="times" />
                    </button>
                </div>
            </div>
            <button
                class="p-4 bg-gray-100 rounded-md shadow"
                type="button"
                @click="replaceImage()"
            >
                <FontAwesomeIcon
                    icon="plus"
                    class="text-sky-600 mb-2"
                    :class="{ 'text-red-600': isInvalid }"
                    size="lg"
                />
                <p class="text-gray-600 text-sm">
                    Agregar imagen (se permiten varias)
                </p>
            </button>
        </div>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "vue";

const props = defineProps({
    label: { type: String },
    isInvalid: { type: Boolean, default: false },
    modelValue: {
        type: Array,
        default: () => [],
    },
    initialSrcs: {
        type: Array,
        default: () => [],
    },
});

const emit = defineEmits(["update:modelValue"]);

/**
 * @type {import('vue').Ref<HTMLInputElement>}
 */
const imgInputEl = ref(null);

/**
 * @type {import('vue').Ref<string[]>}
 */
const imgSrcs = ref(props.initialSrcs);

/**
 * @param {File} file
 * @returns {Promise<string>}
 */
function getSrc(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
    });
}

/**
 * Index of currently replacing images with respect to imgSrcs;
 * Only applicable if file selection dilogue is open;
 * -1 if user is adding an image not replacing one
 * @type {number}
 */
let currentReplacingImgIndex;

async function handleImgInputChange() {
    if (currentReplacingImgIndex !== -1) {
        // if user is replacing one of images, take only first uploaded image
        const file = imgInputEl.value.files.item(0);
        if (!file) return;
        imgSrcs.value[currentReplacingImgIndex] = await getSrc(file);
        emit("update:modelValue", [
            ...props.modelValue.slice(0, currentReplacingImgIndex),
            file,
            ...props.modelValue.slice(currentReplacingImgIndex + 1),
        ]);
        return;
    }

    const filesArray = Array.from(imgInputEl.value.files);

    // else take all images and push to imgSrcs
    const newSrcs = await Promise.all(filesArray.map(getSrc));

    imgSrcs.value = imgSrcs.value.concat(newSrcs);
    emit("update:modelValue", props.modelValue.concat(filesArray));
}

/**
 * @param {number} index
 */
function removeImage(index) {
    const indexRemoved = (arr) => [
        ...arr.slice(0, index),
        ...arr.slice(index + 1),
    ];
    imgSrcs.value = indexRemoved(imgSrcs.value);
    emit("update:modelValue", indexRemoved(props.modelValue));
}

/**
 *
 * @param {number?} index Index of image to replace, in imgSrcs array
 */
function replaceImage(index) {
    currentReplacingImgIndex = typeof index === "number" ? index : -1;
    imgInputEl.value.click();
}
</script>
