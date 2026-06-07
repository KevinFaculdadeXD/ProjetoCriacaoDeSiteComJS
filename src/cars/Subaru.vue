<script setup>
const carro = {
  nome: 'Subaru Impreza',
  modelo: 'WRX',
  ano: 1998,
  preco: '85.000',
  imagem: '/src/assets/img/Subaru Impreza 98.jpg',
  especificacoes: [
    { nome: 'Motor', valor: '2.0 Turbo Boxer' },
    { nome: 'Tração', valor: 'AWD Integral' },
    { nome: 'Câmbio', valor: 'Manual' },
    { nome: 'Cor', valor: 'Azul Rallye' },
    { nome: 'Status', valor: 'Lenda das Pistas' }
  ],
  descricao: 'Subaru Impreza WRX 1998. Uma lenda viva nascida nas pistas de rally do WRC. Equipado com o icônico motor boxer turbo e o consagrado sistema de tração integral nas quatro rodas.'
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