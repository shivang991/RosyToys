<template>
    <div ref="sideBarEl" class="duration-500 h-0 overflow-hidden">
        <ul class="flex flex-col items-center py-4 space-y-2">
            <li v-for="(link, index) in links" :key="index" class="text-slate-900">
                <router-link :to="{ name: link.route }" active-class="text-amber-500 font-semibold">
                    {{ link.title }}
                </router-link>
            </li>
        </ul>
        <!-- <div class="side-bar__auth-info p-4">
            <div v-if="user" class="side-bar__user mx-auto py-2 px-4 shadow-lg">
                <img
                    :src="$store.getters['auth/profileImage']"
                    width="50"
                    height="50"
                    class="rounded-circle shadow-lg"
                />
                <p class="ms-2 text-secondary mb-0">{{ user.name }}</p>
            </div>
        </div> -->
    </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { onMounted, ref, watch } from "vue";

const props = defineProps({
    links: {
        type: Array,
        default: () => [],
    },
    shouldShow: {
        type: Boolean,
        default: false,
    },
});

const store = useStore();
const user = computed(() => store.state.auth.profile);

// To show height transitions, we must set styles on the DOM element directly
const sideBarEl = ref(null);

// Set default height after mount
onMounted(() => {
    if (sideBarEl.value)
        sideBarEl.value.style.height = props.shouldShow ? "auto" : "0";
});

watch(
    () => props.shouldShow,
    (newVal) => {
        const el = sideBarEl.value;
        if (!el) return;
        if (newVal) {
            el.style.height = "auto";
            const heightPx = getComputedStyle(el).getPropertyValue("height");
            el.style.height = "0";
            requestAnimationFrame(() => (el.style.height = heightPx));
        } else el.style.height = "0px";
    }
);
</script>
