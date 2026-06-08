<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import CardCarro from '../components/CardCarro.vue'
import { listaCarros } from '../data/carros.js'

const route = useRoute()

const termoBusca = ref(route.query.busca || '')

watch(() => route.query.busca, (novoValor) => {
  termoBusca.value = novoValor || ''
})

const carrosFiltrados = computed(() => {
  return listaCarros.value.filter(carro => 
    carro.nome.toLowerCase().includes(termoBusca.value.toLowerCase()) ||
    carro.marca.toLowerCase().includes(termoBusca.value.toLowerCase())
  )
})
</script>

<template>
  <div class="container">
    <div class="catalogo-header">
      <h2>Catálogo de Veículos</h2>
      <p>Carros que temos no momento (aproveite enquanto dá tempo!!!)</p>
    </div>

    <div class="busca-container">
      <input 
        v-model="termoBusca" 
        type="text" 
        class="input-control" 
        placeholder="Pesquisar carro por modelo ou marca..." 
      />
    </div>

    <div class="grid-carros">
      <CardCarro 
        v-for="carro in carrosFiltrados" 
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

    <div v-if="carrosFiltrados.length === 0" style="text-align: center; color: #888; padding: 40px;">
      <p style="font-size: 1.2rem;">Esse carro não existe... 😢</p>
    </div>
  </div>
</template>

<style scoped src="../css/Catalogo.css"></style>