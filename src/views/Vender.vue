<script setup>
import { ref } from 'vue'

const marca = ref('')
const modelo = ref('')
const ano = ref('')
const preco = ref('')
const foto = ref('')

const anunciarCarro = () => {   
  alert(`Sucesso! Seu ${marca.value} ${modelo.value} foi anunciado na XCars Motors.`)
  
  marca.value = ''
  modelo.value = ''
  ano.value = ''
  preco.value = ''
  foto.value = ''
}
</script>

<template>
  <div class="container">
    <div class="box-venda">
      <h2>Anuncie seu Veículo</h2>
      <p class="subtitulo">Preencha as informações abaixo para publicar o anúncio na nossa plataforma.</p>

      <form @submit.prevent="anunciarCarro" class="formulario-venda">
        <div class="form-grid">
          <div class="campo">
            <label>Marca</label>
            <input v-model="marca" type="text" required class="input-control" placeholder="Ex: Honda" />
          </div>
          
          <div class="campo">
            <label>Modelo</label>
            <input v-model="modelo" type="text" required class="input-control" placeholder="Ex: Civic" />
          </div>
        </div>

        <div class="form-grid">
          <div class="campo">
            <label>Ano/Modelo</label>
            <input v-model="ano" type="number" required class="input-control" placeholder="Ex: 2021" />
          </div>

          <div class="campo">
            <label>Preço pretendido (R$)</label>
            <input v-model="preco" type="number" required class="input-control" placeholder="Ex: 135000" />
          </div>
        </div>

        <div class="campo">
          <label>URL da Imagem do Carro</label>
          <input v-model="foto" type="url" class="input-control" placeholder="https://linkdafoto.com/carro.jpg" />
        </div>

        <button type="submit" class="btn-primary">Publicar Anúncio</button>
      </form>
    </div>
  </div>
</template>

<style scoped src="../css/Vender.css"></style>