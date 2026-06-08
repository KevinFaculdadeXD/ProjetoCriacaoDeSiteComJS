<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { listaCarros } from '../data/carros.js'

const router = useRouter()

const marca = ref('')
const modelo = ref('')
const ano = ref('')
const preco = ref('')
const foto = ref('')

const anunciarCarro = () => {   
  const novoId = String(listaCarros.value.length + 1)
  
  const novoCarro = {
    id: novoId,
    nome: modelo.value,
    marca: marca.value,
    ano: String(ano.value),
    preco: Number(preco.value).toLocaleString('pt-BR'),
    imagem: foto.value || 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500',
    
    rota: `/carro/${novoId}`,
    descricao: 'Veículo anunciado pelo portal XD Carros. Entre em contato para consultar o histórico de revisões e conservação com o proprietário.',
    especificacoes: [
      { nome: 'Motor', valor: 'Não especificado' },
      { nome: 'Câmbio', valor: 'Não especificado' },
      { nome: 'Combustível', valor: 'Não especificado' },
      { nome: 'Cor', valor: 'Não especificado' },
      { nome: 'Status', valor: 'Disponível' }
    ]
  }

  

  listaCarros.value.push(novoCarro)
  
  alert(`Sucesso! Seu ${marca.value} ${modelo.value} foi anunciado na XD Carros.`)
  
  marca.value = ''
  modelo.value = ''
  ano.value = ''
  preco.value = ''
  foto.value = ''

  router.push('/catalogo')
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