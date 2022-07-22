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

<style lang="scss" scoped>
.progress-bar {
  width: 100%;
  background-color: transparent;
  @include pseudo {
    background: linear-gradient(
      to right,
      transparent 0,
      nth($blues, 1) 25%,
      nth($blues, 4) 75%,
      transparent
    );
    animation: progress 1s ease-in-out infinite;
  }
  @keyframes progress {
    from {
      transform: scaleX(1) translate(-100%);
    }
    to {
      transform: scaleX(1) translate(100%);
    }
  }
}
</style>
