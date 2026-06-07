import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Catalogo from '../views/Catalogo.vue'
import Contato from '../views/Contato.vue'
import Vender from '@/views/Vender.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/catalogo',
      name: 'catalogo',
      component: Catalogo
    },
    {
      path: '/contato',
      name: 'contato',
      component: Contato
    },
    {
      path: '/vender',
      name: 'vender',
      component: Vender
    }
  ]
})

export default router