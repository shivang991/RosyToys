<template>
  <div class="create-manual mx-auto my-5 px-3 px-sm-5 px-xl-0">
    <h2 class="fw-bolder mb-5 text-dark-blue">Agregar manual</h2>
    <create-manual-form
      @success="notifySuccess"
      @error="notifyError"
    ></create-manual-form>
  </div>
</template>

<script>
import CreateManualForm from '@/components/admin/CreateManualForm.vue';
import { NotificationTypes, useNotification } from '@/plugins/Notifications';

export default {
  components: { CreateManualForm },
  setup() {
    const notification = useNotification();
    function notifySuccess() {
      notification.fire(NotificationTypes.MANUAL_CREATED);
    }
    function notifyError() {
      notification.fire(NotificationTypes.GENERAL_ERROR);
    }
    return { notifySuccess, notifyError };
  },
};
</script>

<style lang="scss" scoped>
.create-manual {
  max-width: 600px;
}
</style>
