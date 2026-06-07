<template>
  <div class="container container-carro">
    <router-link to="/catalogo" class="btn-voltar">← Voltar para o Catálogo</router-link>
    
    <div class="detalhe-carro">
      <div class="imagem-principal">
        <img src="/src/assets/img/Volkswagen Gol 96.jpg" alt="Gol Quadrado GL" />
      </div>
      
      <div class="info-detalhada">
        <span class="marca">Volkswagen</span>
        <h2>Gol Quadrado GL</h2>
        <p class="preco-detalhe">R$ 19.900</p>
        
        <div class="ficha-tecnica">
          <h3>Ficha Técnica</h3>
          <ul>
            <li><strong>Ano:</strong> 1996</li>
            <li><strong>Motor:</strong> 1.6 AP</li>
            <li><strong>Combustível:</strong> Gasolina</li>
            <li><strong>Cor:</strong> Branco</li>
            <li><strong>Status:</strong> Relíquia Impecável</li>
          </ul>
        </div>
        
        <router-link to="/contato" class="btn-primary btn-comprar">Tenho Interesse</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped src="../css/CarroDetalhe.css"></style>