<template>
  <div class="mb-5">
    <div>
      <label class="form-label text-dark-blue mb-1 text-capitalize"
        >{{ entityName }} ID</label
      >
      <form class="input-group" @submit.prevent="search">
        <input type="text" class="form-control" placeholder="Identificación" />
        <button class="btn btn-primary" :disabled="isRequestSent">
          <span v-if="!isRequestSent"> Seleccionar </span>
          <span class="spinner-grow spinner-grow-sm mx-4" v-else></span>
        </button>
      </form>
    </div>
    <div v-if="errorMsg" class="mt-3 text-danger">
      <p>{{ errorMsg }}</p>
    </div>
  </div>
</template>

<script>
import { useAxios } from '@/plugins/Axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  props: {
    entityName: {
      type: String,
      required: true,
    },
    searchURL: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const axios = useAxios();
    const isRequestSent = ref(false);
    const errorMsg = ref(null);
    const route = useRoute();

    async function fetchEntity(id) {
      try {
        isRequestSent.value = true;
        const { data } = await axios.get(`${props.searchURL}/${id}`);
        emit('entity-selected', data);
        errorMsg.value = null;
      } catch (error) {
        if (error.response && error.response.status === 404) {
          errorMsg.value = `No se pudo encontrar el ${props.entityName} con id ${id}`;
        }
      } finally {
        isRequestSent.value = false;
      }
    }

    async function search(submitEvent) {
      const searchValue = submitEvent.target[0].value;
      if (!searchValue || Number.isNaN(Number(searchValue))) {
        errorMsg.value = `"${searchValue}" es un ID de ${props.entityName} no válido`;
        return;
      }
      fetchEntity(searchValue);
    }

    const queryId = route.query.id;
    if (queryId) {
      fetchEntity(queryId);
    }

    return {
      search,
      isRequestSent,
      errorMsg,
    };
  },
};
</script>
