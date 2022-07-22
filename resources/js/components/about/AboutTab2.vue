<template>
  <div class="tab-2 my-5">
    <div class="py-5">
      <h1 class="mb-5">Nuestra Filosofía</h1>
      <p class="lh-lg text">
        Para nosotros el brindar un buen servicio, atender al cliente, concretar
        una venta exitosa, satisfacer una necesidad de busqueda y finalizar con
        un cliente saliendo feliz de nuestra tienda es vital para segui viendo
        ARDA como su primera opcion
      </p>
    </div>
    <div>
      <img
        src="https://vgoinc.com/wp-content/uploads/2015/11/11052015.jpg"
        class="img-fluid h-100 rounded"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tab-2 {
  max-width: 80vw;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 4rem;
  row-gap: 4rem;
  color: $text;

  &__icon-card {
    min-width: 200px;
    text-align: center;
  }

  @include media-query(lg) {
    max-width: 70vw;
  }
}
</style>
