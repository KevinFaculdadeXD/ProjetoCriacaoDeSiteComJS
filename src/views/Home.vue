<template>
  <div class="hero-section">
    <h1>Bem-vindo à XDCars Motors</h1>
    <p>A sua nova referência em veículos exclusivos, esportivos e de alta performance.</p>
    <div class="actions">
      <router-link to="/catalogo" class="btn-primary-home">Ver Catálogo Completo</router-link>
    </div>
  </div>
</template>


<style scoped>
.hero-section {
  text-align: center;
  padding: 6rem 1rem;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border-radius: 12px;
  border: 1px solid #334155;
  margin-top: 2rem;
}

h1 {
  font-size: 3rem;
  color: #38bdf8;
  margin-bottom: 1.5rem;
  font-weight: 800;
}

p {
  font-size: 1.3rem;
  color: #94a3b8;
  margin-bottom: 3rem;
}

.btn-primary-home {
  background-color: #38bdf8;
  color: #0f172a;
  text-decoration: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 8px;
  transition: background-color 0.2s, transform 0.1s;
  display: inline-block;
}

.btn-primary-home:hover {
  background-color: #0ea5e9;
  transform: translateY(-2px);
}
</style>