<template>
    <div class="py-12 bg-slate-900" v-if="currentTestiomial">
        <div class="w-3/4 mx-auto">
            <div class="flex items-center text-slate-200 space-x-4 mb-8">
                <button
                    class="disabled:opacity-50"
                    @click="showPrev"
                    :disabled="currentTestiomial.index < 1"
                >
                    <FontAwesomeIcon
                        class="-scale-x-100"
                        icon="fa-chevron-right"
                    ></FontAwesomeIcon>
                </button>
                <h5 class="text-slate-200">Customer Reviews</h5>
                <button
                    class="disabled:opacity-50"
                    @click="showNext"
                    :disabled="
                        currentTestiomial.index >= allTestimonials.length - 1
                    "
                >
                    <FontAwesomeIcon icon="fa-chevron-right"></FontAwesomeIcon>
                </button>
            </div>
            <div class="grid">
                <Transition name="fade">
                    <div
                        :key="currentTestiomial"
                        class="col-start-1 row-start-1"
                    >
                        <div class="flex space-x-8 w-max sm:w-80">
                            <BaseImage
                                is-external
                                v-if="currentTestiomial.image_url"
                                :src="currentTestiomial.image_url"
                                class="w-16 h-16 rounded-full object-cover shadow-xl"
                            />
                            <BaseImage
                                v-else
                                src="/user.jpg"
                                class="w-16 h-16 rounded-full object-cover"
                            ></BaseImage>
                            <div>
                                <p class="text-xl text-slate-200 mb-2">
                                    {{ currentTestiomial.name }}
                                </p>
                                <p class="flex space-x-2 text-amber-500">
                                    <FontAwesomeIcon
                                        v-for="i in 5"
                                        :key="i"
                                        :icon="
                                            i > currentTestiomial.stars
                                                ? 'far fa-star'
                                                : 'fa fa-star'
                                        "
                                    ></FontAwesomeIcon>
                                </p>
                            </div>
                        </div>
                        <div
                            class="text-slate-200 relative max-w-lg rounded-xl py-8 mb-4"
                        >
                            {{ currentTestiomial.message }}
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BaseImage from "@/components/global/BaseImage.vue";
import useAxios from "@/plugins/Axios";
import { ref } from "vue";

const axios = useAxios();

const allTestimonials = ref(null);

const currentTestiomial = ref(null);

function showNext() {
    const newIndex = currentTestiomial.value.index + 1;
    if (newIndex >= allTestimonials.value.length) return;

    currentTestiomial.value = {
        ...allTestimonials.value[newIndex],
        index: newIndex,
    };
}
function showPrev() {
    const newIndex = currentTestiomial.value.index - 1;
    if (newIndex < 0) return;

    currentTestiomial.value = {
        ...allTestimonials.value[newIndex],
        index: newIndex,
    };
}

axios.get("/api/review/random").then(({ data: testimonials }) => {
    if (testimonials && testimonials.data.length) {
        currentTestiomial.value = { ...testimonials.data[0], index: 0 };
        allTestimonials.value = testimonials.data;
    }
});
</script>
