<template>
  <div class="border-top px-5 py-4 bottom-nav">
    <p class="mb-1">Tareas de gestión:</p>
    <div class="bottom-nav__links">
      <ul class="list-unstyled">
        <li class="mb-1" v-for="(link, index) in productosLinks" :key="index">
          <router-link :to="{ name: link.route }">{{ link.name }}</router-link>
        </li>
      </ul>
      <ul class="list-unstyled">
        <li class="mb-1" v-for="(link, index) in manualesLinks" :key="index">
          <router-link :to="{ name: link.route }">{{ link.name }}</router-link>
        </li>
      </ul>
    </div>
    <div>
      <p class="mb-1">Perfil de administrador:</p>
      <ul class="list-unstyled">
        <li class="mb-1">
          <router-link :to="{ name: 'UpdateProfile' }">
            Editar perfil
          </router-link>
        </li>
        <li class="mb-1">
          <router-link :to="{ name: 'DeleteProfile' }">
            Borrar perfil
          </router-link>
        </li>
        <li class="mb-1">
          <router-link :to="{ name: 'AdminRegister' }">
            Agregar un administrador
          </router-link>
        </li>
      </ul>
    </div>
    <p class="my-2">
      <router-link :to="{ name: 'AdminDashboard' }">
        Ir al panel de control
      </router-link>
    </p>
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

<style lang="scss" scoped>
.bottom-nav {
  border-left: 1rem solid nth($blues, 4);
  background: $primary;
  color: rgba($secondary, 0.5);
  a {
    color: rgba($secondary, 0.75);
    &.router-link-exact-active {
      color: $secondary;
      font-weight: bolder;
    }
  }
  &__links {
    display: grid;
    @include responsive-columns(sm, 2);
  }
}
</style>
