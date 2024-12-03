<template>
    <nav class="py-5 border-b border-black/10 bg-white">
        <div class="container mx-auto flex items-center justify-between">

            <div class="flex items-center justify-center gap-2">
                <img src="../../public/Logo/codeur-logo.png" alt="logo" class="w-[28px] h-[28px]">
                <Heading tag="div" size="3" variant="carbon" font="title">Mentor</Heading>
            </div>

            <div>
                <ul class="flex items-center gap-4">
                    <li v-for="link in Links" :key="link.name" class="flex items-center gap-2">
                        <component v-if="link.icon" :is="link.icon" class="w-4 h-4 text-medium-gray hover:text-dark">
                        </component>
                        <a href="link.href" class="font-base text-medium-gray text-4 hover:text-dark">
                            {{ link.name }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import Heading from '../components/Heading.vue'
import BlogIcon from '../assets/icons/blog-icon.vue'

const Links = [
    { name: 'About', href: '#', icon: BlogIcon },
    { name: 'Blog', href: '#', icon: 'mdi-blog' },
    { name: 'GitHub', href: '#', icon: 'mdi-github' },
    { name: 'WhatsApp', href: '#', icon: 'mdi-whatsapp' },
]

</script>

<style scoped></style>
