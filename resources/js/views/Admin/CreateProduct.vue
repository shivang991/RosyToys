<template>
  <div class="create-product mx-auto my-5 px-3 px-sm-5 px-xl-0">
    <h2 class="fw-bolder mb-5 text-dark-blue">Agregar producto</h2>
    <create-product-form
      @success="notifySuccess"
      @error="notifyError"
    ></create-product-form>
  </div>
</template>

<script>
import CreateProductForm from '@/components/admin/CreateProductForm.vue';
import { NotificationTypes, useNotification } from '@/plugins/Notifications';

export default {
  components: { CreateProductForm },
  setup() {
    const notification = useNotification();
    function notifySuccess() {
      notification.fire(NotificationTypes.PRODUCT_CREATED);
    }
    function notifyError() {
      notification.fire(NotificationTypes.GENERAL_ERROR);
    }
    return { notifySuccess, notifyError };
  },
};
</script>

<style lang="scss" scoped>
.create-product {
  max-width: 600px;
}
</style>
