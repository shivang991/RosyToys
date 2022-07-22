<template>
  <div class="product-detail" v-if="product">
    <div class="px-4">
      <img
        :src="product.image_url"
        :alt="product.name"
        class="product-detail__image"
      />
      <h4 class="fw-bolder mt-4">{{ product.name }}</h4>
      <p>{{ product.description }}</p>
      <p>
        <span>Precio:</span>
        <span class="text-primary ms-2">${{ product.price }}</span>
      </p>
      <div class="mt-5" v-if="$store.getters['auth/isAdmin']">
        <p>
          <span class="me-2">Identificación de producto:</span>
          <span class="fw-bolder">{{ product.id }}</span>
        </p>
        <div class="d-flex">
          <router-link
            :to="{ name: 'DeleteProduct', query: { id: product.id } }"
            class="flex-grow-1 me-2 btn btn-primary"
          >
            Eliminar
          </router-link>
          <router-link
            :to="{ name: 'UpdateProduct', query: { id: product.id } }"
            class="flex-grow-1 mx-2 btn btn-primary"
          >
            Editar
          </router-link>
        </div>
      </div>
    </div>
    <div class="bg-translucent"></div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAxios } from '@/plugins/Axios';

export default {
  setup() {
    const route = useRoute();
    const axios = useAxios();
    const product = ref(null);

    if (route.params.id) {
      axios.get(`/api/product/${route.params.id}`).then(({ data }) => {
        product.value = data;
      });
    }
    return { product };
  },
};
</script>

<style lang="scss" scoped>
.product-detail {
  padding: 4rem 10vw;
  min-height: 100vh;
  display: grid;
  background-image: linear-gradient(
    to right,
    transparent 50%,
    $translucent 50%
  );
  grid-template-columns: repeat(2, minmax(0, 1fr));
  &__image {
    width: 100%;
    height: 400px;
  }
}
</style>
