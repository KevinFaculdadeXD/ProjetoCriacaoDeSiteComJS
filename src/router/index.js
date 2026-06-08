import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Catalogo from '../views/Catalogo.vue'
import Contato from '../views/Contato.vue'
import Vender from '../views/Vender.vue'


import Chevrolet from '../cars/Chevrolet.vue'
import Fiat from '../cars/Fiat.vue'
import Subaru from '../cars/Subaru.vue'
import Volkswagen from '../cars/Volkswagen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/catalogo', name: 'catalogo', component: Catalogo },
    { path: '/vender', name: 'vender', component: Vender },
    { path: '/contato', name: 'contato', component: Contato },
    { path: '/carro/chevrolet', name: 'chevrolet', component: Chevrolet },
    { path: '/carro/fiat', name: 'fiat', component: Fiat },
    { path: '/carro/subaru', name: 'subaru', component: Subaru },
    { path: '/carro/volkswagen', name: 'volkswagen', component: Volkswagen }
  ]
})

export default router