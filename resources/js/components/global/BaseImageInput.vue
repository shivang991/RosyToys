<template>
    <div>
        <input type="file" v-show="false" ref="inputEl" @change="handleInput" />
        <label
            class="py-1 px-2 rounded-t-md text-white"
            :class="isInvalid ? 'bg-red-600' : 'bg-amber-500'"
            >{{ label }}</label
        >
        <div v-if="imgSrc || defaultSrc">
            <p class="my-2 text-slate-500">Haga clic para cambiar la imagen</p>
            <img
                :src="imgSrc || defaultSrc"
                v-bind="attrs"
                @click="$refs.inputEl.click()"
            />
            <button
                v-if="!!modelValue"
                @click.prevent.stop="clearImage"
                class="py-1 text-amber-500 px-2 border border-amber-500 rounded-md mt-2"
            >
                Quita la imagen
            </button>
        </div>
        <div
            class="py-8 flex flex-col items-center rounded-b-md shadow bg-slate-100 ring-slate-200"
            :class="[
                isInvalid ? 'bg-red-50' : 'bg-slate-100',
                { 'ring-2': isActive },
            ]"
            v-else
            @drop.prevent.stop="handleDrop"
            @dragover="isActive = true"
            @dragleave="isActive = false"
            v-on="dragEvtHandlers"
        >
            <p class="text-xl mb-1 text-slate-500">
                <FontAwesomeIcon icon="fa fa-upload" />
            </p>
            <p class="text-slate-500 mb-2">Suelta un archivo o</p>
            <button
                class="text-amber-500 hover:underline"
                @click.prevent="$refs.inputEl.click()"
            >
                Haga clic para navegar
            </button>
        </div>
    </div>
</template>

<script>
export default { inheritAttrs: false };
</script>

<script setup>
import { ref, useAttrs, watch } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const attrs = useAttrs();
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    modelValue: {
        type: Blob,
        default: null,
    },
    defaultSrc: {
        type: String,
        default: null,
    },
    isInvalid: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["update:modelValue"]);

const dragEvtHandlers = Object.fromEntries(
    ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave"].map(
        (evName) => [
            evName,
            (ev) => {
                ev.preventDefault();
                ev.stopPropagation();
            },
        ]
    )
);
const imgSrc = ref(null);
const isActive = ref(false);

function preparePreview(blob) {
    if (blob && blob.type.startsWith("image")) {
        emit("update:modelValue", blob);
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.addEventListener("load", (event) => {
            imgSrc.value = event.target.result;
        });
    }
}
function handleDrop(event) {
    isActive.value = false;
    preparePreview(event.dataTransfer.files?.[0]);
}
function handleInput(event) {
    preparePreview(event.target.files[0]);
}
function clearImage() {
    emit("update:modelValue", null);
    imgSrc.value = props.defaultSrc;
}

watch(
    () => props.modelValue,
    (newVal) => newVal && preparePreview(newVal)
);
</script>
