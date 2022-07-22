<template>
  <div class="admin-layout">
    <side-bar
      class="d-none d-lg-block"
      :manualesLinks="manualesLinks"
      :productosLinks="productosLinks"
    />

    <div class="border mx-2 mx-sm-5 my-2">
      <div class="border-bottom d-none d-lg-flex">
        <div class="flex-fill py-4 px-4 px-xl-5">
          <h2 class="fw-bolder lh-1">Panel de administración</h2>
          <p class="text-primary">
            <router-link :to="{ name: 'Home' }"> Ir a casa </router-link>
            <router-link
              :to="{ name: 'AdminRegister' }"
              class="ps-2 ms-2 border-start"
              exact-active-class="d-none"
            >
              Registrar un nuevo administrador
            </router-link>
          </p>
        </div>
        <div class="py-4 px-3 px-xl-5 bg-secondary border-start" v-if="profile">
          <div>
            <h6 class="mb-0 fw-bolder">{{ profile.name }}</h6>
            <small class="mb-0">{{ profile.email }}</small>
          </div>
          <p class="mb-0 mt-2">
            <router-link
              :to="{ name: 'UpdateProfile' }"
              class="pe-2 me-2 border-end"
            >
              Editar
            </router-link>
            <a href="/" @click.prevent="logout" class="link-primary">
              Cerrar sesión
            </a>
          </p>
        </div>
      </div>
      <div class="d-lg-none py-2 bg-primary"></div>
      <router-view></router-view>
      <bottom-navigation
        :manualesLinks="manualesLinks"
        :productosLinks="productosLinks"
        class="d-lg-none"
      />
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/layout/admin/SideBar.vue';
import BottomNavigation from '@/components/layout/admin/BottomNavigation.vue';
import { mapState } from 'vuex';
import { useAxios } from '@/plugins/Axios';
import { useRouter } from 'vue-router';

export default {
  components: { SideBar, BottomNavigation },
  setup() {
    const axios = useAxios();
    const router = useRouter();

    async function logout() {
      await axios.logout();
      router.push({ name: 'AdminLogin' });
    }

    const productosLinks = [
      { route: 'CreateProduct', name: 'Agregar producto' },
      { route: 'UpdateProduct', name: 'Editar producto' },
      { route: 'DeleteProduct', name: 'Quitar un producto' },
    ];
    const manualesLinks = [
      { route: 'CreateManual', name: 'Agregar manual' },
      { route: 'UpdateManual', name: 'Editar manual' },
      { route: 'DeleteManual', name: 'Quitar un manual' },
    ];
    return { productosLinks, manualesLinks, logout };
  },
  computed: mapState('auth', ['profile']),
};
</script>

<style lang="scss" scoped>
.admin-layout {
  @include media-query(lg) {
    display: grid;
    grid-template-columns: minmax(20%, 300px) auto;
  }
}
</style>
