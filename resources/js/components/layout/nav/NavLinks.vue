<template>
  <div class="space-x-8">
    <template v-for="(link, index) in links" :key="index">
      <router-link class="text-slate-200 font-semibold hover:underline text-lg" :to="{ name: link.route }">{{ link.title }}</router-link>
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


