<template>
  <div class="admin-dashboard my-5 px-3 px-sm-5 px-xl-0">
    <h4 class="mb-5">Seleccione una acción para continuar:</h4>
    <div>
      <div>
        <p class="text-primary">Acciones relacionadas con productos:</p>
        <div class="row mx-0 my-4">
          <router-link
            :to="{ name: 'CreateProduct' }"
            class="col btn btn-secondary p-3"
          >
            <BIconCartPlus class="fs-2" />
            <p class="mb-0 mt-3">Agregar</p>
          </router-link>
          <router-link
            :to="{ name: 'DeleteProduct' }"
            class="col btn btn-secondary p-3 mx-sm-2"
          >
            <BIconX class="fs-2" />
            <p class="mb-0 mt-3">Eliminar</p>
          </router-link>
          <router-link
            :to="{ name: 'UpdateProduct' }"
            class="col btn btn-secondary p-3"
          >
            <BIconPencilSquare class="fs-2" />
            <p class="mb-0 mt-3">Editar</p>
          </router-link>
        </div>
      </div>
      <div class="my-5">
        <p class="text-primary">Acciones relacionadas con manuales:</p>
        <div class="row mx-0">
          <router-link
            :to="{ name: 'CreateManual' }"
            class="col btn btn-secondary p-3"
          >
            <BIconFileEarmarkPlus class="fs-2" />
            <p class="mb-0 mt-3">Agregar</p>
          </router-link>
          <router-link
            :to="{ name: 'DeleteManual' }"
            class="col btn btn-secondary p-3 mx-sm-2"
          >
            <BIconFileEarmarkExcel class="fs-2" />
            <p class="mb-0 mt-3">Eliminar</p>
          </router-link>
          <router-link
            :to="{ name: 'UpdateProduct' }"
            class="col btn btn-secondary p-3"
          >
            <BIconPencilSquare class="fs-2" />
            <p class="mb-0 mt-3">Editar</p>
          </router-link>
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-column align-items-center mt-5 pt-5 border-top"
      v-if="profile"
    >
      <small class="text-muted">Registrado como:</small>
      <div class="mt-3 d-flex align-items-center">
        <div>
          <img
            :src="$store.getters['auth/profileImage']"
            :alt="profile.name"
            width="60"
            height="60"
            class="rounded-circle"
          />
        </div>
        <div class="ms-3">
          <h5 class="mb-1">{{ profile.name }}</h5>
          <p class="mb-0">{{ profile.email }}</p>
        </div>
      </div>
      <div class="d-flex mt-4">
        <router-link :to="{ name: 'Home' }" class="btn btn-outline-primary">
          Ir al casa
        </router-link>
        <router-link
          :to="{ name: 'DeleteProfile' }"
          class="btn btn-outline-danger ms-2"
          >Borrar cuenta</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState('auth', ['profile']),
};
</script>


