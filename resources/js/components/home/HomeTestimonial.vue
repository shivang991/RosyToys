<template>
    <div class="py-12 bg-slate-900">
        <div class="w-3/4 mx-auto">
            <h5 class="text-slate-200 mb-8">Customer Review</h5>
            <div class="grid">
                <div class="flex space-x-8 row-start-1 col-start-1 w-80">
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                        class="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                        <p class="text-xl text-slate-200 mb-2">
                            Camila Martinez
                        </p>
                        <p class="flex space-x-2 text-amber-500">
                            <FontAwesomeIcon
                                icon="fa-star"
                                v-for="i in 5"
                                :key="i"
                            ></FontAwesomeIcon>
                        </p>
                    </div>
                </div>
                <div
                    class="row-start-2 col-start-1 col-span-2 text-slate-200 bg-slate-900 relative max-w-lg rounded-xl py-8"
                >
                    Colors of the Toy is Very Bright n vivid..Strudy n Heavy..
                    Easy to Hold around the waist.. Movements: For All d toys
                    Head n Waist Can be Rotated..wrist for spidy n black panther
                    not for Hulk.. Knee and foot cannot be Rotated or flexed..
                </div>

                <img
                    :src="dummyTestimonialImage"
                    class="row-start-1 row-span-2 col-start-2 col-span-2 w-32 h-32 rounded-xl"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const dummyTestimonialImage = window.asset("images/home_testimonial.jpg");
</script>
