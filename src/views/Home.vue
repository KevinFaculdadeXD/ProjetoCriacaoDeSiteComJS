<script setup>
import CardCarro from '../components/CardCarro.vue'

const carrosDestaque = [
  {
    id: '3',
    nome: 'Impreza WRX',
    marca: 'Subaru',
    ano: '1998',
    preco: '85.000',
    imagem: '/src/assets/img/Subaru Impreza 98.jpg',
    rota: '/carro/subaru'
  },
  {
    id: '1',
    nome: 'Vectra Elegance',
    marca: 'Chevrolet',
    ano: '2006',
    preco: '32.000',
    imagem: '/src/assets/img/Chevrolet Vectra.jpg',
    rota: '/carro/chevrolet'
  },
  {
    id: '4',
    nome: 'Gol Quadrado GL',
    marca: 'Volkswagen',
    ano: '1996',
    preco: '19.900',
    imagem: '/src/assets/img/Volkswagen Gol 96.jpg',
    rota: '/carro/volkswagen'
  }
]
</script>

<template>
  <!-- Hero -->
  <div class="hero-section">
    <h1>Bem-vindo à XD Carros</h1>
    <p>A sua nova referência em veículos exclusivos, esportivos e de alta performance.</p>
    <div class="actions">
      <router-link to="/catalogo" class="btn-primary-home">Ver Catálogo Completo</router-link>
    </div>
  </div>

  <!-- Destaques -->
  <section class="destaques-section">
    <div class="destaques-header">
      <h2>Destaques do Estoque</h2>
      <p>Veja alguns dos veículos disponíveis agora mesmo</p>
    </div>
    <div class="grid-destaques">
      <CardCarro
        v-for="carro in carrosDestaque"
        :key="carro.id"
        :id="carro.id"
        :nome="carro.nome"
        :marca="carro.marca"
        :ano="carro.ano"
        :preco="carro.preco"
        :imagem="carro.imagem"
        :rota="carro.rota"
      />
    </div>
    <div class="ver-todos">
      <router-link to="/catalogo" class="btn-ver-todos">Ver Todos os Carros →</router-link>
    </div>
  </section>

  <!-- Card CTA Contato + Vender -->
  <section class="cta-section">
    <div class="cta-card">
      <div class="cta-item">
        <div class="cta-icon">💬</div>
        <h3>Tem interesse em algum carro?</h3>
        <p>Entre em contato com nossa equipe e simule uma proposta sem compromisso.</p>
        <router-link to="/contato" class="btn-cta btn-cta-primary">Falar com a Equipe</router-link>
      </div>
      <div class="cta-divider"></div>
      <div class="cta-item">
        <div class="cta-icon">🚗</div>
        <h3>Quer vender seu carro?</h3>
        <p>Anuncie seu veículo na nossa plataforma e alcance compradores qualificados.</p>
        <router-link to="/vender" class="btn-cta btn-cta-secondary">Anunciar Veículo</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped src="../css/Home.css"></style>