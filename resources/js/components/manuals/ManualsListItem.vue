<template>
  <div class="manual-item shadow rounded overflow-hidden">
    <div class="mb-1 d-flex" v-if="$store.getters['auth/isAdmin']">
      <p class="flex-grow-1 p-2 mb-0 bg-secondary">
        <span class="me-2">Id:</span>
        <span class="fw-bolder">{{ id }}</span>
      </p>
      <div class="d-flex">
        <router-link
          class="btn btn-secondary rounded-0 btn-sm px-3 lh-lg d-flex align-items-center"
          :to="{ name: 'UpdateManual', query: { id } }"
        >
          <BIconPencil />
        </router-link>
        <router-link
          class="btn btn-primary rounded-0 btn-sm px-3 lh-lg d-flex align-items-center"
          :to="{ name: 'DeleteManual', query: { id } }"
        >
          <BIconXLg />
        </router-link>
      </div>
    </div>
    <div class="p-4">
      <div>
        <h4>{{ title }}</h4>
        <p class="mt-4">{{ description }}</p>
      </div>
      <div class="mt-5">
        <a :href="pdfLink" class="btn btn-outline-primary w-100">
          <BIconFileEarmarkPdf class="self-center" />
          <span class="lh-1 ms-4">Ir al PDF</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    pdfLink: {
      type: String,
      required: true,
    },
  },
};
</script>


