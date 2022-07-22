<template>
  <form class="register-form my-4" @submit.prevent="submitForm">
    <div class="my-4">
      <label class="form-label text-dark-blue mb-1">
        <span>Introduce tu correo electrónico:</span>
        <small v-if="invalidFields.includes('email')" class="ms-2 text-danger">
          Email inválido</small
        >
      </label>
      <input
        type="text"
        class="form-control"
        :class="{ 'is-invalid': invalidFields.includes('email') }"
        placeholder="Correo"
        v-model="fields.email"
      />
    </div>
    <div class="my-4">
      <label class="form-label text-dark-blue mb-1">
        <span>Elige un nombre de usuario:</span>
        <small
          v-if="invalidFields.includes('userName')"
          class="ms-2 text-danger"
        >
          Mínimo 4 caracteres.
        </small>
      </label>
      <input
        type="text"
        maxlength="12"
        class="form-control"
        :class="{ 'is-invalid': invalidFields.includes('userName') }"
        placeholder="Nombre"
        v-model="fields.userName"
      />
    </div>
    <div class="register-form__password-field d-md-grid">
      <div class="my-3">
        <label class="form-label text-dark-blue mb-1">
          <span>Establecer una contraseña:</span>
          <small
            v-if="invalidFields.includes('password')"
            class="text-danger d-block mb-2"
          >
            Mínimo 6 caracteres
          </small>
        </label>
        <input
          type="password"
          class="form-control"
          :class="{ 'is-invalid': invalidFields.includes('password') }"
          placeholder="Contraseña"
          v-model="fields.password"
        />
      </div>
      <div class="my-3">
        <label class="form-label text-dark-blue mb-1">
          <span>Escriba la contraseña otra vez:</span>
          <small
            v-if="invalidFields.includes('passwordConfirmation')"
            class="text-danger d-block mb-2"
          >
            Confirmación incomparable</small
          >
        </label>
        <input
          type="password"
          class="form-control"
          :class="{
            'is-invalid': invalidFields.includes('passwordConfirmation'),
          }"
          placeholder="Contraseña"
          v-model="fields.passwordConfirmation"
        />
      </div>
    </div>
    <button class="w-100 btn btn-primary mt-5" :disabled="isFormSending">
      <span v-if="isFormSending" class="spinner-grow spinner-grow-sm"></span>
      <span v-else>Crear</span>
    </button>
  </form>
</template>

<script>
import { reactive, ref } from 'vue';
import { useAxios } from '@/plugins/Axios';

export default {
  setup(_, { emit }) {
    const axios = useAxios();
    const isFormSending = ref(false);
    const invalidFields = ref([]);
    const fields = reactive({
      email: '',
      userName: '',
      password: '',
      passwordConfirmation: '',
    });

    function checkErrors() {
      const dirtyFields = [];

      if (!/.+@.+\..+/.test(fields.email)) dirtyFields.push('email');

      if (fields.userName.length < 4) dirtyFields.push('userName');
      if (fields.password.length < 6) dirtyFields.push('password');

      if (fields.passwordConfirmation !== fields.password) {
        dirtyFields.push('passwordConfirmation');
      }

      invalidFields.value = dirtyFields;
    }

    async function submitForm() {
      checkErrors();
      if (!invalidFields.value.length) {
        isFormSending.value = true;
        try {
          const response = await axios.authPost('/api/admin/register', {
            name: fields.userName,
            email: fields.email,
            password: fields.password,
          });
          if (response.data.message === 'success') {
            isFormSending.value = false;
            Object.keys(fields).forEach((field) => {
              fields[field] = '';
            });
            emit('success');
          }
        } catch (error) {
          console.log(error.response);
          if (Object.keys(error.response.errors).includes('email')) {
            emit('input-error');
          } else emit('general-error');
          isFormSending.value = false;
        }
      }
    }

    return {
      fields,
      invalidFields,
      submitForm,
      isFormSending,
    };
  },
};
</script>

<style lang="scss" scoped>
.register-form {
  &__password-field {
    column-gap: 2rem;
    align-items: flex-end;
    @include responsive-columns(md, 2);
  }
}
</style>
