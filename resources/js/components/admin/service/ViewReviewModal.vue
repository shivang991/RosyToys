<template>
    <base-modal
        :should-show="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <div class="max-w-lg" v-if="review">
            <div class="grid">
                <div class="col-start-1 row-start-1 text-slate-500 opacity-25 text-4xl p-4">
                    <FontAwesomeIcon icon="fa fa-quote-left" ></FontAwesomeIcon>
                </div>
                <p class="col-start-1 row-start-1 px-4 py-8 text-slate-900">
                    {{ review.message }}
                </p>
            </div>
            <div class="grid">
                <div class="row-start-1 col-start-1 h-10"></div>
                <div class="row-start-2 col-start-1 bg-slate-900 h-24"></div>
                <div
                    class="row-start-1 col-start-1 row-span-2 justify-self-center flex flex-col items-center"
                >
                    <BaseImage
                        :src="review.image_url"
                        class="w-20 h-20 rounded-full shadow-xl object-cover"
                        is-external
                    ></BaseImage>
                    <p class="text-slate-200 font-semibold text-center mt-2">
                        {{ review.name }}
                    </p>
                </div>
            </div>
        </div>
    </base-modal>
</template>

<script setup>
import BaseImage from "@/components/global/BaseImage.vue";
import BaseModal from "@/components/global/BaseModal.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
    review: {
        type: Object, // {name,message,image_url}
        default: null,
    },
});
const emit = defineEmits(["update:shouldShow"]);
</script>
