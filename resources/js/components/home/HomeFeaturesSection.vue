<template>
    <div class="features-section">
        <div class="mx-auto text-md-center features-section__text">
            <p class="mb-0">¿Por qué Elegirnos?</p>
            <h2>Las principales características</h2>
            <div class="home-pg__decoration-bar mt-4 mb-5"></div>
            <p>
                Somos una empresa con alto sentido de servicio hacia el cliente
                enfocándonos en cuatro características clave que hacen a la
                gente tenernos como su proveedor de confianza
            </p>
        </div>
        <div class="container features-section__list py-5">
            <div class="row gx-md-5">
                <ul class="col">
                    <li
                        class="d-flex flex-row-reverse flex-md-row py-2 align-items-start"
                        v-for="(feature, index) in features"
                        :key="index"
                    >
                        <div class="text-md-end ms-3 ms-md-0 me-md-4">
                            <div
                                class="d-flex flex-row-reverse flex-md-row justify-content-end align-items-center mb-1"
                            >
                                <span>{{ feature.title }}</span>
                                <div
                                    class="features-section__decoration-balls me-2 ms-md-2 me-md-0"
                                >
                                    <div class="bg-primary"></div>
                                    <div class="bg-dark"></div>
                                </div>
                            </div>
                            <small>{{ feature.desc }}</small>
                        </div>
                        <p class="fs-2 lh-1">
                            <component :is="feature.icon"></component>
                        </p>
                    </li>
                </ul>
                <div class="col d-none d-md-flex align-items-center">
                    <img :src="busImgURL" class="img-fluid" />
                </div>
            </div>
            <div class="d-none d-md-flex row">
                <img
                    :src="arrowImgURL"
                    class="img-fluid w-25 flip-x flip-y mx-auto"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
const features = [
    {
        title: "Amplia Variedad",
        desc: "Contamos con un catalogo basto para poder satisfacer la demanda de cualquier cliente.",
        icon: "BIconCart",
    },
    {
        title: "Calidad Inmejorable",
        desc: "Contamos con proveedores de primera linea con las piezas de mejor calidad p1ra asegurar la mayor satisfacción de nuestros clientes",
        icon: "BIconBagCheck",
    },
    {
        title: "Precios Inmejorables",
        desc: "Ofrecemos a nuestros clientes los precios adecuados para que puedan ahorrar al comprar con nosotros.",
        icon: "BIconTags",
    },
    {
        title: "Atención Al Cliente",
        desc: "Contamos con un equipo interno que nos ayuda a dar respuesta pronta a toda inquietud del cliente de manera rápida, breve y eficaz.",
        icon: "BIconShieldCheck",
    },
];
const busImgURL = window.asset("images/red_bus.png");
const arrowImgURL = window.asset("images/arrow.svg");
</script>

