<template>
  <div class="manuals-list py-5">
    <manuals-list-item
      v-for="manual in manuals"
      :key="manual.id"
      :id="Number(manual.id)"
      :title="manual.title"
      :description="manual.description"
      :pdfLink="manual.pdf_url"
      class="mb-4"
    ></manuals-list-item>
    <div class="manuals-list__error-msg fs-4 p-5" v-if="!manuals.length">
      <p>
        <BIconExclamationDiamond class="fs-1" />
      </p>
      <p class="fw-bold fs-4 mt-4">
        Lo sentimos, no se pudo encontrar ningún manual.
      </p>
    </div>
  </div>
</template>

<script>
import ManualsListItem from './ManualsListItem.vue';

export default {
  components: { ManualsListItem },
  props: {
    manuals: {
      type: Array,
      default: () => [],
    },
  },
};
</script>


