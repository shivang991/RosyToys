<template>
    <div>
        <h5 class="font-semibold text-xl mb-2">{{ label }}</h5>
        <ul class="px-2 space-y-2">
            <li
                class="flex items-center space-x-2"
                v-for="(option, index) in options"
                :key="index"
            >
                <span>
                    <input
                        type="checkbox"
                        class="accent-sky-600 form-check-input"
                        :checked="modelValue.includes(option)"
                        @change="handleCheck(option)"
                    />
                </span>
                <span>{{ option }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    options: { type: Array, required: true },
    label: { type: String, required: true },
    modelValue: { type: Array, default: () => [] },
});
const emit = defineEmits(["update:modelValue"]);

function handleCheck(option) {
    const newVal = props.modelValue.includes(option)
        ? props.modelValue.filter((v) => v !== option)
        : [...props.modelValue, option];
    emit("update:modelValue", newVal);
}
</script>
