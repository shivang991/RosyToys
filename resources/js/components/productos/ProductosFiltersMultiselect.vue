<template>
  <div>
    <h5 class="font-semibold text-xl mb-4">{{label}}:</h5>
    <ul class="px-2 space-y-2">
      <li class="flex items-center space-x-2" v-for="(option, index) in options" :key="index">
        <span>
          <input type="checkbox" class="form-check-input" @change="update($event, option)" />
        </span>
        <span>{{ option }}</span>
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
