<template>
    <div>
        <about-head></about-head>
        <div class="container justify-content-center">
            <div class="row justify-content-center align-items-center">
                <div class="nav-about mt-5 col-8">
                    <ul
                        class="nav nav-fill flex-column flex-sm-row justify-content-center"
                    >
                        <li class="nav-item">
                            <a
                                class="fs-5 fw-bold flex-sm-fill text-sm-center nav-link"
                                @click.prevent="currentTab = AboutTab1"
                                :class="{ active: currentTab === AboutTab1 }"
                            >
                                ¿Por que ARDA?
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="fs-5 fw-bold flex-sm-fill text-sm-center nav-link"
                                @click.prevent="currentTab = AboutTab2"
                                :class="{ active: currentTab === AboutTab2 }"
                            >
                                Nuestra Filosofía
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="fs-5 fw-bold flex-sm-fill text-sm-center nav-link"
                                @click.prevent="currentTab = AboutTab3"
                                :class="{ active: currentTab === AboutTab3 }"
                            >
                                ¿Porqué nosotros?
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <component :is="currentTab"></component>
    </div>
</template>

<script setup>
import { shallowRef } from "vue";
import AboutTab1 from "@/components/about/AboutTab1.vue";
import AboutTab2 from "@/components/about/AboutTab2.vue";
import AboutTab3 from "@/components/about/AboutTab3.vue";
import AboutHead from "@/components/about/AboutHead.vue";
const currentTab = shallowRef(AboutTab1);
</script>


