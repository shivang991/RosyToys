<template>
    <Teleport to="#app-modals">
        <Transition name="modal">
            <div
                class="mt-8 w-80 mx-auto z-20 bg-slate-100 shadow-xl rounded-md overflow-hidden"
                v-if="shouldShowNotification"
            >
                <div class="w-full flex justify-end">
                    <button
                        @click="setData(null, null)"
                        class="px-4 py-2 text-xl text-slate-900"
                    >
                        <FontAwesomeIcon icon="fa fa-times"></FontAwesomeIcon>
                    </button>
                </div>

                <div
                    v-if="data.type === 'error'"
                    class="pb-8 flex space-x-4 px-8 border-b-2 border-red-600"
                >
                    <p class="text-red-600">
                        <FontAwesomeIcon
                            icon="fa fa-exclamation-triangle"
                        ></FontAwesomeIcon>
                    </p>
                    <p class="text-red-600">
                        {{ data.message }}
                    </p>
                </div>
                <div
                    v-else
                    class="pb-8 flex space-x-4 px-8 border-b-2 border-slate-500"
                >
                    <p class="text-slate-900">
                        <FontAwesomeIcon icon="fa fa-check"></FontAwesomeIcon>
                    </p>
                    <p class="text-slate-900">
                        {{ data.message }}
                    </p>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { reactive, ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const shouldShowNotification = ref(false);

const data = reactive({
    type: null,
    message: null,
});

function setData(type, message) {
    data.type = type;
    data.message = message;
    shouldShowNotification.value = Boolean(type && message);
}

const timeLag = 100;

window.addEventListener("notificationreq", (event) => {
    if (typeof event.detail === "object") {
        const { type, message } = event.detail;
        if (type && message) {
            if (data.type && data.message) {
                setData(null, null);
                setTimeout(() => setData(type, message), timeLag);
            } else setData(type, message);
        }
    }
});
</script>
