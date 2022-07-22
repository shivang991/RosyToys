<template>
    <div class="tab-3 my-5">
        <img
            src="https://images.unsplash.com/photo-1485575301924-6891ef935dcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            class="d-block rounded"
        />
        <div class="m-5">
            <h2 class="mb-5">¿Quienes están detrás de ARDA?</h2>
            <p class="lh-lg">
                Contamos con especialistas en el rubro de la mecánica así como
                en atención a clientes, soporte, ventas, y sistemas.
            </p>
            <p class="lh-lg">
                Nuestro personal es capacitado para apegarse a la filosofía de
                la empresa y respetarla al pie de la letra, ademas de filtrar a
                los mejores candidatos para pertenecer a nuestra gran familia.
            </p>
        </div>
        <div class="tab-3__people my-5">
            <div class="shadow-sm p-4 tab-3__card">
                <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                    class="rounded-circle"
                />
                <div class="ms-4">
                    <h4>Camila</h4>
                    <p>
                        Gerente de Ventas con 15 años de experiencia en el ramo,
                        se unio a esta gran familia desde 2015
                    </p>
                </div>
            </div>
            <div class="shadow-sm p-4 tab-3__card">
                <img
                    src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                    class="rounded-circle"
                />
                <div class="ms-4">
                    <h4>Matías</h4>
                    <p>
                        Gerente de Almacen, con amplia experiencia en logistica
                        y comercio internacional, gestiona proveedores y compras
                        internacionales, llego a la familia en 2018
                    </p>
                </div>
            </div>
            <div class="shadow-sm p-4 tab-3__card">
                <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                    class="rounded-circle"
                />
                <div class="ms-4">
                    <h4>Nicolás</h4>
                    <p>
                        Gerente de Sistemas con las certificaciones mas
                        recientes del mercado, cuenta con 9 años de experiencia
                        en el ramo, llego a la familia en 2017
                    </p>
                </div>
            </div>
            <div class="shadow-sm p-4 tab-3__card">
                <img
                    src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    class="rounded-circle"
                />
                <div class="ms-4">
                    <h4>Sara</h4>
                    <p>
                        Gerente de atención al cliente, la creadora de nuestra
                        filosofía y por lo tanto el estandarte de la misma.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tab-3 {
    $self: &;
    margin: 0 2rem;
    color: $text;
    img {
        max-height: 300px;
        width: 100%;
    }
    &__people {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 4rem;
        @include responsive-columns(md, 2);
        #{$self}__card {
            display: grid;
            grid-template-columns: 100px auto;
            img {
                height: 100px;
            }
        }
    }
    @include media-query(md) {
        margin: auto;
        max-width: 80vw;
    }
}
</style>
