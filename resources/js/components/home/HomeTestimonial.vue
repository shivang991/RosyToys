<template>
    <div class="grid" v-if="currentTestimonial">
        <BaseImage src="bg-arrow.png" class="col-start-1 row-start-1 w-96 relative"></BaseImage>
        <div class="col-start-1 row-start-1 bg-primary w-80 h-60 mt-8"></div>
        <div
            class="w-3/4 justify-self-center col-start-1 row-start-1 flex justify-between space-x-8"
        >
            <div class="self-end mt-12">
                <BaseImage
                    is-external
                    v-if="currentTestimonial.image_url"
                    :src="currentTestimonial.image_url"
                    class="w-80 h-60 object-cover"
                />
                <BaseImage
                    v-else
                    src="/user.jpg"
                    class="w-80 h-60 object-cover"
                ></BaseImage>
                <div class="flex text-gray-600 text-2xl space-x-4 mt-4">
                    <button
                        class="disabled:opacity-50"
                        @click="showPrev"
                        :disabled="currentTestimonial.index < 1"
                    >
                        <FontAwesomeIcon
                            class="-scale-x-100"
                            icon="fa-arrow-right"
                        ></FontAwesomeIcon>
                    </button>
                    <button
                        class="disabled:opacity-50"
                        @click="showNext"
                        :disabled="
                            currentTestimonial.index >=
                            allTestimonials.length - 1
                        "
                    >
                        <FontAwesomeIcon
                            icon="fa-arrow-right"
                        ></FontAwesomeIcon>
                    </button>
                </div>
            </div>
            <div class="max-w-lg">
                <h2 class="text-4xl font-serif">Testimonials</h2>
                <div class="w-20 h-px bg-black mb-8"></div>
                <p class="mb-8">{{ currentTestimonial.message }}</p>
                <h5 class="text-xl">{{ currentTestimonial.name }}</h5>
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
const currentTestimonial = ref(null);
function showNext() {
    const newIndex = currentTestimonial.value.index + 1;
    if (newIndex >= allTestimonials.value.length) return;
    currentTestimonial.value = {
        ...allTestimonials.value[newIndex],
        index: newIndex,
    };
}
function showPrev() {
    const newIndex = currentTestimonial.value.index - 1;
    if (newIndex < 0) return;
    currentTestimonial.value = {
        ...allTestimonials.value[newIndex],
        index: newIndex,
    };
}
axios.get("/api/review/random").then(({ data: testimonials }) => {
    // if (testimonials && testimonials.data.length) {
    //     currentTestimonial.value = { ...testimonials.data[0], index: 0 };
    //     allTestimonials.value = testimonials.data;
    // }
    allTestimonials.value = [
        {
            image_url:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Angelina Denver",
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel vitae
                        nec non in. Risus in platea libero laoreet pellentesque vel auctor.
                        Varius enim egestas adipiscing sed ultricies vestibulum egestas.
                        Ornare felis, fringilla purus gravida quam vestibulum proin.`,
            index: 0,
        },
    ];
    currentTestimonial.value = allTestimonials.value[0];
});
</script>
