<template>
  <div class="update-manual mx-auto my-5 px-3 px-sm-5 px-xl-0">
    <h2 class="fw-bolder mb-5 text-dark-blue">Actualizar manual</h2>
    <select-by-id
      entityName="manual"
      searchURL="/api/manual"
      @entity-selected="(selectedManual) => (manual = selectedManual)"
    ></select-by-id>
    <div class="mt-5">
      <update-manual-form
        v-if="manual"
        :key="manual.id"
        :manual="manual"
        @success="notifySuccess"
        @error="notifyError"
      ></update-manual-form>
      <p v-else class="text-dark-blue">Ningún manual seleccionado.</p>
    </div>
  </div>
</template>

<script>
import SelectById from '@/components/admin/SelectByIDForm.vue';
import { ref } from 'vue';
import UpdateManualForm from '@/components/admin/UpdateManualForm.vue';
import { NotificationTypes, useNotification } from '@/plugins/Notifications';

export default {
  components: { SelectById, UpdateManualForm },
  setup() {
    const notification = useNotification();
    const manual = ref(null);

    function notifySuccess() {
      notification.fire(NotificationTypes.MANUAL_UPDATED);
    }
    function notifyError() {
      notification.fire(NotificationTypes.GENERAL_ERROR);
    }

    return { manual, notifySuccess, notifyError };
  },
};
</script>

<style lang="scss" scoped>
.update-manual {
  max-width: 600px;
}
</style>
