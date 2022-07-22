<template>
  <form class="my-4" @submit.prevent="submitForm">
    <base-image-input
      label="Imagen del producto"
      v-model="fields.image"
    ></base-image-input>
    <small class="text-danger mb-0" v-if="invalidFields.includes('image')"
      >Imagen requerida</small
    >
    <div class="my-4">
      <label class="form-label text-dark-blue mb-1">
        <span>Nombre del producto</span>
        <small v-if="invalidFields.includes('name')" class="ms-2 text-danger">
          Campo requerido</small
        >
      </label>
      <input
        type="text"
        class="form-control"
        :class="{ 'is-invalid': invalidFields.includes('name') }"
        placeholder="Nombre"
        v-model="fields.name"
      />
    </div>
    <div class="my-4">
      <label class="form-label text-dark-blue mb-1">
        <span>Precio del producto</span>
        <small v-if="invalidFields.includes('price')" class="ms-2 text-danger">
          No debe ser cero</small
        >
      </label>
      <input
        type="number"
        class="form-control"
        :class="{ 'is-invalid': invalidFields.includes('price') }"
        placeholder="Precio"
        v-model="fields.price"
      />
    </div>
    <div class="my-4">
      <label class="form-label text-dark-blue mb-1">
        <span>Una pequeña descripción </span>
        <small
          v-if="invalidFields.includes('description')"
          class="ms-2 text-danger"
          >Campo requerido</small
        >
      </label>
      <textarea
        type="number"
        class="form-control"
        :class="{ 'is-invalid': invalidFields.includes('description') }"
        placeholder="Descripción"
        v-model="fields.description"
      ></textarea>
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
      image: null,
      name: '',
      price: 0,
      description: '',
    });

    function checkErrors() {
      const dirtyFields = [];
      Object.entries(fields).forEach(
        ([name, value]) => !value && dirtyFields.push(name),
      );
      invalidFields.value = dirtyFields;
    }

    async function submitForm() {
      checkErrors();
      if (!invalidFields.value.length) {
        isFormSending.value = true;
        try {
          const response = await axios.postMultipart(
            '/api/product/create',
            fields,
          );
          if (response.data.message === 'success') {
            isFormSending.value = false;
            fields.image = null;
            fields.name = '';
            fields.price = 0;
            fields.description = '';
            emit('success');
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
      invalidFields,
      submitForm,
      isFormSending,
    };
  },
};
</script>
