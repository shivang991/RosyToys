<template>
  <form @submit.prevent="submitForm">
    <div class="my-4">
      <label class="form-label text-dark-blue mb-1">
        <span>Título del manual</span>
        <small v-if="invalidFields.includes('title')" class="ms-2 text-danger">
          Campo requerido
        </small>
      </label>
      <input
        type="text"
        class="form-control"
        :class="{ 'is-invalid': invalidFields.includes('title') }"
        v-model="fields.title"
        placeholder="Título"
      />
    </div>
    <div class="my-4">
      <label class="form-label text-dark-blue mb-1">
        <span>Breve descripción de la guía</span>
        <small
          class="ms-2 text-danger"
          v-if="invalidFields.includes('description')"
        >
          Campo requerido
        </small>
      </label>
      <textarea
        type="text"
        class="form-control"
        :class="{ 'is-invalid': invalidFields.includes('description') }"
        v-model="fields.description"
        placeholder="Descripción"
      ></textarea>
    </div>
    <div class="mb-4">
      <label class="form-label text-dark-blue mb-1">
        <span>Archivo manual (PDF)</span>
        <small
          class="ms-2 text-danger"
          v-if="invalidFields.includes('pdfFile')"
        >
          Archivo PDF no válido
        </small>
      </label>
      <input
        type="file"
        @change="(event) => (fields.pdfFile = event.target.files[0])"
        class="form-control"
        :class="{ 'is-invalid': invalidFields.includes('pdfFile') }"
      />
    </div>
    <button class="w-100 btn btn-primary mt-5" :disabled="isFormSending">
      <span v-if="isFormSending" class="spinner-grow spinner-grow-sm"></span>
      <span v-else>Enviar</span>
    </button>
  </form>
</template>

<script>
import { reactive, ref } from 'vue';
import { useAxios } from '@/plugins/Axios';

export default {
  setup(_, { emit }) {
    const axios = useAxios();
    const fields = reactive({
      title: '',
      description: '',
      pdfFile: null,
    });
    const invalidFields = ref([]);
    function validate() {
      invalidFields.value = [];
      if (!fields.title) invalidFields.value.push('title');
      if (!fields.description) invalidFields.value.push('description');
      if (!fields.pdfFile || !fields.pdfFile.type.endsWith('pdf')) {
        invalidFields.value.push('pdfFile');
      }
    }
    const isFormSending = ref(false);
    async function submitForm() {
      validate();
      if (!invalidFields.value.length) {
        isFormSending.value = true;
        try {
          const response = await axios.postMultipart(
            '/api/manual/create',
            fields,
          );
          if (response.data.message === 'success') {
            emit('success');
            isFormSending.value = false;
            fields.title = '';
            fields.description = '';
          }
        } catch (error) {
          console.log(error.response);
          emit('error');
          isFormSending.value = false;
        }
      }
    }
    return {
      submitForm,
      fields,
      invalidFields,
      isFormSending,
    };
  },
};
</script>
