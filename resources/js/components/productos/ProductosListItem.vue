<template>
  <div class="product-card  shadow-sm rounded" @click="viewProduct">
    <div class="product-card__img border-end bg-secondary">
      <img @load="isImgLoaded = true" v-show="isImgLoaded" :src="imgSrc" />
      <div class="text-center text-primary" v-show="!isImgLoaded">
        <span class="spinner-grow"></span>
      </div>
    </div>
    <div class="product-card__text d-flex flex-column py-4 px-5">
      <h5 class="text-truncate">
        {{ description }}
      </h5>
      <p class="d-flex text-muted">
        <span class="me-1">Medidas:</span>
        <small>{{ measurements }}</small>
      </p>
      <div class="flex-grow-1"></div>
      <table class="mt-2 w-max align-self-start">
        <tr v-for="(value, key) in productStats" :key="key">
          <td class="text-muted pe-1">{{ key }}:</td>
          <td>{{ value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    measurements: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    application: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const isImgLoaded = ref(false);

    const productStats = {
      Marca: props.brand,
      Aplicacion: props.application,
      Codigo: props.code,
    };

    function viewProduct() {
      console.log(router);
      // router.push({ name: 'ProductDetail', params: { id: props.id } });
    }

    return { isImgLoaded, viewProduct, productStats };
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  display: grid;
  grid-template-columns: 240px auto;
  overflow: hidden;
  margin-bottom: 4rem;
  min-width: 0;
  cursor: pointer;
  &:hover {
    background: $translucent;
  }
  &__text {
    min-width: 0;
  }
  &__img {
    display: grid;
    place-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
