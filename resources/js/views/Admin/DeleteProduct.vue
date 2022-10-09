<template>
  <div class="delete-product mx-auto my-5 px-3 px-sm-5 px-xl-0">
    <h2 class="fw-bolder mb-5 text-dark-blue">Eliminar producto</h2>
    <select-by-id
      entityName="producto"
      searchURL="/api/product"
      @entity-selected="(product) => (currentProduct = product)"
    ></select-by-id>
    <delete-product-confirmation
      :product="currentProduct"
      @delete-confirmed="deleteProduct"
    ></delete-product-confirmation>
  </div>
</template>

<script>
import { useAxios } from '@/plugins/Axios';
import { ref } from 'vue';
import { NotificationTypes, useNotification } from '@/plugins/Notifications';
import DeleteProductConfirmation from '@/components/admin/DeleteProductConfirmation.vue';
import SelectById from '@/components/admin/SelectByIDForm.vue';

export default {
  components: { DeleteProductConfirmation, SelectById },
  setup() {
    const notification = useNotification();
    const axios = useAxios();
    const currentProduct = ref(null);

    async function deleteProduct() {
      try {
        const delResponse = await axios.delete(
          `/api/product/${currentProduct.value.id}`,
        );
        if (delResponse.data.message === 'success') {
          currentProduct.value = null;
          notification.fire(NotificationTypes.PRODUCT_DELETED);
        }
      } catch (error) {
        console.log(error.response);
        notification.fire(NotificationTypes.GENERAL_ERROR);
        currentProduct.value = null;
      }
    }

    return {
      currentProduct,
      deleteProduct,
    };
  },
};
</script>


