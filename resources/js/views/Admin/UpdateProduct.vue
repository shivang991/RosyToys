<template>
  <div class="mx-auto my-5 px-3 px-sm-5 px-xl-0 update-product">
    <h2 class="fw-bolder mb-5 text-dark-blue">Actualizar producto</h2>
    <select-by-id
      entityName="producto"
      searchURL="/api/product"
      @entity-selected="(product) => (currentProduct = product)"
    ></select-by-id>
    <update-product-form
      v-if="currentProduct"
      :key="currentProduct.id"
      :product="currentProduct"
      @success="notifySuccess"
      @error="notifyError"
    />
    <p class="text-dark-blue" v-else>Ningún producto seleccionado.</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import SelectById from '@/components/admin/SelectByIDForm.vue';

import UpdateProductForm from '@/components/admin/UpdateProductForm.vue';
import { NotificationTypes, useNotification } from '@/plugins/Notifications';

export default {
  components: { SelectById, UpdateProductForm },
  setup() {
    const notification = useNotification();
    const errorMsg = ref(null);
    const currentProduct = ref(null);

    function notifyError() {
      notification.fire(NotificationTypes.GENERAL_ERROR);
    }
    function notifySuccess() {
      notification.fire(NotificationTypes.PRODUCT_UPDATED);
    }

    return {
      errorMsg,
      currentProduct,
      notifyError,
      notifySuccess,
    };
  },
};
</script>

<style lang="scss" scoped>
.update-product {
  max-width: 600px;
}
</style>
