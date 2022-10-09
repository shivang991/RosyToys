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


