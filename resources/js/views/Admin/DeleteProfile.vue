<template>
  <div class="delete-profile m-5">
    <h2 class="fw-bolder text-dark-blue mb-4">Confirmar La Eliminación</h2>
    <p class="fs-4">
      ¿Está seguro de que desea eliminar su cuenta de administrador?
    </p>
    <p>
      <span class="fw-bolder me-2">Nota:</span>
      <span>Esta acción es irreversible.</span>
    </p>
    <div class="mt-4">
      <button @click="deleteProfile" class="btn btn-primary btn-lg">Sí</button>
      <router-link
        class="ms-4 btn btn-outline-primary btn-lg"
        :to="{ name: 'AdminDashboard' }"
      >
        No, vuelve
      </router-link>
    </div>
  </div>
</template>

<script>
import { useAxios } from '@/plugins/Axios';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const axios = useAxios();
    const router = useRouter();
    async function deleteProfile() {
      await axios.authPost('/api/admin/delete');
      store.commit('auth/CLEAR_STATE');
      router.push({ name: 'AdminLogin' });
    }
    return { deleteProfile };
  },
};
</script>

<style lang="scss" scoped>
.delete-profile {
  max-width: 72ch;
}
</style>
