// Substitua todos os dados abaixo pelos dados reais da empresa antes de publicar.
export const site = {
  name: 'Oficina Ferreira & Filhos',
  shortName: 'Oficina Ferreira',
  legalName: 'Ferreira & Filhos – Reparação Automóvel, Lda.',
  nif: '500 000 000',
  registry: 'Conservatória do Registo Comercial de Braga',
  capital: '5.000,00 €',
  url: 'https://oficina-ferreira.pt',
  phone: '+351 253 000 000',
  phoneDisplay: '253 000 000',
  mobile: '+351 910 000 000',
  mobileDisplay: '910 000 000',
  email: 'geral@oficina-ferreira.pt',
  address: {
    street: 'Rua da Indústria, 123',
    postalCode: '4700-000',
    city: 'Braga',
    country: 'Portugal',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+da+Ind%C3%BAstria+123+Braga',
  hours: [
    { days: 'Segunda a Sexta', time: '08:30 – 12:30 · 14:00 – 19:00' },
    { days: 'Sábado', time: '09:00 – 13:00' },
    { days: 'Domingo e feriados', time: 'Encerrado' },
  ],
  foundedYear: 1998,
  legalUpdated: '2 de outubro de 2026',
} as const

export const legalLinks = {
  livroReclamacoes: 'https://www.livroreclamacoes.pt/Inicio/',
  ralEntity: {
    name: 'CASA – Centro de Arbitragem do Setor Automóvel',
    url: 'https://www.arbitragemauto.pt',
  },
  consumerPortal: 'https://www.consumidor.gov.pt',
  cnpd: 'https://www.cnpd.pt',
} as const

export const navItems = [
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#sobre', label: 'Sobre nós' },
  { href: '/#como-funciona', label: 'Como funciona' },
  { href: '/#perguntas', label: 'Perguntas' },
  { href: '/#contactos', label: 'Contactos' },
] as const

export const serviceOptions = [
  'Revisão / manutenção',
  'Diagnóstico eletrónico',
  'Travões',
  'Embraiagem e caixa',
  'Pneus e alinhamento',
  'Ar condicionado',
  'Suspensão e direção',
  'Preparação para inspeção',
  'Outro assunto',
] as const
