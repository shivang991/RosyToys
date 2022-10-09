<template>
  <div class="admin-register mx-auto my-5 px-3 px-sm-5 px-xl-0">
    <h2 class="fw-bolder text-dark-blue">Registrarse</h2>
    <p class="mb-5">
      Utilice el siguiente formulario para registrar un nuevo administrador del
      sitio.
    </p>
    <register-form
      @success="notifySuccess"
      @input-error="notifyInputError"
      @general-error="notifyGeneralError"
    ></register-form>
  </div>
</template>

<script>
import { NotificationTypes, useNotification } from '@/plugins/Notifications';
import RegisterForm from '@/components/admin/RegisterForm.vue';

export default {
  components: { RegisterForm },
  setup() {
    const notification = useNotification();
    function notifySuccess() {
      notification.fire(NotificationTypes.MANUAL_CREATED);
    }
    function notifyGeneralError() {
      notification.fire(NotificationTypes.GENERAL_ERROR);
    }
    function notifyInputError() {
      notification.fire(NotificationTypes.USER_EXISTS);
    }
    return { notifySuccess, notifyGeneralError, notifyInputError };
  },
};
</script>


