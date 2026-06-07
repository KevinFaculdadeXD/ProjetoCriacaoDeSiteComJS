<script setup>
import { ref } from 'vue'

const nome = ref('')
const email = ref('')
const mensagem = ref('')

const enviarFormulario = () => {
  alert(`Obrigado pelo interesse, ${nome.value}! A equipe XCars entrará em contato em breve.`)
  nome.value = ''
  email.value = ''
  mensagem.value = ''
}
</script>

<template>
  <div class="container">
    <div class="box-contato">
      <h2>Fale Conosco</h2>
      <p>Preencha os campos abaixo para simular uma proposta ou tirar dúvidas sobre nossos modelos.</p>
      
      <form @submit.prevent="enviarFormulario" class="formulario">
        <div class="campo">
          <label>Nome Completo</label>
          <input v-model="nome" type="text" required class="input-control" placeholder="Ex: Gabriel Klipe" />
        </div>

        <div class="campo">
          <label>Seu Melhor E-mail</label>
          <input v-model="email" type="email" required class="input-control" placeholder="seuemail@email.com" />
        </div>

        <div class="campo">
          <label>Mensagem ou Proposta</label>
          <textarea v-model="mensagem" required class="input-control campo-texto" placeholder="Estou interessado no Civic..."></textarea>
        </div>

        <button type="submit" class="btn-primary">Enviar Proposta</button>
      </form>
    </div>
  </div>
</template>

<style scoped src="../css/Contato.css"></style>