<template>
  <div class="container container-carro">
    <router-link to="/catalogo" class="btn-voltar">← Voltar para o Catálogo</router-link>
    
    <div class="detalhe-carro">
      <div class="imagem-principal">
        <img src="/src/assets/img/Chevrolet Vectra.jpg" alt="Vectra Elegance" />
      </div>
      
      <div class="info-detalhada">
        <span class="marca">Chevrolet</span>
        <h2>Vectra Elegance</h2>
        <p class="preco-detalhe">R$ 32.000</p>
        
        <div class="ficha-tecnica">
          <h3>Ficha Técnica</h3>
          <ul>
            <li><strong>Ano:</strong> 2006</li>
            <li><strong>Motor:</strong> 2.0 8V</li>
            <li><strong>Combustível:</strong> Flex</li>
            <li><strong>Cor:</strong> Preto / Cinza Escuro</li>
            <li><strong>Status:</strong> Conforto e Presença</li>
          </ul>
        </div>
        
        <router-link to="/contato" class="btn-primary btn-comprar">Tenho Interesse</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped src="../css/CarroDetalhe.css"></style>