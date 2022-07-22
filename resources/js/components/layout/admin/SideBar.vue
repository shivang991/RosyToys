<template>
  <div>
    <router-link
      class="btn btn-primary w-100 fs-5 fw-bold py-2 text-center rounded-0"
      :to="{ name: 'AdminDashboard' }"
    >
      Acciónos:
    </router-link>
    <div class="bg-secondary h-100 border-end">
      <div class="py-3 pt-5 ms-xl-5">
        <h5
          class="
            text-primary
            border-bottom border-primary
            pb-4
            mb-0
            ps-3 ps-xl-0
          "
        >
          <BIconCart3 class="me-2" /> <span>Productos</span>
        </h5>
        <ul class="list-unstyled">
          <li v-for="(link, index) in productosLinks" :key="index">
            <router-link
              class="btn py-3 px-4 w-100 text-start border-bottom"
              exact-active-class="btn-primary border-bottom-0"
              :to="{ name: link.route }"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="my-3 border-top"></div>
      <div class="py-3 ms-xl-5">
        <h5
          class="
            text-primary
            border-bottom border-primary
            pb-4
            ps-3 ps-xl-0
            mb-0
          "
        >
          <BIconFileEarmarkPdf class="me-2" /> <span>Manuales</span>
        </h5>
        <ul class="list-unstyled">
          <li v-for="(link, index) in manualesLinks" :key="index">
            <router-link
              class="btn py-3 px-4 w-100 text-start border-bottom"
              exact-active-class="btn-primary border-bottom-0"
              :to="{ name: link.route }"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productosLinks: {
      type: Array,
      default: () => [],
    },
    manualesLinks: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
