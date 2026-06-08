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
    rota: '/carro/chevrolet'
  },
  {
    id: '2',
    nome: 'Uno Mille',
    marca: 'Fiat',
    ano: '1994',
    preco: '12.500',
    imagem: '/src/assets/img/Fiat Uno 94.jpg',
    rota: '/carro/fiat'
  },
  {
    id: '3',
    nome: 'Impreza WRX',
    marca: 'Subaru',
    ano: '1998',
    preco: '85.000',
    imagem: '/src/assets/img/Subaru Impreza 98.jpg',
    rota: '/carro/subaru'
  },
  {
    id: '4',
    nome: 'Gol Quadrado GL',
    marca: 'Volkswagen',
    ano: '1996',
    preco: '19.900',
    imagem: '/src/assets/img/Volkswagen Gol 96.jpg',
    rota: '/carro/volkswagen'
  },
  {
    id: '5',
    nome: 'Twingo',
    marca: 'Renault',
    ano: '2000',
    preco: 'VENDIDO',
    imagem: '/src/assets/img/Renault Twingo.jpg',
    rota: ''
  },
  {
    id: '6',
    nome: 'Fusca',
    marca: 'Volkswagen',
    ano: '1985',
    preco: 'VENDIDO',
    imagem: '/src/assets/img/Fusca brabo.jpg',
    rota: ''
  }
])