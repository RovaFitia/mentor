<template>
    <nav class="py-4 border-b border-black/10 bg-white">
        <div class="container mx-auto flex items-center justify-between">

            <div class="flex items-center justify-center gap-2">
                <RouteLink to="/" class="flex items-center gap-2">
                    <img src="../../public/Logo/codeur-logo.png" alt="logo" class="w-[28px] h-[28px]">
                    <Heading tag="div" size="2" variant="carbon" font="title">Mentor</Heading>
                </RouteLink>
            </div>

            <div>
                <ul class="flex items-center gap-4">
                    <li v-for="link in Links" :key="link.name" class="flex items-center gap-2">
                        <RouterLink :to="link.to" class="font-base text-medium-gray text-4 hover:text-dark">{{ link.name
                            }}</RouterLink>
                    </li>


                    <template v-for="btn in Btns" :key="btn.name">
                        <li v-if="Btns.length > 0" class="flex items-center gap-2">
                            <component v-if="btn.icon" :is="btn.icon"
                                class="w-5 h-5 text-medium-gray hover:text-dark" />
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import Heading from '../components/Heading.vue'
import DiscordIcon from '../assets/icons/discord-icon.vue'
import GitHubIcon from '../assets/icons/github-icon.vue'

const Links = [
    { name: 'About', to: 'about' },
    { name: 'Blog', to: 'blog' },
]

const Btns = [
    { name: 'GitHub', href: '#', icon: GitHubIcon },
    { name: 'Discord', href: '#', icon: DiscordIcon },
]

</script>

<style scoped></style>
