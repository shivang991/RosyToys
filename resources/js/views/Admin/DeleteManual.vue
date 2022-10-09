<template>
  <div class="delete-manual mx-auto my-5 px-3 px-sm-5 px-xl-0">
    <h2 class="fw-bolder mb-5 text-dark-blue">Eliminar manual</h2>
    <select-by-id
      entityName="manual"
      searchURL="/api/manual"
      @entity-selected="(manual) => (currentManual = manual)"
    ></select-by-id>
    <delete-manual-confirmation
      :manual="currentManual"
      @deletion-confirmed="deleteCurrentManual"
    ></delete-manual-confirmation>
  </div>
</template>

<script>
import SelectById from '@/components/admin/SelectByIDForm.vue';
import { ref } from 'vue';
import DeleteManualConfirmation from '@/components/admin/DeleteManualConfirmation.vue';
import { useAxios } from '@/plugins/Axios';
import { NotificationTypes, useNotification } from '@/plugins/Notifications';

export default {
  components: { SelectById, DeleteManualConfirmation },
  setup() {
    const axios = useAxios();
    const notification = useNotification();
    const currentManual = ref(null);

    async function deleteCurrentManual() {
      try {
        const response = await axios.delete(
          `/api/manual/${currentManual.value.id}`,
        );
        if (response.data.message === 'success') {
          notification.fire(NotificationTypes.MANUAL_DELETED);
          currentManual.value = null;
        }
      } catch (error) {
        console.log(error.response);
        notification.fire(NotificationTypes.GENERAL_ERROR);
        currentManual.value = null;
      }
    }
    return { currentManual, deleteCurrentManual };
  },
};
</script>


