<template>
  <span>{{ formatedDate }}</span>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    rawDate: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const formatedDate = computed(() => {
      const dataObj = new Date(props.rawDate);
      const formatOptions = {
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        year: 'numeric',
      };
      return dataObj.toLocaleDateString('es', formatOptions);
    });

    return { formatedDate };
  },
};
</script>
