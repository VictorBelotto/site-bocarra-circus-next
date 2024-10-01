'use server'
export const cardData = [
  {
    img: '/imagens_servicos/circoSonhos.webp',
    title: 'Circo',
    description: 'Lonas para circo projetadas com alta precisão, resistentes e de fácil montagem, combinando design atrativo e durabilidade.',
    to: '/servicos/circo',
    width: 'w-[100%]' 
  },
  {
    img: '/imagens_servicos/piramide.webp',
    title: 'Pirâmide',
    description: 'Tendas elegantes e versáteis, ideais para eventos, feiras e festas, garantindo durabilidade e fácil montagem.',
    to: '/servicos/piramide',
    width: 'w-[50%]' 
  },
  {
    img: '/imagens_servicos/exclusiva.webp',
    title: 'Exclusiva',
    description: 'Coberturas inovadoras e personalizadas, combinando beleza e funcionalidade para uma proteção eficaz contra os elementos.',
    to: '/servicos/exclusivas',
    width: 'w-[50%]'
  },
  {
    img: '/imagens_servicos/galpao.webp',
    title: 'Galpão',
    description: 'Galpões robustos e versáteis, projetados para oferecer espaço e funcionalidade máximos para armazenamento e atividades industriais.',
    to: '/servicos/galpao',
    width: 'w-[50%]'
  },
  {
    img: '/imagens_servicos/aranha.webp',
    title: 'Aranha',
    description: 'Tenda com design marcante e inovador, resistente e fácil de montar, ideal para eventos que exigem uma estrutura distinta.',
    to: '/servicos/aranha',
    width: 'w-[50%]'
  }
];

import { getAllImagesFromFolder } from "@/app/lib/utils"
import { SectionProps } from "@/app/lib/types";

const imagens_circo = getAllImagesFromFolder('imagens_circo')
const imagens_piramide = getAllImagesFromFolder('imagens_piramide')
const imagens_exclusivas = getAllImagesFromFolder('imagens_exclusivas')
const imagens_aranha = getAllImagesFromFolder('imagens_aranha')
const imagens_galpao = getAllImagesFromFolder('imagens_galpao')


export const servicosDetalhes : SectionProps[] = [
  {
    id: 'circo',
    titulo: 'Lonas para Circo',
    descricao: 'Há mais de 30 anos, a Bocarra Circus tem o orgulho de cobrir espetáculos circenses com lonas que combinam tradição e inovação. Nossos modelos únicos e memoráveis são projetados para trazer grandiosidade ao seu circo, refletindo a magia e a emoção dos espetáculos. Cada lona é cuidadosamente desenvolvida para garantir durabilidade e um visual impressionante, assegurando que seu espetáculo se destaque. Com nossa experiência e dedicação, oferecemos soluções que elevam a qualidade e a presença de seu circo, proporcionando uma experiência incomparável.'
,
    imagens: imagens_circo
  },
  {
    id: 'piramide',
    titulo: 'Tendas Piramidais',
    descricao:'As tendas piramidais são ideais para eventos, feiras e festas, oferecendo uma estrutura elegante e versátil. Fabricadas com materiais de alta qualidade, nossas tendas garantem durabilidade e resistência às intempéries. Além de serem fáceis de montar e desmontar, permitem personalização conforme o tema do evento, assegurando uma experiência memorável para os participantes.',
    imagens: imagens_piramide
  },
  {
    id: 'exclusivas',
    titulo: 'Coberturas Exclusivas',
    descricao: 'Nossas coberturas exclusivas são a combinação perfeita de design sofisticado e funcionalidade superior. Cada projeto é personalizado para atender às especificações do cliente, utilizando materiais de ponta para assegurar durabilidade e resistência às intempéries. Além de garantir proteção eficaz contra os elementos, essas coberturas realçam a estética do ambiente, proporcionando uma solução estilizada e adaptada às necessidades específicas de qualquer evento.',
    imagens: imagens_exclusivas
  },
  {
    id: 'aranha',
    titulo: 'Tenda Aranha',
    descricao: 'A tenda aranha proporciona um visual marcante e moderno, combinando materiais de alta qualidade com um design inovador e arrojado. Seu formato distintivo não só chama a atenção, mas também garante estabilidade e proteção em diversas condições climáticas. Resistente e fácil de montar, ela se adapta a diferentes layouts e configurações, oferecendo uma solução prática e estilizada para eventos que exigem uma estrutura funcional e atraente.',
    imagens: imagens_aranha
  },
  {
    id: 'galpao',
    titulo: 'Galpão',
    descricao: 'Nossos galpões são projetados para maximizar espaço e funcionalidade, atendendo às necessidades de armazenamento, eventos e atividades industriais. Construídos com materiais robustos e duráveis, eles oferecem resistência em diversas condições climáticas e operacionais. Com opções de personalização e fácil montagem, nossos galpões proporcionam uma solução versátil e eficiente, assegurando um ambiente seguro e adaptável para suas operações e eventos.',
    imagens: imagens_galpao
  }
];

