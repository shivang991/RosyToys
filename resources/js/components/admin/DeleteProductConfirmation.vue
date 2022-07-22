<template>
  <div v-if="product">
    <p class="text-muted small mb-2">Producto encontrado:</p>
    <div class="d-flex flex-column flex-sm-row">
      <img
        :src="product.image_url"
        alt="Product image"
        width="200"
        height="200"
        class="me-5 mb-4 mb-sm-0"
      />
      <div>
        <h4>{{ product.name }}</h4>
        <p>{{ product.description }}</p>
        <p>
          <span>Precio: </span><span>${{ product.price }}</span>
        </p>
        <small class="d-block">
          <span>Creado en:</span>
          <base-formatted-date
            :rawDate="product.created_at"
            class="fw-bolder ms-2"
          />
        </small>
        <small class="d-block">
          <span>Ultima actualización en:</span>
          <base-formatted-date
            :rawDate="product.updated_at"
            class="fw-bolder ms-2"
          />
        </small>
      </div>
    </div>
    <p class="mt-5">
      <span>¿Estás segura de eliminarlo?</span>
      <button class="ms-3 btn btn-primary" @click.prevent="confirmDeletion()">
        <span
          v-if="isDeletionConfirmed"
          class="spinner-grow spinner-grow-sm"
        ></span>
        <span v-else>Si</span>
      </button>
    </p>
  </div>
  <div class="text-dark-blue" v-else>
    <p>Ningún producto seleccionado</p>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
  setup(props, { emit }) {
    const isDeletionConfirmed = ref(false);
    function confirmDeletion() {
      isDeletionConfirmed.value = true;
      emit('delete-confirmed');
    }

    watch(
      () => props.product,
      (newVal) => {
        if (!newVal) isDeletionConfirmed.value = false;
      },
    );

    return { confirmDeletion, isDeletionConfirmed };
  },
};
</script>
