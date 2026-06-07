<script setup>
  import { RouterView, RouterLink } from 'vue-router'
  import './css/main.css'
</script>

<template>
  <div class="app-container">
    <header class="navbar">
      <div class="logo">XDCars Motors</div>
      <nav class="nav-links">
        <input type="text" v-model="pesquisa" placeholder="Pesquisar carro...">
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
      <p>2026 XDCars Motors - Desafio Front-End</p>
      <p>Trabalho feito por Kevin Richardt e Gabriel Hardt Klipe</p>
      <p>&copy; Universidade Campo Real - 2026</p>
    </footer>
  </div>
</template>
