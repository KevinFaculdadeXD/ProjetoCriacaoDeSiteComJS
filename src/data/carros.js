// src/data/carros.js
import { ref } from 'vue'

export const listaCarros = ref([
  {
    id: '1',
    nome: 'Vectra Elegance',
    marca: 'Chevrolet',
    ano: '2006',
    preco: '32.000',
    imagem: '/src/assets/img/Chevrolet Vectra.jpg',
    rota: '/carro/1',
    descricao: 'Vectra Elegance em excelente estado de conservação. Oferece o máximo em conforto e presença, ideal para quem busca um sedan robusto, espaçoso e com ótimo custo-benefício.',
    especificacoes: [
      { nome: 'Motor', valor: '2.0 8V' },
      { nome: 'Câmbio', valor: 'Manual' },
      { nome: 'Combustível', valor: 'Flex' },
      { nome: 'Cor', valor: 'Preto / Cinza' },
      { nome: 'Status', valor: 'Disponível' }
    ]
  },
  {
    id: '2',
    nome: 'Uno Mille',
    marca: 'Fiat',
    ano: '1994',
    preco: '12.500',
    imagem: '/src/assets/img/Fiat Uno 94.jpg',
    rota: '/carro/2',
    descricao: 'Lendário Uno Mille, o verdadeiro rei da economia e pau pra toda obra. Excelente estado de conservação interna e mecânica revisada.',
    especificacoes: [
      { nome: 'Motor', valor: '1.0' },
      { nome: 'Câmbio', valor: 'Manual' },
      { nome: 'Combustível', valor: 'Gasolina' },
      { nome: 'Cor', valor: 'Prata / Branco' },
      { nome: 'Status', valor: 'Disponível' }
    ]
  },
  {
    id: '3',
    nome: 'Impreza WRX',
    marca: 'Subaru',
    ano: '1998',
    preco: '85.000',
    imagem: '/src/assets/img/Subaru Impreza 98.jpg',
    rota: '/carro/3',
    descricao: 'Ícone dos ralis mundiais. Tração integral sob demanda, motor Boxer turbo e uma experiência de pilotagem purista incomparável.',
    especificacoes: [
      { nome: 'Motor', valor: '2.0 Turbo' },
      { nome: 'Câmbio', valor: 'Manual' },
      { nome: 'Combustível', valor: 'Gasolina' },
      { nome: 'Cor', valor: 'Azul WRX' },
      { nome: 'Status', valor: 'Disponível' }
    ]
  },
  {
    id: '4',
    nome: 'Gol Quadrado GL',
    marca: 'Volkswagen',
    ano: '1996',
    preco: '19.900',
    imagem: '/src/assets/img/Volkswagen Gol 96.jpg',
    rota: '/carro/4',
    descricao: 'O queridinho do Brasil em sua versão clássica quadrada. Motor AP forte e de manutenção extremamente barata, ideal para colecionadores ou projetos.',
    especificacoes: [
      { nome: 'Motor', valor: '1.6 AP' },
      { nome: 'Câmbio', valor: 'Manual' },
      { nome: 'Combustível', valor: 'Gasolina' },
      { nome: 'Cor', valor: 'Vermelho / Cinza' },
      { nome: 'Status', valor: 'Disponível' }
    ]
  },
  {
    id: '5',
    nome: 'Twingo',
    marca: 'Renault',
    ano: '2000',
    preco: 'VENDIDO',
    imagem: '/src/assets/img/Renault Twingo.jpg',
    rota: '/carro/5',
    descricao: 'O compacto mais carismático da história. Espaço interno surpreendente e muita personalidade. Item de colecionador.',
    especificacoes: [
      { nome: 'Motor', valor: '1.2' },
      { nome: 'Câmbio', valor: 'Manual' },
      { nome: 'Combustível', valor: 'Gasolina' },
      { nome: 'Cor', valor: 'Verde' },
      { nome: 'Status', valor: 'Vendido' }
    ]
  },
  {
    id: '6',
    nome: 'Fusca',
    marca: 'Volkswagen',
    ano: '1985',
    preco: 'VENDIDO',
    imagem: '/src/assets/img/Fusca brabo.jpg',
    rota: '/carro/6',
    descricao: 'O Fusca brabo! Raridade mecânica impecável, lataria sem detalhes e pronto para rodar por aí esbanjando estilo antigo.',
    especificacoes: [
      { nome: 'Motor', valor: '1600' },
      { nome: 'Câmbio', valor: 'Manual' },
      { nome: 'Combustível', valor: 'Gasolina' },
      { nome: 'Cor', valor: 'Branco' },
      { nome: 'Status', valor: 'Vendido' }
    ]
  }
])