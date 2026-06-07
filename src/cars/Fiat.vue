<template>
  <div class="container container-carro">
    <router-link to="/catalogo" class="btn-voltar">← Voltar para o Catálogo</router-link>
    
    <div class="detalhe-carro">
      <div class="imagem-principal">
        <img src="/src/assets/img/Fiat Uno 94.jpg" alt="Uno Mille" />
      </div>
      
      <div class="info-detalhada">
        <span class="marca">Fiat</span>
        <h2>Uno Mille</h2>
        <p class="preco-detalhe">R$ 12.500</p>
        
        <div class="ficha-tecnica">
          <h3>Ficha Técnica</h3>
          <ul>
            <li><strong>Ano:</strong> 1994</li>
            <li><strong>Motor:</strong> 1.0 Fiasa</li>
            <li><strong>Combustível:</strong> Gasolina</li>
            <li><strong>Cor:</strong> Prata</li>
            <li><strong>Status:</strong> Inquebrável / Econômico</li>
          </ul>
        </div>
        
        <router-link to="/contato" class="btn-primary btn-comprar">Tenho Interesse</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped src="../css/CarroDetalhe.css"></style>