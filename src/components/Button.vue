<template>
    <button :class="classes" :type="type">
        <i v-if="icon && iconPosition === 'left'" :class="iconClass" aria-hidden="true"></i>
        <slot></slot>
        <i v-if="icon && iconPosition === 'right'" :class="iconClass" aria-hidden="true"></i>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Define props with TypeScript
type ButtonProps = {
    variant?: 'dark' | 'medium-gray' | 'carbon' | 'light-gray' | 'whitesmoke'
    size?: 'sm' | 'md' | 'lg'
    icon?: string
    type?: 'button' | 'submit' | 'reset'
    hover?: boolean
    iconPosition?: 'left' | 'right'
}

// Set default props
const props = withDefaults(defineProps<ButtonProps>(), {
    variant: 'medium-gray',
    size: 'md',
    icon: '',
    type: 'button',
    hover: true,
    iconPosition: 'right',
})

// Map variant to text and hover styles
const variantStyles = computed(() => {
    const variants = {
        dark: {
            text: 'text-white bg-dark',
            hover: 'hover:(bg-dark/80)'
        },
        'medium-gray': {
            text: 'text-white bg-medium-gray',
            hover: 'hover:(bg-medium-gray/80)'
        },
        carbon: {
            text: 'text-white bg-carbon ',
            hover: 'hover:(bg-carbon/80)'
        },
        'light-gray': {
            text: 'text-medium-gray bg-white border-light-gray',
            hover: 'hover:(text-medium-gray bg-light-gray border-light-gray)'
        },
        whitesmoke: {
            text: 'text-medium-gray bg-whitesmoke border-medium-gray',
            hover: 'hover:(bg-medium-gray text-white)'
        },
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
    return `${props.icon} text-xl`
})
</script>
