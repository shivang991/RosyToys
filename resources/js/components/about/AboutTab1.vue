<template>
  <div>
    <div
      class="container justify-content-center d-flex align-items-center my-5"
    >
      <div class="row justify-content-center about mb-5">
        <div class="col-md-7 col-sm-12 mt-5">
          <h2>Ofrecemos Calidad, Atencion y Diversidad</h2>
          <p class="fs-5 lh-lg mt-5">
            Contamos con un amplio catalogo asi como recursos digitales para que
            el cliente pueda hacer uso de su producto obteniendo el mayor
            provecho, Asi como tambien nos preocupamos por que el cliente este
            conforme con nosotros y siga viendonos como la mejor opcion en el
            mercado.
          </p>
          <div class="container content mt-5">
            <h4 class="fw-bold fs-5">Nosotros tenemos:</h4>
            <div
              class="
                row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2
                g-4
                py-5
                d-flex
                justify-content-between
              "
            >
              <div class="col d-flex align-items-start">
                <BIconCalendarCheck class="fs-3 me-3 flex-shrink-0" />
                <div>
                  <p class="fw-bold fs-5">25 años de experiencia</p>
                </div>
              </div>
              <div class="col d-flex align-items-start">
                <BIconShieldFillCheck class="fs-3 me-3 flex-shrink-0" />
                <div>
                  <p class="fw-bold fs-5">3000 Clientes satisfechos</p>
                </div>
              </div>
              <div class="col d-flex align-items-start">
                <BIconTagFill class="fs-3 me-3 flex-shrink-0" />

                <div>
                  <p class="fw-bold fs-5">+10000 compras exitosas</p>
                </div>
              </div>
              <div class="col d-flex align-items-start">
                <BIconPeopleFill class="fs-3 me-3 flex-shrink-0" />

                <div>
                  <p class="fw-bold fs-5">
                    +100 Empleados al servicio del cliente en distintas areas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-1 col-sm-12 mt-5"></div>
        <div
          class="
            col-md-4 col-sm-12
            justify-content-center
            d-flex
            align-items-center
            mt-5
          "
        >
          <img
            src="https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1581&q=80"
            class="img-fluid h-100 rounded"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.about h1,svg {
  color: $text;
}

</style>
