<template>
  <div>
    <base-search-box
      placeholder="Buscar por código de producto"
      @input="searchProducts"
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
  setup(props, { emit }) {
    async function searchProducts(searchVal) {
      const params = { ...props.queryParams, search: searchVal };
      emit('update:queryParams', params);
    }

    return { searchProducts };
  },
};
</script>
