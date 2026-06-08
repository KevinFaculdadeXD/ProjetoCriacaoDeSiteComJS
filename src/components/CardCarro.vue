<script setup>
defineProps({
  id: String,
  nome: String,
  marca: String,
  ano: String,
  preco: String,
  imagem: String,
  rota: String
})
</script>

<template>
  <div class="card-carro">
    <div class="card-imagem">
      <img :src="imagem" :alt="nome" />
    </div>
    <div class="card-conteudo">
      <span class="marca-tag">{{ marca }}</span>
      <h3>{{ nome }}</h3>
      <p class="ano-texto">Ano: {{ ano }}</p>
      <div class="card-footer">
        <span class="preco-texto">R$ {{ preco }}</span>
        <RouterLink :to="rota" class="btn-detalhes">Ver Mais</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped src="../css/CardCars.css"></style>