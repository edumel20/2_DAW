import { createRouter, createWebHistory} from 'vue-router'

import HomeView from '@/components/HomeView.vue'
import SobreMiView from '@/components/SobreMiView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/sobre-mi', name: 'sobre-mi', component: SobreMiView},
]



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})

export default router
