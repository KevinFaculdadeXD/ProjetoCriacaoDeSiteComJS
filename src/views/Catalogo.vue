<script setup>
import { ref, computed } from 'vue'
import CardCarro from '../components/CardCarro.vue'

const termoBusca = ref('')
const carros = ref([
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
    id: '2',
    nome: 'Uno Mille',
    marca: 'Fiat',
    ano: '1994',
    preco: '12.500',
    imagem: '/src/assets/img/Fiat Uno 94.jpg',
    rota: '/carro/fiat'
  },
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
    id: '4',
    nome: 'Gol Quadrado GL',
    marca: 'Volkswagen',
    ano: '1996',
    preco: '19.900',
    imagem: '/src/assets/img/Volkswagen Gol 96.jpg',
    rota: '/carro/volkswagen'
  }
])

const carrosFiltrados = computed(() => {
  return carros.value.filter(carro => 
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
        :preco=carro.preco
        :imagem="carro.imagem"
        :rota="carro.rota"
      />
    </div>
  </div>
</template>

<style scoped src="../css/Catalogo.css"></style>