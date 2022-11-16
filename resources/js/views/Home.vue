<template>
    <main class="bg-gray-100">
        <div class="grid">
            <div class="w-3/4 mx-auto mb-20 col-start-1 row-start-1">
                <div class="grid">
                    <div class="col-start-1 row-start-1 py-20 flex bg-primary">
                        <div class="w-80"></div>
                        <div>
                            <h1
                                class="text-6xl mb-2 max-w-xl text-white font-serif"
                            >
                                Are you planning a kermes or a party?
                            </h1>
                            <div class="w-40 h-px my-4 bg-sky-600"></div>
                            <p class="mb-12 max-w-md">
                                Here we offer a wide catalog ofeconomic toysfrom
                                $ 1.00 peso for prizes, gifts or for the piñata.
                            </p>
                            <div class="flex space-x-4">
                                <button
                                    class="text-xl flex items-center space-x-4 text-white bg-sky-600 py-2 px-8"
                                >
                                    <FontAwesomeIcon
                                        class="text-sm"
                                        icon="fa-cart-shopping"
                                    ></FontAwesomeIcon>
                                    <span>Add to cart</span>
                                </button>
                                <button
                                    class="text-xl border-2 border-sky-600 py-2 px-8 font-serif"
                                >
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>
                    <BaseImage
                        src="toy.png"
                        class="w-80 col-start-1 row-start-1 self-end translate-y-12 rotate-12"
                    ></BaseImage>
                </div>
                <div class="py-12"></div>
                <HomePromotions></HomePromotions>
            </div>
            <BaseImage
                src="bg-arrow.png"
                class="col-start-1 row-start-1 w-1/2 justify-self-end -translate-y-8"
            ></BaseImage>
        </div>
        <HomeTrending class="mt-20"></HomeTrending>
        <HomeTestimonial class="my-20"></HomeTestimonial>
        <div class="bg-sky-600 py-8">
            <div class="max-w-xl mx-auto grid grid-cols-5 gap-8">
                <div
                    class="p-4 bg-white rounded-md"
                    v-for="logoSrc in sponserLogos"
                >
                    <BaseImage is-external :src="logoSrc"></BaseImage>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import HomeTestimonial from "@/components/home/HomeTestimonial.vue";
import HomePromotions from "@/components/home/HomePromotions.vue";
import HomeTrending from "@/components/home/HomeTrending.vue";
import BaseImage from "@/components/global/BaseImage.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const sponserLogos = [
    "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/verizon-logo.png",
    "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/oracle-logo.png",
    "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/mercedes-benz-logo.png",
    "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/ge-logo.png",
    "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/nike-logo.png",
    "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/intel-logo.png",
    "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/ibm-logo.png",
    "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/sap-logo.png",
    "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/visa-logo.png",
    "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/pepsi-logo.png",
];
</script>
