<template>
  <div class="nav-links">
    <template v-for="(link, index) in links" :key="index">
      <router-link class="nav-links__link small" :to="{ name: link.route }">{{ link.title }}</router-link>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-links {
  display: flex;
  &__link {
    display: block;
    padding: 1rem;
    text-decoration: none;
    color: $text;
    @include media-query(xl) {
      padding: 1rem 1.5rem;
    }
    &:hover {
      background: rgba($primary, 0.1);
    }
    &.router-link-active {
      font-weight: bold;
      color: $primary;
      @include pseudo {
        width: 0.25rem;
        height: 0.25rem;
        background-color: $primary;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, -0.5rem);
      }
    }
  }
}
</style>
