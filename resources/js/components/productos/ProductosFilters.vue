<template>
  <div class="productos-filters">
    <div class="productos-filters__drop-btn btn btn-outline-primary d-lg-none" @click="isFiltersShown = !isFiltersShown" :class="{ 'mb-4': isFiltersShown }">
      <h5 class="mb-0">Filters</h5>
      <BIconPlusLg v-if="isFiltersShown" />
      <BIconDashLg v-else />
    </div>
    <div>
      <transition name="scale-y">
        <div v-show="isFiltersShown">
          <productos-filters-multiselect v-for="(filter, key) in filters" :key="key" class="mb-5" :options="filter.options" :label="filter.label" v-model="input[key]"></productos-filters-multiselect>
          <!-- <productos-filters-price v-model="input.price"></productos-filters-price> -->
          <div class="mt-5">
            <button class="btn btn-primary" @click="applyFilters">Aplicar</button>
            <button class="btn btn-secondary ms-1" @click="clearFilters">Borrar</button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { useAxios } from '@/plugins/Axios';
import { reactive, ref } from 'vue';
import ProductosFiltersMultiselect from './ProductosFiltersMultiselect.vue';
// import ProductosFiltersPrice from './ProductosFiltersPrice.vue';

function useFilterOptions() {
  const axios = useAxios();

  const filters = reactive({});

  axios.get('/api/choices/brands').then((res) => {
    filters.brand = {
      label: 'Marcas',
      options: res.data,
    };
  });
  axios.get('/api/choices/applications').then((res) => {
    filters.application = {
      label: 'Applicacion',
      options: res.data,
    };
  });

  return { filters };
}

export default {
  props: {
    queryParams: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const input = reactive({
      application: [],
      brand: [],
    });

    function applyFilters() {
      const newVal = { ...props.queryParams, ...input };
      emit('update:queryParams', newVal);
    }

    function clearFilters() {
      input.application = [];
      input.brand = [];
      applyFilters();
    }

    return {
      ...useFilterOptions(),
      input,
      clearFilters,
      applyFilters,
      isFiltersShown: ref(true),
    };
  },
  components: { ProductosFiltersMultiselect },
};
</script>


