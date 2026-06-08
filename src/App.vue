<script setup>
import { ref } from 'vue'
import { RouterView, RouterLink, useRouter } from 'vue-router'
import './css/main.css'

const router = useRouter()
const pesquisa = ref('')

const efetuarBusca = () => {
  router.push({ path: '/catalogo', query: { busca: pesquisa.value } })
}
</script>

<template>
  <div class="app-container">
    <header class="navbar">
      <div class="logo" @click="router.push('/')" style="cursor: pointer;">XD Carros</div>
      <nav class="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/catalogo">Catalogo</RouterLink>
        <RouterLink to="/contato">Contato</RouterLink>
        <RouterLink to="/vender">Vender</RouterLink>
      </nav>
    </header>

    <main class="content">
      <RouterView />
    </main>

    <footer class="footer">
      <p>2026 XD Carros - Desafio Front-End</p>
      <p>Trabalho feito por Kevin Richardt e Gabriel Hardt Klipe</p>
      <p>&copy; Universidade Campo Real - 2026</p>
    </footer>
  </div>
</template>