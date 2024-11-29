<template>
    <component :class="classes" :is="tag">
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
    import { computed } from 'vue';


    type Heading = {
        size?: '1' | '2' | '3' | '4' | '5' | '6';
        variant?: 'dark' | 'medium-gray' | 'carbon' | 'light-gray' | 'whitesmoke';
        font?: 'title' | undefined;
        weight?: '600' | '700';
        tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
    }

    const props = withDefaults(defineProps<Heading>(), {
        size: '1',
        variant: 'medium-gray',
        font: 'title',
        weight: '700',
        tag: 'div',
    })

    const classes = computed(() => {
        return [
            `font-${props.font}`,
            `font-${props.weight}`,
            `text-${props.variant}`,
            `text-${props.size == '1' ? '' : props.size}xl`,
        ].join(' ')
    })

</script>
