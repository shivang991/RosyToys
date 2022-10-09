<template>
  <div>
    <h5>{{label}}:</h5>
    <ul class="list-unstyled ps-1 mt-2">
      <li class="mb-1 form-check" v-for="(option, index) in options" :key="index">
        <span>
          <input type="checkbox" class="form-check-input" @change="update($event, option)" />
        </span>
        <span class="form-check-label">{{ option }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: { type: Array, required: true },
    label: { type: String, required: true },
    modelValue: { type: Array, default: () => [] },
  },
  setup(props, { emit }) {
    function update(event, option) {
      const isChecked = event.currentTarget.checked;
      const newVal = isChecked ? [...props.modelValue, option] : props.modelValue.filter((value) => value !== option);
      emit('update:modelValue', newVal);
    }
    return { update };
  },
};
</script>
