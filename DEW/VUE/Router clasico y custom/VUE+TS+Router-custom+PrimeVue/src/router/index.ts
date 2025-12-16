import AboutMe from '@/components/AboutMe.vue'
import Skills from '@/components/Skills.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/Aboutme', component: AboutMe },
    { path: '/Skills', component: Skills },
    { path: '/:pathMatch(.*)*', redirect: '/AboutMe' },
  ],
})

export default router
