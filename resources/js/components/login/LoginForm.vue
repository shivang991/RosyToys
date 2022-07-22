<template>
  <div class="login-form px-4">
    <h1 class="fw-bolder mb-5">Iniciar sesión</h1>
    <form @submit.prevent="login">
      <div class="mb-4">
        <label class="form-label text-dark-blue mb-1">Correo electrónico</label>
        <input
          type="email"
          class="form-control"
          placeholder="Email"
          v-model="email"
        />
      </div>
      <div class="mb-4">
        <label class="form-label text-dark-blue mb-1">Contraseña</label>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="password"
        />
      </div>

      <button class="btn my-4 btn-primary w-100">Enviar</button>
    </form>
    <p class="mt-5">
      <span>¿Necesitas una cuenta?</span>
      <router-link :to="{ name: 'Register' }" class="ms-1 fw-bold">
        Registrese aquí
      </router-link>
    </p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useAxios } from '@/plugins/Axios';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const axios = useAxios();
    const router = useRouter();

    const password = ref('');
    const email = ref('');

    const login = async () => {
      try {
        await axios.login(email.value, password.value);
        router.push({ name: 'Productos' });
      } catch (error) {
        console.log(error.response);
      }
    };
    return {
      email,
      password,
      login,
    };
  },
};
</script>

<style lang="scss" scoped>
.login-form {
  width: 456px;
  margin: auto;
}
</style>
