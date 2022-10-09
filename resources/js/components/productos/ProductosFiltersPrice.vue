<template>
  <div class="has-validation">
    <h5>Precio:</h5>
    <div class="input-group w-75">
      <input
        type="number"
        class="form-control"
        :class="{ 'is-invalid': isMinInvalid }"
        placeholder="Min"
        @change="update($event, 'min')"
      />
      <input
        type="number"
        class="form-control"
        :class="{ 'is-invalid': isMaxInvalid }"
        placeholder="Max"
        @change="update($event, 'max')"
      />
    </div>
  </div>
</template>

<script>import { ref } from 'vue';

export default {
  props: {
    modelValue: {
      type: Array,
      default: () => [0, 0],
    },
  },
  setup(props, { emit }) {
    const isMinInvalid = ref(false);
    const isMaxInvalid = ref(false);

    function update(event, type) {
      const input = Number(event.currentTarget.value);
      const newVal = [...props.modelValue];

      if (type === 'min') newVal[0] = input;
      if (type === 'max') newVal[1] = input;

      isMinInvalid.value = newVal[0] < 0;
      isMaxInvalid.value = newVal[1] < newVal[0];

      emit('update:modelValue', newVal);
    }

    return { update, isMaxInvalid, isMinInvalid };
  },
};
</script>
