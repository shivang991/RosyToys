<template>
  <form class="register-form my-4" @submit.prevent="submitForm">
    <base-image-input
      v-model="fields.profileImage"
      label="Imagen de perfil"
    ></base-image-input>

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
          <span>Cambia tu contraseña:</span>
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
      <span v-else>Ahorrar</span>
    </button>
  </form>
</template>

<script>
import { reactive, ref } from 'vue';
import { useAxios } from '@/plugins/Axios';
import { useStore } from 'vuex';
import BaseImageInput from '@/components/global/BaseImageInput.vue';

export default {
  setup(_, { emit }) {
    const axios = useAxios();
    const isFormSending = ref(false);
    const invalidFields = ref([]);
    const store = useStore();

    const fields = reactive({
      profileImage: null,
      userName: store.state.auth.profile.name,
      password: '',
      passwordConfirmation: '',
    });

    // set default value for profile-image
    if (store.state.auth.profile.profile_image_url) {
      axios
        .get(store.state.auth.profile.profile_image_url, {
          responseType: 'blob',
        })
        .then((res) => {
          fields.profileImage = res.data;
        });
    }

    function checkErrors() {
      const dirtyFields = [];

      if (fields.userName.length < 4) dirtyFields.push('userName');
      if (fields.password.length && fields.password.length < 6) {
        dirtyFields.push('password');
      }

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
          const response = await axios.postMultipart('/api/admin/update', {
            name: fields.userName,
            password: fields.password,
            profile_image: fields.profileImage,
          });
          if (response.data.message === 'success') {
            axios.setUser();
            isFormSending.value = false;
            fields.password = '';
            fields.passwordConfirmation = '';
            fields.profileImage = null;
            emit('success');
          }
        } catch (error) {
          console.log(error.response);
          emit('error');
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


