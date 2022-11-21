<template>
    <div ref="sideBarEl" class="duration-500 h-0 overflow-hidden">
        <ul class="flex flex-col items-center py-4 space-y-2">
            <li v-for="(link, index) in links" :key="index">
                <router-link
                    :to="{ name: link.route }"
                    active-class="text-sky-600 font-semibold"
                    @click="emit('update:shouldShow', false)"
                >
                    {{ link.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { onMounted, ref, watch, computed } from "vue";

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

const emit = defineEmits(["update:shouldShow"]);

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
