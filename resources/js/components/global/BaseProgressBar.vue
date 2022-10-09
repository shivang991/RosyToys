<template>
  <div class="progress-bar" :style="{ height: `${height}px`, opacity: Number(shouldShow) }"></div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 5,
    },
    shouldShow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>


