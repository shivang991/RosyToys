<template>
    <div class="grid grid-cols-2 gap-4 lg:gap-8">
        <router-link
            :to="{ name: 'ProductManager' }"
            class="py-8 px-4 bg-white rounded-md flex flex-col items-center space-y-8 cursor-pointer hover:bg-gray-100"
        >
            <h5 class="text-xl text-center">Administrador de Productos</h5>
            <BaseImage
                src="admin_product_manager.png"
                class="w-40 h-40 object-contain"
            ></BaseImage>
        </router-link>
        <router-link
            :to="{ name: 'UserManager' }"
            class="py-8 px-4 bg-white rounded-md flex flex-col items-center space-y-8 cursor-pointer hover:bg-gray-100"
        >
            <h5 class="text-xl text-center">Administrador de Usuarios</h5>
            <BaseImage
                src="admin_user_manager.png"
                class="w-40 h-40 object-contain"
            ></BaseImage>
        </router-link>
    </div>
</template>

<script setup>
import BaseImage from "@/components/global/BaseImage.vue";
</script>
