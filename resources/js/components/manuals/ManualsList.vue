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

<style lang="scss" scoped>
.manuals-list {
  display: grid;
  column-gap: 2rem;
  grid-template-columns: minmax(0, 1fr);
  @include responsive-columns(sm, 2);
  @include responsive-columns(xl, 3);
  @include responsive-columns(xxl, 4);
  @include media-query(md) {
    column-gap: 3rem;
  }

  &__error-msg {
    background-color: $secondary;
    grid-column: 1 / span 4;
    text-align: center;
    p {
      max-width: 40ch;
      margin: 0 auto;
    }
  }
}
</style>
