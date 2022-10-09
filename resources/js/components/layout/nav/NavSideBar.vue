<template>
    <div class="side-bar shadow-lg d-flex flex-column">
        <div class="m-1 align-self-end">
            <button
                class="btn-close btn-close-white btn-lg"
                @click="$emit('close')"
            ></button>
        </div>
        <div class="mt-1">
            <ul class="list-unstyled">
                <li
                    class="d-lg-none"
                    v-for="(link, index) in mobileOnlyLinks"
                    :key="index"
                >
                    <router-link
                        :to="{ name: link.route }"
                        class="side-bar__link mb-2 px-2 py-1"
                        active-class="side-bar__link--active"
                    >
                        {{ link.title }}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="side-bar__auth-info p-4">
            <div v-if="user" class="side-bar__user mx-auto py-2 px-4 shadow-lg">
                <img
                    :src="$store.getters['auth/profileImage']"
                    width="50"
                    height="50"
                    class="rounded-circle shadow-lg"
                />
                <p class="ms-2 text-secondary mb-0">{{ user.name }}</p>
            </div>
            <!-- <router-link
        v-else
        :to="{ name: 'Login' }"
        class="w-100 btn btn-outline-primary"
      >
        Login
      </router-link> -->
        </div>
    </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

defineProps({
    mobileOnlyLinks: {
        type: Array,
        default: () => [],
    },
});

const store = useStore();
const user = computed(() => store.state.auth.profile);
</script>


