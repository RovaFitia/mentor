<template>
    <button :class="classes">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Button = {
    variant?: 'dark' | 'medium-gray' | 'carbon' | 'whitesmoke';
    size?: 'sm' | 'md' | 'lg';
    hover?: boolean;
}

const props = withDefaults(defineProps<Button>(), {
    variant: 'medium-gray',
    size: 'md',
    hover: false,
})

const classes = computed(() => {
    return [
        'btn',
        `btn-${props.size}`,
        `border-${props.variant}`,
        `text-${props.variant}`,
        `hover:(bg-${props.variant} text-${props.variant})`,
    ]
})

</script>
