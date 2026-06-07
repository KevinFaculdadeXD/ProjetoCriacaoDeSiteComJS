<template>
  <div class="container container-carro">
    <router-link to="/catalogo" class="btn-voltar">← Voltar para o Catálogo</router-link>
    
    <div class="detalhe-carro">
      <div class="imagem-principal">
        <img src="/src/assets/img/Subaru Impreza 98.jpg" alt="Impreza WRX" />
      </div>
      
      <div class="info-detalhada">
        <span class="marca">Subaru</span>
        <h2>Impreza WRX</h2>
        <p class="preco-detalhe">R$ 85.000</p>
        
        <div class="ficha-tecnica">
          <h3>Ficha Técnica</h3>
          <ul>
            <li><strong>Ano:</strong> 1998</li>
            <li><strong>Motor:</strong> 2.0 Turbo Boxer</li>
            <li><strong>Tração:</strong> AWD Integral</li>
            <li><strong>Cor:</strong> Azul Rallye</li>
            <li><strong>Status:</strong> Lenda das Pistas</li>
          </ul>
        </div>
        
        <router-link to="/contato" class="btn-primary btn-comprar">Tenho Interesse</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped src="../css/CarroDetalhe.css"></style>