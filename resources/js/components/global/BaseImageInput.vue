<template>
  <input type="file" v-show="false" ref="inputEl" @change="handleInput" />
  <div class="img-input">
    <label class="text-dark-blue">{{ label }}</label>
    <div class="img-input__preview" v-if="imgSrc || defaultSrc">
      <p class="text-muted mb-2">
        <small>Haga clic para cambiar la imagen </small>
      </p>
      <img
        :src="imgSrc || defaultSrc"
        class="img-fluid d-block"
        @click="$refs.inputEl.click()"
      />
      <button
        @click.prevent.stop="clearImage"
        class="btn btn-outline-primary mt-2 btn-sm"
        :disabled="!modelValue"
      >
        Quita la imagen
      </button>
    </div>
    <div
      class="img-input__drop-ar"
      :class="{ 'img-input__drop-ar--active': isActive }"
      v-else
      @drop.prevent.stop="handleDrop"
      @dragover="isActive = true"
      @dragleave="isActive = false"
      v-on="dragEvtHandlers"
    >
      <div class="text-center">
        <span class="img-input__upload-icon">
          <BIconUpload class="fs-1" />
        </span>
        <p class="mt-3">Suelta un archivo o</p>
        <button
          class="btn btn-sm btn-primary"
          @click.prevent="$refs.inputEl.click()"
        >
          Haga clic para navegar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

function useDragEvensCancellor() {
  const handlers = [
    'drag',
    'dragstart',
    'dragend',
    'dragover',
    'dragenter',
    'dragleave',
  ].reduce((prevVal, currentVal) => {
    const eventHandler = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    if (typeof prevVal === 'string') {
      return { currentVal: eventHandler, prevVal: eventHandler };
    }
    const newVal = { ...prevVal };
    newVal[currentVal] = eventHandler;
    return newVal;
  });
  return { handlers };
}

export default {
  props: {
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
  },
  setup(props, { emit }) {
    const { handlers: dragEvtHandlers } = useDragEvensCancellor();
    const imgSrc = ref(null);
    const isActive = ref(false);

    function preparePreview(blob) {
      if (blob.type.startsWith('image')) {
        emit('update:modelValue', blob);
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.addEventListener('load', (event) => {
          imgSrc.value = event.target.result;
        });
      }
    }
    function handleDrop(event) {
      isActive.value = false;
      if (event.dataTransfer.files) {
        preparePreview(event.dataTransfer.files[0]);
      }
    }
    function handleInput(event) {
      preparePreview(event.target.files[0]);
    }
    function clearImage() {
      emit('update:modelValue', null);
      imgSrc.value = props.defaultSrc;
    }

    watch(
      () => props.modelValue,
      (newVal) => newVal && preparePreview(newVal),
    );

    return {
      dragEvtHandlers,
      handleDrop,
      handleInput,
      clearImage,
      imgSrc,
      isActive,
    };
  },
};
</script>


