<template>
  <div>
    <base-search-box
      @input="(value) => $emit('update:queryParams', { search: value })"
      placeholder="Buscar por ID de producto o nombre manual"
      class="mt-4"
    ></base-search-box>
  </div>
</template>

<script>
export default {
  props: {
    queryParams: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
