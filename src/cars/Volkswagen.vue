<script setup>
const carro = {
  nome: 'Volkswagen Gol',
  modelo: 'Quadrado GL',
  ano: 1996,
  preco: '19.900',
  imagem: '/src/assets/img/Volkswagen Gol 96.jpg',
  especificacoes: [
    { nome: 'Motor', valor: '1.6 AP' },
    { nome: 'Câmbio', valor: 'Manual' },
    { nome: 'Combustível', valor: 'Gasolina' },
    { nome: 'Cor', valor: 'Branco' },
    { nome: 'Status', valor: 'Impecável' }
  ],
  descricao: 'Gol Quadrado GL 1996, equipado com o cobiçado e indestrutível motor AP 1.6. Uma relíquia automotiva com estrutura íntegra, interna original e excelente dirigibilidade.'
};
</script>

<template>
  <div class="container page-carro">
    <router-link to="/catalogo" class="btn-voltar">
      <span>←</span> Voltar para o Catálogo
    </router-link>

    <div class="hero-carro">
      <div class="img-wrapper">
        <img :src="carro.imagem" :alt="carro.nome" />
      </div>
      <div class="info-carro">
        <h1 class="titulo-carro">{{ carro.nome }} <span class="modelo">{{ carro.modelo }}</span></h1>
        <p class="preco-carro">R$ {{ carro.preco }}</p>
      </div>
    </div>

    <div class="detalhes-container">
      <div class="col-info">
        <h3>Sobre este veículo</h3>
        <p>{{ carro.descricao }}</p>
      </div>
      <div class="col-ficha">
        <h3>Ficha Técnica</h3>
        <div class="ficha-grid">
          <div v-for="spec in carro.especificacoes" :key="spec.nome" class="ficha-item">
            <span class="label-ficha">{{ spec.nome }}</span>
            <span class="valor-ficha">{{ spec.valor }}</span>
          </div>
          <div class="ficha-item">
             <span class="label-ficha">Ano</span>
             <span class="valor-ficha">{{ carro.ano }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="acao-venda">
      <p>Este carro pode ser seu! Entre em contato agora.</p>
      <router-link to="/contato" class="btn-primary btn-comprar">Tenho Interesse</router-link>
    </div>
  </div>
</template>

<style scoped src="../css/CarroDetalhe.css"></style>