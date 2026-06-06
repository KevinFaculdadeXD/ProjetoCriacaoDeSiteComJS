<script setup>
  import { RouterView, RouterLink } from 'vue-router'
  import './css/main.css'
</script>

<template>
  <div class="app-container">
    <header class="navbar">
      <div class="logo">XCars Motors</div>
      <nav class="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/catalogo">Catalogo</RouterLink>
        <RouterLink to="/contato">Contato</RouterLink>
      </nav>
    </header>

    <main class="content">
      <RouterView />
    </main>

    <footer class="footer">
      <p>&copy; 2026 XCars Motors - Desafio Front-End</p>
    </footer>
  </div>
</template>
