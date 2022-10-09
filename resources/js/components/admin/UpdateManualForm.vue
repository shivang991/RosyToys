<template>
  <form @submit.prevent="submitForm">
    <div class="my-4">
      <label
        class="form-label text-dark-blue mb-1"
        :class="{ 'text-danger': invalidFields.includes('title') }"
      >
        Título
      </label>
      <input
        type="text"
        class="form-control"
        :class="{ 'is-invalid': invalidFields.includes('title') }"
        v-model="fields.title"
      />
    </div>
    <div class="my-4">
      <label
        class="form-label text-dark-blue mb-1"
        :class="{ 'text-danger': invalidFields.includes('description') }"
      >
        Descripción
      </label>
      <input
        type="text"
        class="form-control"
        :class="{ 'is-invalid': invalidFields.includes('description') }"
        v-model="fields.description"
      />
    </div>
    <div>
      <div class="mb-4">
        <label
          class="form-label text-dark-blue mb-1"
          :class="{ 'text-danger': invalidFields.includes('pdfFile') }"
        >
          Cambiar archivo PDF
        </label>
        <input
          type="file"
          class="form-control"
          :class="{ 'is-invalid': invalidFields.includes('pdfFile') }"
          @change="(event) => (fields.pdfFile = event.target.files[0])"
        />
      </div>
      <a :href="manual.pdf_url" target="_blank">Ver PDF actual</a>
    </div>
    <button class="btn btn-primary w-100 mt-5" :disabled="isFormSending">
      <span v-if="isFormSending" class="spinner-grow spinner-grow-sm"></span>
      <span v-else>Guardar cambios</span>
    </button>
  </form>
</template>

<script>
import { reactive, ref } from 'vue';
import { useAxios } from '@/plugins/Axios';

export default {
  props: {
    manual: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const axios = useAxios();
    const fields = reactive({
      title: props.manual.title,
      description: props.manual.description,
      pdfFile: null,
    });

    const isFormSending = ref(false);
    const invalidFields = ref([]);
    function validate() {
      invalidFields.value = [];
      if (!fields.title) invalidFields.value.push('title');
      if (!fields.description) invalidFields.value.push('description');
      if (fields.pdfFile && !fields.pdfFile.type.endsWith('pdf')) {
        invalidFields.value.push('pdfFile');
      }
    }
    async function submitForm() {
      validate();
      isFormSending.value = true;
      if (!invalidFields.value.length) {
        try {
          const response = await axios.postMultipart(
            `/api/manual/update/${props.manual.id}`,
            fields,
          );
          if (response.data.message === 'success') {
            emit('success');
            isFormSending.value = false;
          }
        } catch (error) {
          console.log(error.response);
          isFormSending.value = false;
          emit('error');
        }
      }
    }

    return {
      fields,
      submitForm,
      invalidFields,
      isFormSending,
    };
  },
};
</script>
