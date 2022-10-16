<template>
    <div>
        <base-image src="about_top.jpg" class="w-full mb-8"></base-image>
        <div class="py-12">
            <h2 class="text-2xl font-semibold text-center mb-8">
                Anonymous Toys
            </h2>
            <p class="lg:max-w-4xl px-4 mx-auto max-w-xl">
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
                assumenda amet. Explicabo id maxime, sequi placeat accusantium
                quas optio ullam magnam vitae consequuntur dignissimos
                praesentium itaque quibusdam voluptatibus, cum deserunt dicta
                repudiandae totam, alias ipsum distinctio.
            </p>
            <p class="lg:max-w-4xl px-4 mx-auto mb-20 max-w-xl">
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
                eveniet iusto perspiciatis fugiat.
            </p>
            <div
                class="border-y-4 border-slate-900 py-8 px-8 md:flex md:space-x-12 bg-slate-200 justify-center mb-12"
            >
                <base-image
                    src="about_value.png"
                    class="w-80 object-contain mb-8 md:mb-0 mx-auto"
                ></base-image>
                <div class="max-w-lg mx-auto">
                    <h4 class="text-xl font-semibold text-center mb-8">
                        Our Value's
                    </h4>
                    <ul class="space-y-4 list-disc">
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tenetur et explicabo similique quibusdam
                            provident. Dolores cum iste odit quia quidem!
                        </li>
                        <li>
                            Doloribus odio dolor officiis culpa eius dolore quis
                            cumque ipsa, accusamus eligendi accusantium dicta
                            labore iure voluptas vero modi, ducimus non,
                            explicabo sed excepturi consectetur dolorum.
                        </li>
                        <li>
                            Voluptatem pariatur dicta error aspernatur iure!
                        </li>
                    </ul>
                </div>
            </div>
            <div
                class="border-y-4 border-amber-500 py-8 px-8 md:flex md:space-x-12 bg-amber-100 justify-center mb-20"
            >
                <div class="max-w-lg mx-auto">
                    <h4 class="text-xl font-semibold text-center mb-8">
                        Our Mission
                    </h4>
                    <ul class="space-y-4 list-disc">
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tenetur et explicabo similique quibusdam
                            provident. Dolores cum iste odit quia quidem!
                        </li>
                        <li>
                            Doloribus odio dolor officiis culpa eius dolore quis
                            cumque ipsa, accusamus eligendi accusantium dicta
                            labore iure voluptas vero modi, ducimus non,
                            explicabo sed excepturi consectetur dolorum.
                        </li>
                        <li>
                            Voluptatem pariatur dicta error aspernatur iure!
                        </li>
                    </ul>
                </div>
                <base-image
                    src="about_mission.png"
                    class="w-80 object-contain mt-8 md:mt-0 mx-auto"
                ></base-image>
            </div>
            <h2 class="text-2xl font-semibold text-center mb-12">
                Meet our Team
            </h2>
            <ul
                class="grid grid-cols-2 md:grid-cols-3 w-11/12 lg:w-3/4 mx-auto gap-2 sm:gap-8 lg:gap-12"
            >
                <li
                    v-for="(member, index) in teamMembers"
                    :key="index"
                    class="bg-slate-100 flex flex-col items-center px-4 sm:px-8 py-12 shadow-sm rounded-tl-md rounded-tr-2xl rounded-bl-2xl rounde-br-md"
                >
                    <base-image
                        class="w-40 h-40 sm:w-60 sm:h-60 object-cover mb-4 rounded"
                        :src="member.image"
                        is-external
                    ></base-image>
                    <p class="text-center">{{ member.name }}</p>
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
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
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
        image: "https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
