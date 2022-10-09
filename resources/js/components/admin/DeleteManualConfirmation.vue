<template>
  <div v-if="manual">
    <div class="d-flex my-4">
      <div class="w-25 me-4">
        <small class="d-block fw-bolder">Título</small>
        <p>{{ manual.title }}</p>
      </div>
      <div class="flex-grow-1">
        <small class="d-block fw-bolder">Descripción</small>
        <p>{{ manual.description }}</p>
      </div>
    </div>

    <div class="my-1">
      <a target="_blank" :href="manual.pdf_url">Ver PDF</a>
    </div>

    <div>
      <small class="d-block">
        <span>Creado en:</span>
        <base-formatted-date
          :rawDate="manual.created_at"
          class="fw-bolder ms-2"
        />
      </small>
      <small class="d-block">
        <span>Ultima actualización en:</span>
        <base-formatted-date
          :rawDate="manual.updated_at"
          class="fw-bolder ms-2"
        />
      </small>
    </div>
    <div class="mt-4">
      <small class="text-muted">¿Está seguro de que desea eliminar este manual?</small>
      <button
        @click="confirmDeletion"
        class="btn btn-primary ms-4"
        :disabled="isDeletionConfirmed"
      >
        <span v-if="!isDeletionConfirmed">Si</span>
        <span v-else class="spinner-grow spinner-grow-sm"></span>
      </button>
    </div>
  </div>
  <div class="text-dark-blue" v-else>
    <p>No se seleccionó ningún manual.</p>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    manual: {
      type: Object,
      default: null,
    },
  },
  setup(props, { emit }) {
    const isDeletionConfirmed = ref(false);

    function confirmDeletion() {
      isDeletionConfirmed.value = true;
      emit('deletion-confirmed');
    }

    watch(
      () => props.manual,
      (newVal) => {
        if (!newVal) isDeletionConfirmed.value = false;
      },
    );

    return { confirmDeletion, isDeletionConfirmed };
  },
};
</script>
