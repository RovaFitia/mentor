import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import('@/views/Blog/index.vue'),
        },
        {
            path: '/blog/:slug',
            name: 'slug',
            component: () => import('@/views/Blog/[slug].vue'),
        },
    ],
})

export default router
