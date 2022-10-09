<template>
  <div class="overview-section mb-5">
    <div class="h-50 bg-secondary"></div>
    <div class="container">
      <div class="row">
        <div v-for="(card, index) in cards" :key="index" class="overview-section__card mx-sm-1 px-3 py-5 my-lg-2 shadow-sm rounded-top-left col-lg" :class="`overview-section__card--${card.variant}`">
          <h5>{{ card.title }}</h5>
          <small class="mt-4">{{ card.desc }}</small>
          <div class="home-pg__decoration-balls mt-2">
            <div class="bg-primary"></div>
            <div :class="card.variant === 'dark' ? 'bg-secondary' : 'bg-dark'"></div>
          </div>
          <router-link :to="{ name: card.routeName }" class="btn mt-4">Ir</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const cards = [
      {
        title: 'Comunicate',
        desc: 'Contamos con una eficaz atencion para las dudas de nuestros clientes, ya sea por correo, por telefono o por nuestras redes sociales, no dudes en escribirnos!',
        routeName: 'Contacto',
        variant: 'light',
      },
      {
        title: 'Literatura',
        desc: 'Ademas de un amplio catalogo de refacciones tambien contamos con un amplio surtido de recursos digitales para la consulta de nuestros clientes y asi puedan obtener todo el potencial de sus piezas.',
        routeName: 'Manuals',
        variant: 'dark',
      },
      {
        title: 'Productos',
        desc: 'Contamos con una gran variedad de refacciones para satisfacer la demanda de nuestros clientes, lo cual nos distingue de la competencia.',
        routeName: 'Productos',
        variant: 'light',
      },
    ];

    return { cards };
  },
};
</script>


