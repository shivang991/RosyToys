<template>
    <base-modal v-model="shouldShowNotification" :duration="1000">
        <div class="py-4 px-5">
            <p
                class="text-center fs-2 text-success"
                v-if="data.type === 'success'"
            >
                <BIconCheckLg
                    class="content-box p-3 shadow-sm rounded-circle"
                />
            </p>
            <p
                class="text-center fs-2 text-danger"
                v-if="data.type === 'error'"
            >
                <BIconEmojiFrown
                    class="content-box p-3 shadow-sm rounded-circle"
                />
            </p>
            <h4 class="mt-4">{{ data.message }}</h4>
        </div>
    </base-modal>
</template>

<script setup>
import { computed, reactive, ref } from "vue";

const shouldShowNotification = ref(false);

const data = reactive({
    type: null,
    message: null,
});

function setData(type, message) {
    data.type = type;
    data.message = message;
    console.log("mutating shouldshownotification");
    shouldShowNotification.value = Boolean(type && message);
}

const isDataNotNull = computed(() => data.type && data.message);

const timeLag = 100;

window.addEventListener("notificationreq", (event) => {
    if (typeof event.detail === "object") {
        const { type, message } = event.detail;
        if (type && message) {
            console.log("calling setdata");
            if (isDataNotNull.value) {
                setData(null, null);
                setTimeout(() => setData(type, message), timeLag);
            } else setData(type, message);
        }
    }
});
</script>
