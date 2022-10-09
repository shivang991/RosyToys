<template>
    <form @submit.prevent="handleSubmit" class="form">
        <div class="form__field">
            <label class="form-label mb-1">Correo electrónico</label>
            <input
                type="email"
                class="form-control fs-6"
                placeholder="Email"
                v-model="fields.email"
            />
        </div>
        <div class="form__field ms-4">
            <label class="form-label mb-1">Tu nombre</label>
            <input
                type="text"
                class="form-control fs-6"
                placeholder="Nombre"
                v-model="fields.name"
            />
        </div>
        <div class="form__field mt-4">
            <label class="form-label mb-1">Tu mensaje</label>
            <textarea
                class="form-control fs-6"
                placeholder="Mensaje"
                v-model="fields.message"
                rows="5"
            >
            </textarea>
        </div>
        <button class="form__field btn my-5 btn-primary fs-6">Continuar</button>
    </form>
</template>

<script setup>
import { reactive } from "vue";

const fields = reactive({
    name: "",
    email: "",
    message: "",
});

function handleSubmit() {
    console.log("handling form submition");
}
</script>


