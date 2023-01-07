<template>
    <div>
        <div class="py-12">
            <p class="lg:max-w-2xl px-4 mx-auto max-w-xl mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quia consequuntur ab ipsum quidem neque, a est
                debitis dicta itaque obcaecati voluptas provident laborum
                reiciendis saepe eveniet iusto perspiciatis fugiat. Itaque
                mollitia laboriosam assumenda amet. Explicabo id maxime, sequi
                placeat accusantium quas optio ullam magnam vitae consequuntur
                dignissimos praesentium itaque quibusdam voluptatibus, cum
                deserunt dicta repudiandae totam, alias ipsum distinctio. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Recusandae
                quia consequuntur ab ipsum quidem neque, a est debitis dicta
                itaque obcaecati voluptas provident laborum reiciendis saepe
                eveniet iusto perspiciatis fugiat. Itaque mollitia laboriosam
                assumenda amet.
            </p>
            <div
                class="lg:flex w-11/12 lg:w-3/4 mx-auto lg:space-x-8 justify-center mb-20"
            >
                <div class="lg:max-w-md mb-8 lg:mb-0">
                    <h2 class="text-4xl font-semibold font-serif mb-8">
                        Nuestra misión
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum commodi omnis nemo sunt illo reiciendis animi,
                        quaerat, illum ut consequuntur quidem optio expedita
                        placeat vitae fugit eaque aliquam hic! Quia quos
                        eligendi doloremque explicabo magni, similique nobis
                        dolores voluptatem aut?
                    </p>
                </div>
                <div class="hidden lg:block w-10 h-10">
                    <base-image
                        src="heart.png"
                        class="w-full h-full rotate-12"
                    ></base-image>
                </div>
                <div class="lg:w-80 h-80">
                    <base-image
                        class="w-full h-full rounded-md object-cover"
                        src="https://images.pexels.com/photos/627764/pexels-photo-627764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        is-external
                    ></base-image>
                </div>
            </div>
            <div
                class="lg:flex w-11/12 lg:w-3/4 mx-auto lg:space-x-8 justify-center mb-20"
            >
                <base-image
                    class="w-full lg:w-80 rounded-md h-80 object-cover"
                    src="https://images.pexels.com/photos/236214/pexels-photo-236214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    is-external
                ></base-image>
                <base-image
                    src="sparkle.png"
                    class="hidden lg:block w-10 h-10"
                ></base-image>
                <div class="lg:max-w-md mt-8 lg:mt-0">
                    <h2 class="text-4xl font-semibold font-serif mb-8">
                        Nuestra visión
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum commodi omnis nemo sunt illo reiciendis animi,
                        quaerat, illum ut consequuntur quidem optio expedita
                        placeat vitae fugit eaque aliquam hic! Quia quos
                        eligendi doloremque explicabo magni, similique nobis
                        dolores voluptatem aut?
                    </p>
                </div>
            </div>
            <h2
                class="text-4xl font-serif flex items-center space-x-2 font-semibold justify-center"
            >
                <base-image
                    src="heart.png"
                    class="rotate-12 w-10 h-10"
                ></base-image>
                <span> Nuestra gente </span>
            </h2>
            <ul
                class="grid grid-cols-2 md:grid-cols-3 w-11/12 lg:w-3/4 mx-auto gap-2 sm:gap-8 lg:gap-12 py-12"
            >
                <li
                    v-for="(member, index) in teamMembers"
                    :key="index"
                    class="grid rounded-md shadow-xl overflow-hidden"
                >
                    <base-image
                        class="w-full h-40 sm:h-60 object-cover col-start-1 row-start-1"
                        :src="member.image"
                        is-external
                    ></base-image>
                    <p
                        class="self-end py-2 px-4 col-start-1 row-start-1 font-semibold bg-gray- text-gray-100"
                    >
                        {{ member.name }}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import BaseImage from "@/components/global/BaseImage.vue";

const teamMembers = [
    {
        name: "Jacob Jones",
        image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Jerome Bell",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Wade Warren",
        image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Eleanor Pena",
        image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Annette Black",
        image: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Cameron Williamson",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Arlene McCoy",
        image: "https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Courtney Henry",
        image: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Robert Fox",
        image: "https://images.pexels.com/photos/3027243/pexels-photo-3027243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];
</script>
