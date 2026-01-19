import { createRouter, createWebHistory} from 'vue-router'

import HomeView from '@/components/HomeView.vue'
import SobreMiView from '@/components/SobreMiView.vue'
import ProyectosView from '@/components/ProyectosView.vue'
import HabilidadesView from '@/components/HabilidadesView.vue'
import ExperienciaView from '@/components/ExperienciaView.vue'
import ContactoView from '@/components/ContactoView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/sobre-mi', name: 'sobre-mi', component: SobreMiView },
  { path: '/proyectos', name: 'proyectos', component: ProyectosView },
  { path: '/habilidades', name: 'habilidades', component: HabilidadesView },
  { path: '/experiencia', name: 'experiencia', component: ExperienciaView },
  { path: '/contacto', name: 'contacto', component: ContactoView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
