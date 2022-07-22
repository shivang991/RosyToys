<template>
  <form v-if="product" class="update-form" @submit.prevent="submitForm">
    <div class="mb-4 update-form__name">
      <label
        class="form-label text-dark-blue mb-1"
        :class="{ 'text-danger': invalidFields.includes('name') }"
      >
        Nombre del producto
      </label>
      <input
        class="form-control"
        :class="{ 'is-invalid': invalidFields.includes('name') }"
        placeholder="Nombre"
        v-model="fields.name"
      />
    </div>
    <div class="mb-4 update-form__price">
      <label
        class="form-label text-dark-blue mb-1"
        :class="{ 'text-danger': invalidFields.includes('price') }"
      >
        Precio del producto
      </label>
      <input
        class="form-control"
        :class="{ 'is-invalid': invalidFields.includes('price') }"
        placeholder="Precio"
        v-model="fields.price"
      />
    </div>
    <div class="mb-4 update-form__desc">
      <label
        class="form-label text-dark-blue mb-1"
        :class="{ 'text-danger': invalidFields.includes('description') }"
      >
        Descripción del Producto</label
      >
      <textarea
        class="form-control"
        :class="{ 'is-invalid': invalidFields.includes('description') }"
        placeholder="Descripción"
        v-model="fields.description"
      >
      </textarea>
    </div>
    <div class="mb-4 update-form__image">
      <base-image-input
        label="Imagen de producto"
        v-model="fields.image"
        :defaultSrc="defaultImgSrc"
      />
    </div>
    <button
      class="btn btn-primary mt-5 update-form__submit-btn"
      :disabled="isFormSending"
    >
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
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const axios = useAxios();
    const fields = reactive({
      name: props.product.name,
      description: props.product.description,
      price: props.product.price,
      image: null,
    });
    const defaultImgSrc = ref(props.product.image_url);

    const isFormSending = ref(false);
    const invalidFields = ref([]);
    function validate() {
      invalidFields.value = [];
      Object.entries(fields)
        .slice(0, -1)
        .forEach(([fieldName, value]) => {
          if (!value) invalidFields.value.push(fieldName);
        });
    }
    async function submitForm() {
      validate();
      if (!invalidFields.value.length) {
        isFormSending.value = true;
        try {
          const response = await axios.postMultipart(
            `/api/product/update/${props.product.id}`,
            fields,
          );

          if (response.data.message === 'success') {
            emit('success');
            isFormSending.value = false;
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
      defaultImgSrc,
      invalidFields,
      submitForm,
      isFormSending,
    };
  },
};
</script>

<style lang="scss" scoped>
.update-form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 1rem;

  & > *:not(#{&}__price, #{&}__name) {
    grid-column: 1 / span 2;
  }
}
</style>
