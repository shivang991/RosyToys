<template>
    <div class="text-center logo-section">
        <div class="logo-section__text mx-auto">
            <p class="text-start text-lg-center">¿Por que ARDA?</p>
            <h2 class="text-start text-lg-center">
                Ofrecemos Calidad, Atencion y Diversidad
            </h2>
            <p class="my-4 mx-auto lh-lg text-start text-lg-center">
                Contamos con un amplio catalogo asi como recursos digitales para
                que el cliente pueda hacer uso de su producto obteniendo el
                mayor provecho, Asi como tambien nos preocupamos por que el
                cliente este conforme con nosotros y siga viendonos como la
                mejor opcion en el mercado.
            </p>
            <div class="home-pg__decoration-bar"></div>
        </div>
        <div class="d-none d-md-flex w-50 mx-auto overflow-hidden mt-5 pt-4">
            <img :src="arrowImgURL" class="w-25 d-block" />
            <div class="flex-grow-1"></div>
            <img :src="arrowImgURL" class="w-25 d-block flip-x" />
        </div>
        <div
            class="d-flex mb-5 mt-5 mt-md-2 py-5 pt-md-0 mx-auto justify-content-around logo-section__text"
        >
            <div class="text-end w-25">
                <div class="d-flex flex-column mb-5">
                    <h3 class="mb-0">25+</h3>
                    <p>años de experiencia</p>
                    <div class="home-pg__decoration-balls align-self-end">
                        <div class="bg-primary"></div>
                        <div class="bg-dark"></div>
                    </div>
                </div>
                <div class="d-flex flex-column">
                    <h3 class="mb-0">3000+</h3>
                    <p>Clientes satisfechos</p>
                    <div class="home-pg__decoration-balls align-self-end">
                        <div class="bg-primary"></div>
                        <div class="bg-dark"></div>
                    </div>
                </div>
            </div>
            <div
                class="d-none d-md-block flex-grow-1 mx-3 mx-lg-4 pt-4 px-3 px-lg-4 px-xl-5 logo-section__logo"
            >
                <img :src="logoURL" />
            </div>
            <div class="text-start w-25 ms-4 ms-md-0">
                <div class="d-flex flex-column mb-5">
                    <h3 class="mb-0">10000+</h3>
                    <p>compras exitosas</p>
                    <div class="home-pg__decoration-balls">
                        <div class="bg-primary"></div>
                        <div class="bg-dark"></div>
                    </div>
                </div>
                <div class="d-flex flex-column">
                    <h3 class="mb-0">100+</h3>
                    <p>Empleados al servicio del cliente en distintas areas</p>
                    <div class="home-pg__decoration-balls">
                        <div class="bg-primary"></div>
                        <div class="bg-dark"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const arrowImgURL = window.asset("images/arrow.svg");
const logoURL = window.asset("images/logo_rect.png");
</script>


