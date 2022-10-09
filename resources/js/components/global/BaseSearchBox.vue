<template>
  <form
    class="input-group"
    @submit.prevent="(e) => emitChange(e.target[0].value)"
  >
    <input
      type="text"
      class="form-control"
      :placeholder="placeholder"
      @input.stop="handleInput"
    />
    <button class="btn btn-primary">
      <BIconSearch />
    </button>
  </form>
</template>

<script>

export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    throttleDuration: {
      type: Number,
      default: 500,
    },
  },
  setup(props, context) {
    let throttleId = null;

    function emitChange(newVal) {
      context.emit('input', newVal);
    }
    function handleInput(event) {
      const inputValue = event.target.value;
      clearTimeout(throttleId);
      throttleId = setTimeout(
        () => emitChange(inputValue),
        props.throttleDuration,
      );
    }
    return { handleInput, emitChange };
  },
};
</script>
