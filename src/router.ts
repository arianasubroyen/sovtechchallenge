import { createRouter, createWebHistory } from 'vue-router'
import client from '@/pocketbase'

const routes = [

    {
        path: "/userprofile/:id",
        name: "User Profile",
        component: () => import('./views/UserProfile.vue')
    },



]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !client?.authStore.token) {
        return {
            path: "/"
        }
    }
})

export default router