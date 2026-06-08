      XD Carros

Site de compra e venda de veículos desenvolvido com Vue 3 e Vite. 
Projeto acadêmico da Universidade Campo Real, com foco na criação de uma SPA completa utilizando JavaScript moderno.

      Sobre o Projeto
A XD Carros é uma plataforma fictícia de compra e venda de veículos que permite aos usuários navegar por um catálogo de carros, visualizar detalhes de cada modelo, anunciar um veículo à venda e entrar em contato com a equipe.

O projeto foi desenvolvido como desafio de Front-End pelos alunos Kevin Richardt e Gabriel Hardt Klipe.

      Funcionalidades

  Home — Apresentação da loja com banner de destaque e cards dos veículos em evidência
  Catálogo — Listagem completa dos veículos com busca por nome ou marca em tempo real
  Detalhe do Carro — Página individual com foto, descrição e ficha técnica de cada veículo
  Anunciar Veículo — Formulário para adicionar um novo carro ao catálogo dinamicamente
  Contato — Formulário para envio de proposta ou dúvidas à equipe
  Pesquisa global — Barra de busca no header que redireciona para o catálogo filtrado

      Estrutura do Projeto

    src/
    ├── assets/
    │   └── img/              # Imagens dos veículos
    ├── components/
    │   └── CardCarro.vue     # Componente reutilizável de card de veículo
    ├── css/                  # Arquivos de estilo por página/componente
    │   ├── main.css
    │   ├── Home.css
    │   ├── Catalogo.css
    │   ├── CardCars.css
    │   ├── CarroDetalhe.css
    │   ├── Vender.css
    │   └── Contato.css
    ├── data/
    │   └── carros.js         # Lista reativa global de veículos (Vue ref)
    ├── router/
    │   └── index.js          # Configuração das rotas
    ├── views/
    │   ├── Home.vue
    │   ├── Catalogo.vue
    │   ├── CarroDetalhe.vue
    │   ├── Vender.vue
    │   └── Contato.vue
    ├── App.vue               # Layout raiz com navbar e footer
    └── main.js               # Ponto de entrada da aplicação

          Rotas
Rota            Página
/               Home 
/catalogo       Catálogo com busca
/carro/:id      Detalhe do veículo
/vender         Formulário de anúncio
/contato        Formulário de contato

Como Rodar
Pré-requisitos: Node.js ^20.19.0 ou >=22.12.0
bash# Instalar dependências
npm install

#  Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Visualizar o build
npm run preview

Autores

Kevin Richardt
Gabriel Hardt Klipe

Universidade Campo Real — 2026