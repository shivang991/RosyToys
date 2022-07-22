<template>
  <div v-if="modelValue && modelValue.last_page !== 1">
    <small class="d-block mb-4">
      Mostrando <strong>{{ modelValue.per_page }}</strong> de
      <strong>{{ modelValue.total }}</strong> productos.
    </small>
    <div class="d-flex">
      <button
        class="btn btn-primary me-2"
        @click="loadPrevPage()"
        :disabled="modelValue.current_page === 1"
      >
        <BIconCaretLeftFill />
      </button>
      <button
        v-for="link in modelValue.links.slice(1, -1)"
        :key="link.url"
        class="btn"
        :class="link.active ? 'btn-primary' : 'btn-secondary'"
        :disabled="!link.url"
        @click="loadPageByURL(link.url)"
      >
        {{ link.label }}
      </button>
      <button
        :disabled="modelValue.current_page === modelValue.last_page"
        class="btn btn-primary ms-2"
        @click="loadNextPage()"
      >
        <BIconCaretRightFill />
      </button>
    </div>
  </div>
</template>

<script>
import { useAxios } from '@/plugins/Axios';

export default {
  props: {
    modelValue: {
      type: Object,
      default: null,
    },
    queryParams: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const axios = useAxios();

    async function loadPageByURL(url) {
      const { data } = await axios.get(url, {
        baseURL: null,
        params: props.queryParams,
      });
      emit('update:modelValue', data);
    }

    function loadPrevPage() {
      const { url } = props.modelValue.links[0];
      loadPageByURL(url);
    }
    function loadNextPage() {
      const { url } = props.modelValue.links.slice(-1)[0];
      loadPageByURL(url);
    }

    return {
      loadPageByURL,
      loadPrevPage,
      loadNextPage,
    };
  },
};
</script>
