<template>
    <div>
        <base-image src="about_top.jpg" class="w-full"></base-image>
        <div class="py-20">
            <h2 class="text-4xl font-semibold mb-4 text-center">Nosotros</h2>
            <ul class="w-11/12 lg:w-1/2 mx-auto mb-32 list-disc list-inside text-lg space-y-4">
                <li>
                    Somos una empresa familiar de reciente creación con capital
                    100% mexicano , nos dedicamos a la venta y distribución de
                    juguete económico para todo tipo de evento y epoca del año
                    con cobertura en todo México.
                </li>
                <li>
                    Actualmente contamos con tiendas física Ubicada en la
                    Mercado Sonora en la Ciudad de México y nuestra Bodega en la
                    Ciudad de México, nos distinguimos por por ofrecer el mejor
                    servicio, surtido y una gran experiencia a nuestros
                    clientes.
                </li>
            </ul>
            <div
                class="lg:flex w-11/12 lg:w-1/2 mx-auto lg:space-x-8 justify-center mb-20"
            >
                <div class="mb-8 lg:mb-0">
                    <h2 class="text-4xl font-semibold mb-8">Nuestra misión</h2>
                    <p>
                        Somos una empresa rentable dedicada a la
                        comercialización de juguete económico comprometida a
                        productos satisfacer las necesidades del consumidor
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
                        y eficiente mas exitosas de Méxicoy tener una
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
