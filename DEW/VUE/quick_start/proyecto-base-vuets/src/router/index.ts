import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '@/components/AboutMe.vue'
import Skills from '@/components/Skills.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/Aboutme', component: AboutMe},
    { path: '/Skills', component: Skills},

  ],
})

export default router
