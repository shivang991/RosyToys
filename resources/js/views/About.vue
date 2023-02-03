<template>
    <div>
        <base-image
            src="about_top.jpg"
            class="w-full h-60 object-cover"
        ></base-image>
        <div class="py-20">
            <h2 class="text-4xl font-semibold mb-4 text-center">Nosotros</h2>
            <p class="w-11/12 lg:w-1/2 mx-auto mb-32 text-lg text-center">
                Somos una empresa familiar de reciente creación con capital 100%
                mexicano, nos dedicamos a la venta y distribución de juguete
                económico para todo tipo de evento y época del año con cobertura
                en todo México.
                <br />
                Actualmente contamos con tienda física Ubicada en el Mercado
                Sonora y nuestra Bodega en la Ciudad de México, nos distinguimos
                por ofrecer el mejor servicio, surtido y una gran experiencia a
                nuestros clientes.
            </p>
            <div
                class="lg:flex w-11/12 lg:w-1/2 mx-auto lg:space-x-8 justify-center mb-20"
            >
                <div class="mb-8 lg:mb-0">
                    <h2 class="text-4xl font-semibold mb-8">Nuestra misión</h2>
                    <p>
                        Somos una empresa rentable dedicada a la
                        comercialización de juguete económico comprometida a
                        satisfacer las necesidades del consumidor.
                    </p>
                </div>
                <div class="lg:w-80 h-80">
                    <base-image
                        class="w-full h-full rounded-md object-cover"
                        src="about_mission.jpg"
                    ></base-image>
                </div>
            </div>
            <div
                class="lg:flex w-11/12 lg:w-1/2 mx-auto lg:space-x-8 justify-center mb-20"
            >
                <base-image
                    class="w-full lg:w-80 rounded-md h-80 object-cover"
                    src="about_vision.jpg"
                ></base-image>
                <base-image
                    src="sparkle.png"
                    class="hidden lg:block w-10 h-10"
                ></base-image>
                <div class="mt-8 lg:mt-0">
                    <h2 class="text-4xl font-semibold mb-8">Nuestra visión</h2>
                    <p>
                        Juguetes Rosy se proyecta como una empresa familiar ágil
                        y eficiente más exitosa de México y tener una
                        distribuidora a nivel nacional de juguetes.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseImage from "@/components/global/BaseImage.vue";
</script>
