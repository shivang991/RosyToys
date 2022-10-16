<template>
    <div class="space-x-8 text-slate-200">
        <router-link
            v-for="(link, index) in links"
            :key="index"
            class="font-semibold hover:underline text-lg"
            active-class="text-amber-500"
            :to="{ name: link.route }"
            >{{ link.title }}</router-link
        >
    </div>
</template>

<script>
export default {
    props: {
        links: {
            type: Array,
            default: () => [],
        },
    },
};
</script>
