<template>
  <div class="productos-list">
    <productos-list-item
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :imgSrc="product.image_url"
      :description="product.description"
      :code="product.code"
      :brand="product.brand"
      :measurements="product.measurements"
      :application="product.application"
    ></productos-list-item>
    <div
      class="productos-list__error-msg p-5 border text-muted"
      v-if="!products.length"
    >
      <p>
        <BIconExclamationDiamond class="fs-1" />
      </p>
      <p class="fw-bold fs-4 mt-4">
        Lo sentimos, no se pudo encontrar ningún producto.
      </p>
    </div>
  </div>
</template>

<script>
import ProductosListItem from './ProductosListItem.vue';

export default {
  components: { ProductosListItem },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
};
</script>


