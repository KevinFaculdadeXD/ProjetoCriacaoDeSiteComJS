<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { listaCarros } from '../data/carros.js'

const route = useRoute()
const carro = ref(null)

onMounted(() => {
  const idCarro = route.params.id
  const encontrado = listaCarros.value.find(c => c.id === idCarro)
  
  if (encontrado) {
    carro.value = encontrado
  }
})
</script>

<template>
  <div v-if="carro" class="container page-carro">
    <router-link to="/catalogo" class="btn-voltar">
      <span>←</span> Voltar para o Catálogo
    </router-link>

    <div class="hero-carro">
      <div class="img-wrapper">
        <img :src="carro.imagem" :alt="carro.nome" />
      </div>
      <div class="info-carro">
        <h1 class="titulo-carro">{{ carro.nome }}</h1>
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
  
  <div v-else class="container">
    <div style="text-align: center; padding: 50px; color: white;">
      <h2>Veículo não encontrado ou indisponível...</h2>
      <router-link to="/catalogo" class="btn-primary" style="display: inline-block; margin-top: 20px;">Voltar ao Catálogo</router-link>
    </div>
  </div>
</template>

<style scoped src="../css/CarroDetalhe.css"></style>