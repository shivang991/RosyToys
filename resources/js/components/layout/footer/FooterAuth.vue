<template>
  <div v-if="currentUser" class="footer-auth p-5">
    <p class="mb-4">Conectado como:</p>
    <div class="d-flex">
      <img
        :src="$store.getters['auth/profileImage']"
        width="75"
        height="75"
        class="rounded-circle shadow-lg"
      />
      <div class="ms-3">
        <h5 class="text-secondary">{{ currentUser.name }}</h5>
        <p>{{ currentUser.email }}</p>
      </div>
    </div>
    <div class="mt-4 d-flex justify-content-end">
      <!-- <router-link
        class="btn btn-outline-secondary btn-sm px-3"
        :to="{ name: 'Home' }"
      >
        Tu perfil
      </router-link> -->
      <button class="btn btn-primary btn-sm px-3 ms-2" @click="logout">
        Salida
      </button>
    </div>
  </div>
  <div class="footer-auth p-5" v-else>
    <p class="mb-2">Inicie sesión para obtener mayores beneficios.</p>
    <p>Opciones de inicio de sesión:</p>
    <div class="mt-4">
      <router-link
        :to="{ name: 'Login' }"
        class="d-flex align-items-center text-secondary my-3"
        :style="{
          pointerEvents: 'none',
          opacity: 0.5,
        }"
      >
        <BIconPersonFill class="fs-5 me-2" />
        <span>Usuaria</span>
      </router-link>
      <router-link
        :to="{ name: 'AdminLogin' }"
        class="d-flex align-items-center text-secondary my-3"
      >
        <BIconShieldShaded class="fs-5 me-2" />
        <span>Administradora</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useAxios } from '@/plugins/Axios';

export default {
  setup() {
    const { logout } = useAxios();
    const { state } = useStore();
    const currentUser = computed(() => state.auth.profile);

    return { currentUser, logout };
  },
};
</script>

<style lang="scss" scoped>
.footer-auth {
  background: nth($blues, 4);
  p {
    color: rgba($secondary, 0.5);
  }
}
</style>
