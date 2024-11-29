<template>
    <button :class="classes" :type="type">
        <slot></slot>
        <i v-if="icon" :class="iconClass" aria-hidden="true"></i>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Define props with TypeScript
type ButtonProps = {
    variant?: 'dark' | 'medium-gray' | 'carbon' | 'whitesmoke'
    size?: 'sm' | 'md' | 'lg'
    icon?: string
    type?: 'button' | 'submit' | 'reset'
    hover?: boolean
}

// Set default props
const props = withDefaults(defineProps<ButtonProps>(), {
    variant: 'medium-gray',
    size: 'md',
    icon: '',
    type: 'button',
    hover: true,
})

// Map variant to text and hover styles
const variantStyles = computed(() => {
    const variants = {
        dark: { text: 'text-white', hover: 'hover:(bg-dark text-white)' },
        'medium-gray': { text: 'text-dark', hover: 'hover:(bg-medium-gray text-white)' },
        carbon: { text: 'text-light-gray', hover: 'hover:(bg-carbon text-white)' },
        whitesmoke: { text: 'text-dark', hover: 'hover:(bg-whitesmoke text-dark)' },
    }
    return variants[props.variant!] || variants['medium-gray']
})

// Generate dynamic classes
const classes = computed(() => {
    return [
        'btn',
        `btn-${props.size}`,
        `border-${props.variant}`,
        variantStyles.value.text,
        props.hover ? variantStyles.value.hover : '',
        props.icon ? 'gap-2' : '',
    ].join(' ')
})

// Icon class
const iconClass = computed(() => {
    return `${props.icon} text-2xl`
})
</script>
