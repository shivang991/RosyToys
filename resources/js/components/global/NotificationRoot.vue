<template>
    <Teleport to="#app-modals">
        <Transition name="modal">
            <div
                class="fixed mt-8 w-80 mx-auto z-20 shadow-xl rounded-md overflow-hidden"
                :class="data.type === 'error' ? 'bg-red-50' : 'bg-sky-100'"
                v-if="shouldShowNotification"
            >
                <div
                    v-if="data.type === 'compact'"
                    class="w-full rounded-md bg-gradient-to-r from-orange-600 to-pink-700 px-4 py-2 z-10 shadow-xl flex space-x-2"
                >
                    <p class="text-pink-700">
                        <FontAwesomeIcon icon="fa fa-check"></FontAwesomeIcon>
                    </p>
                    <p class="font-semibold text-sky-100">
                        {{ data.message }}
                    </p>
                </div>
                <template v-else>
                    <div class="w-full flex justify-end">
                        <button
                            @click="setData(null, null)"
                            class="px-4 py-2 text-xl"
                        >
                            <FontAwesomeIcon
                                icon="fa fa-times"
                            ></FontAwesomeIcon>
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
                        <p>
                            <FontAwesomeIcon
                                icon="fa fa-check"
                            ></FontAwesomeIcon>
                        </p>
                        <p>
                            {{ data.message }}
                        </p>
                    </div>
                </template>
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

let compactFadeTimeoutId;

function setData(type, message) {
    data.type = type;
    data.message = message;
    shouldShowNotification.value = Boolean(type && message);
    if (data.type === "compact") {
        clearTimeout(compactFadeTimeoutId);
        compactFadeTimeoutId = setTimeout(() => setData(null, null), 2000);
    }
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
