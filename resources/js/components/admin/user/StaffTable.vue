<template>
    <div v-if="data">
        <div class="flex mb-8 justify-between px-12">
            <h5 class="text-xl py-2">Empleados / Usuarios:</h5>
            <div class="flex">
                <button
                    class="px-4 flex items-center space-x-2 text-sky-600 border border-r-transparent border-sky-100 rounded-l-md"
                    @click="shouldShowAddModal = true"
                >
                    <span>Agregar</span>
                    <FontAwesomeIcon
                        icon="fa fa-plus"
                        class="text-sm"
                    ></FontAwesomeIcon>
                </button>
                <button
                    class="px-4 flex items-center space-x-2 text-sky-600 border border-sky-100 group"
                    :disabled="selectedStaff === null"
                    @click="shouldShowEditModal = true"
                >
                    <span class="group-disabled:opacity-50">Editar</span>
                    <FontAwesomeIcon
                        icon="fa fa-pen"
                        class="text-sm group-disabled:opacity-50"
                    ></FontAwesomeIcon>
                </button>
                <button
                    class="px-4 flex items-center space-x-2 text-red-600 border border-red-100 border-l-transparent rounded-r-md group"
                    :disabled="selectedStaff === null"
                    @click="shouldShowRemoveModal = true"
                >
                    <span class="group-disabled:opacity-50">Eliminar</span>
                    <FontAwesomeIcon
                        icon="fa fa-times"
                        class="text-sm group-disabled:opacity-50"
                    ></FontAwesomeIcon>
                </button>
            </div>
        </div>
        <div class="grid">
            <div class="col-start-1 row-start-1 h-16 bg-sky-100"></div>
            <table class="mx-12 col-start-1 row-start-1">
                <tr class="h-16 px-12">
                    <th></th>
                    <th class="text-left px-4">Nombre</th>
                    <th class="text-left px-4">Correo</th>
                    <th class="text-left px-4">Creado en</th>
                </tr>
                <tr
                    v-for="(staff, index) in data"
                    :key="index"
                    class="hover:bg-sky-100 cursor-pointer border-b"
                    :class="
                        selectedStaff === staff
                            ? 'border-transparent bg-sky-100 shadow rounded'
                            : 'border-sky-600'
                    "
                    @click="selectedStaff = staff"
                >
                    <td class="px-4 py-2">
                        <p
                            class="text-slate-500 leading-10 w-10 text-center"
                            v-if="selectedStaff === staff"
                        >
                            <FontAwesomeIcon
                                icon="fa fa-check-square"
                            ></FontAwesomeIcon>
                        </p>
                        <div
                            v-else
                            class="rounded-full shadow overflow-hidden w-10 h-10"
                        >
                            <BaseImage
                                v-if="staff.profile_image_url"
                                :src="staff.profile_image_url"
                                is-external
                                class="block object-cover"
                            ></BaseImage>
                            <BaseImage
                                v-else
                                src="/user.jpg"
                                class="block"
                            ></BaseImage>
                        </div>
                    </td>
                    <td class="px-4 py-2">{{ staff.name }}</td>
                    <td class="px-4 py-2">{{ staff.email }}</td>
                    <td class="px-4 py-2">
                        {{ formatDate(staff.created_at) }}
                    </td>
                </tr>
            </table>
        </div>
        <AddStaffModal
            @success="emit('update')"
            v-model:should-show="shouldShowAddModal"
        ></AddStaffModal>
        <RemoveStaffModal
            @success="emit('update')"
            v-model:should-show="shouldShowRemoveModal"
            :staff="selectedStaff"
        ></RemoveStaffModal>
        <EditStaffModal
            @success="emit('update')"
            v-model:should-show="shouldShowEditModal"
            :staff="selectedStaff"
        ></EditStaffModal>
    </div>
</template>

<script setup>
import BaseImage from "@/components/global/BaseImage.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, watch } from "vue";
import AddStaffModal from "./AddStaffModal.vue";
import RemoveStaffModal from "./RemoveStaffModal.vue";
import EditStaffModal from "./EditStaffModal.vue";
import { formatDate } from "@/plugins/Formatters";

defineProps({
    data: {
        type: Array, // {id,name,email,profile_image_url,created_at}[]
        default: null,
    },
});

const emit = defineEmits(["update"]);

const selectedStaff = ref(null); // {id,name,email,profile_image_url,created_at}

const shouldShowAddModal = ref(false);
const shouldShowRemoveModal = ref(false);
const shouldShowEditModal = ref(false);

watch(
    [shouldShowAddModal, shouldShowRemoveModal, shouldShowEditModal],
    (newVal) => {
        if (newVal.some((e) => e)) scrollTo({ top: 0, behavior: "smooth" });
    }
);
</script>
