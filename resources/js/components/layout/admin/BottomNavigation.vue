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


