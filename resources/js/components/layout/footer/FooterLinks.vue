<template>
  <div class="footer-links p-5">
    <h5 class="font-weight-bold">Enlaces rápidos</h5>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <router-link class="text-secondary" :to="{ name: link.route }">
          {{ link.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    const links = [
      { route: 'Home', title: 'Inicio' },
      { route: 'About', title: 'Acerca de' },
      { route: 'Productos', title: 'Productos' },
    ];
    return { links };
  },
};
</script>


