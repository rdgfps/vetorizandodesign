export type PortfolioCategory = 'all' | 'identidade' | 'logo' | 'comunicacao' | 'redes' | 'graficos'

export const brand = {
  name: 'Vetorizando',
  initials: 'V',
  tagline: 'Soluções criativas em design gráfico',
  region: 'Pelotas e Região - RS',
  city: 'Pelotas - RS',
  description:
    'Identidade visual, artes para redes, materiais gráficos e comunicação visual.',
  siteUrl: 'https://vetorizando.com.br',
  instagramHandle: '@vetorizandodesign',
  instagramUrl: 'https://instagram.com/vetorizandodesign',
  whatsappDisplay: '(53) 9 9999-9999',
  whatsappNumber: '5553999999999',
  businessHours: 'Segunda a Sexta, 9h-18h',
  developerCredit: 'Desenvolvido por Henrique Rodeghiero',
  developerUrl: 'https://instagram.com/henriquerodeghiero',
}

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
]

export function whatsappLink(message = 'Olá! Gostaria de solicitar um orçamento.') {
  return `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const services = [
  {
    num: '01',
    slug: 'identidade-visual',
    name: 'Identidade Visual',
    shortDesc:
      'Sistema visual completo que posiciona sua marca com consistência em todos os pontos de contato.',
    desc:
      'Um sistema de identidade visual completo é muito mais que um logotipo. É o conjunto de elementos que define como sua marca se apresenta ao mundo com consistência e autoridade.',
    benefits: [
      'Logotipo principal e variações',
      'Paleta de cores oficial',
      'Tipografia institucional',
      'Manual de identidade visual',
      'Aplicações em mockups reais',
    ],
    waMsg: 'Olá! Tenho interesse em Identidade Visual.',
  },
  {
    num: '02',
    slug: 'artes-para-redes',
    name: 'Artes para Redes',
    shortDesc:
      'Posts, stories e peças digitais criadas para deixar sua marca mais presente nas redes.',
    desc:
      'Criamos artes para redes sociais com visual profissional, consistência de marca e foco em comunicar melhor sua empresa no ambiente digital.',
    benefits: [
      'Posts para feed',
      'Stories e destaques',
      'Artes promocionais',
      'Peças para campanhas',
      'Templates alinhados à identidade visual',
    ],
    waMsg: 'Olá! Tenho interesse em artes para redes.',
  },
  {
    num: '03',
    slug: 'materiais-graficos',
    name: 'Materiais Gráficos',
    shortDesc:
      'Cartões, flyers, cardápios, banners e peças impressas ou digitais com acabamento profissional.',
    desc:
      'Desenvolvemos materiais gráficos para empresas que precisam comunicar produtos, serviços e campanhas com clareza e boa apresentação.',
    benefits: [
      'Cartões de visita e papelaria',
      'Flyers e panfletos',
      'Cardápios e catálogos',
      'Banners e outdoors',
      'Peças digitais para divulgação',
    ],
    waMsg: 'Olá! Tenho interesse em materiais gráficos.',
  },
  {
    num: '04',
    slug: 'comunicacao-visual',
    name: 'Comunicação Visual',
    shortDesc:
      'Soluções visuais para fachadas, banners, adesivos, sinalização e presença física da marca.',
    desc:
      'Criamos peças de comunicação visual para deixar sua marca mais visível, organizada e profissional em pontos físicos e materiais de divulgação.',
    benefits: [
      'Banners e faixas',
      'Adesivos e placas',
      'Sinalização interna e externa',
      'Layout para fachada',
      'Peças para impressão em grandes formatos',
    ],
    waMsg: 'Olá! Tenho interesse em comunicação visual.',
  },
  {
    num: '05',
    slug: 'logotipos',
    name: 'Logotipos',
    shortDesc:
      'Criação e refinamento de logotipos para marcas que precisam de uma apresentação clara e profissional.',
    desc:
      'Desenvolvemos logotipos simples, memoráveis e alinhados ao posicionamento do negócio, com arquivos preparados para uso digital e impresso.',
    benefits: [
      'Criação de logotipo',
      'Variações da marca',
      'Versões colorida e monocromática',
      'Arquivos para impressão e uso digital',
      'Aplicações básicas da marca',
    ],
    waMsg: 'Olá! Tenho interesse em logotipo.',
  },
  {
    num: '06',
    slug: 'consultoria-design',
    name: 'Consultoria de Design',
    shortDesc:
      'Orientação profissional para melhorar a comunicação visual da sua marca e tomar decisões com mais clareza.',
    desc:
      'Ajudamos empresas a entender o que precisa ser ajustado na identidade visual, nos materiais gráficos e na comunicação da marca antes de investir em novas peças.',
    benefits: [
      'Análise da comunicação visual atual',
      'Direcionamento para materiais e campanhas',
      'Sugestões de melhoria para marca',
      'Organização de prioridades visuais',
      'Apoio em decisões de design',
    ],
    waMsg: 'Olá! Tenho interesse em consultoria de design.',
  },
]

export const stats = [
  ['+8', 'Anos de experiência em projetos gráficos'],
  ['1:1', 'Atendimento direto'],
  ['Design', 'Para materiais digitais e impressos'],
] as const

export const differentials = [
  {
    num: '01',
    title: 'Atendimento Personalizado',
    desc:
      'Cada projeto começa com um briefing detalhado. Entendemos o seu negócio, seu público e seus objetivos antes de criar qualquer coisa.',
  },
  {
    num: '02',
    title: 'Design Estratégico',
    desc:
      'Não fazemos arte pela arte. Cada escolha visual - cor, tipografia, forma - serve a um propósito estratégico para a sua marca.',
  },
  {
    num: '03',
    title: 'Processo Profissional',
    desc:
      'Método claro com etapas definidas: briefing, pesquisa, desenvolvimento, revisões e entrega. Você acompanha tudo.',
  },
  {
    num: '04',
    title: 'Soluções Sob Medida',
    desc:
      'Nada de templates. Cada identidade visual é criada do zero, pensada exclusivamente para a realidade da sua empresa.',
  },
  {
    num: '05',
    title: 'Comunicação Transparente',
    desc:
      'Prazos cumpridos, retornos rápidos e total clareza em cada etapa. Você nunca ficará sem resposta.',
  },
  {
    num: '06',
    title: 'Presença Local, Visão Global',
    desc:
      'Atuamos em Pelotas e região com profundidade e proximidade, mas com padrão de qualidade que compete com os melhores do Brasil.',
  },
]

export const testimonials = [
  {
    texto:
      '"A Vetorizando transformou completamente a imagem do nosso escritório. Os clientes percebem a diferença imediatamente. Profissionalismo do começo ao fim."',
    nome: 'Rafael S.',
    cargo: 'Advogado - Pelotas, RS',
    initials: 'RS',
  },
  {
    texto:
      '"Precisávamos de uma marca que transmitisse confiança para nossos clientes. O resultado superou todas as expectativas. Processo organizado e comunicação excelente."',
    nome: 'Carla M.',
    cargo: 'Empresária - Pelotas, RS',
    initials: 'CM',
  },
  {
    texto:
      '"Finalmente encontrei um designer que entende de estratégia, não só de estética. A identidade visual ficou perfeita e continuo usando os serviços para minha rede social."',
    nome: 'Felipe P.',
    cargo: 'Profissional Liberal - Pelotas, RS',
    initials: 'FP',
  },
]

export const portfolioFilters: { key: PortfolioCategory; label: string }[] = [
  { key: 'all', label: 'Todos' },
  { key: 'identidade', label: 'Identidade Visual' },
  { key: 'logo', label: 'Logotipos' },
  { key: 'comunicacao', label: 'Comunicação Visual' },
  { key: 'redes', label: 'Artes para Redes' },
  { key: 'graficos', label: 'Materiais Gráficos' },
]

export const projects = [
  {
    cat: 'identidade' as PortfolioCategory,
    catLabel: 'Identidade Visual',
    name: 'Apex Construções',
    type: 'Construtora - Pelotas, RS',
    bg: 'linear-gradient(135deg,rgba(255,164,0,0.15),#061525)',
    logoText: 'APEX',
    logoSub: 'CONSTRUÇÕES',
    logoColor: 'var(--gold)',
  },
  {
    cat: 'logo' as PortfolioCategory,
    catLabel: 'Logotipo',
    name: 'Verde Gastronomia',
    type: 'Restaurante - Pelotas, RS',
    bg: 'linear-gradient(135deg,#0a2a1a,#061525)',
    logoText: 'VERDE',
    logoSub: 'GASTRONOMIA',
    logoColor: 'rgba(255,255,255,0.5)',
  },
  {
    cat: 'comunicacao' as PortfolioCategory,
    catLabel: 'Comunicação Visual',
    name: 'Dr. Silva Advocacia',
    type: 'Escritório Jurídico - Pelotas, RS',
    bg: 'linear-gradient(135deg,#1a0a2e,#061525)',
    logoText: 'DR. SILVA',
    logoSub: 'ADVOCACIA',
    logoColor: 'rgba(160,140,200,0.8)',
  },
  {
    cat: 'identidade' as PortfolioCategory,
    catLabel: 'Identidade Visual',
    name: 'Nexus Tecnologia',
    type: 'Tech - Pelotas, RS',
    bg: 'linear-gradient(135deg,#0a1a2a,#0d2d4a)',
    logoText: 'NEXUS',
    logoSub: 'TECNOLOGIA',
    logoColor: 'rgba(100,180,255,0.7)',
  },
  {
    cat: 'redes' as PortfolioCategory,
    catLabel: 'Artes para Redes',
    name: 'Café Origem',
    type: 'Cafeteria - Pelotas, RS',
    bg: 'linear-gradient(135deg,#2a1a0a,#1a0f05)',
    logoText: 'CAFÉ ORIGEM',
    logoSub: 'Artes para Redes',
    logoColor: 'rgba(200,160,100,0.6)',
  },
  {
    cat: 'graficos' as PortfolioCategory,
    catLabel: 'Materiais Gráficos',
    name: 'Vitória Imobiliária',
    type: 'Imobiliária - Pelotas, RS',
    bg: 'linear-gradient(135deg,#1a1a1a,#2a2a2a)',
    logoText: 'VITÓRIA',
    logoSub: 'IMOBILIÁRIA',
    logoColor: 'rgba(255,164,0,0.7)',
  },
  {
    cat: 'logo' as PortfolioCategory,
    catLabel: 'Logotipo',
    name: 'Studio Forma',
    type: 'Arquitetura - Pelotas, RS',
    bg: 'linear-gradient(135deg,#1a1a2e,#0a0a1a)',
    logoText: 'FORMA',
    logoSub: 'STUDIO',
    logoColor: 'rgba(180,180,255,0.7)',
  },
  {
    cat: 'comunicacao' as PortfolioCategory,
    catLabel: 'Comunicação Visual',
    name: 'Clínica Bem Estar',
    type: 'Saúde - Pelotas, RS',
    bg: 'linear-gradient(135deg,#0a1e1a,#061525)',
    logoText: 'BEM ESTAR',
    logoSub: 'CLÍNICA',
    logoColor: 'rgba(100,220,180,0.7)',
  },
  {
    cat: 'redes' as PortfolioCategory,
    catLabel: 'Artes para Redes',
    name: 'Academia Força Total',
    type: 'Fitness - Pelotas, RS',
    bg: 'linear-gradient(135deg,#1a0505,#061525)',
    logoText: 'FORÇA TOTAL',
    logoSub: 'Academia',
    logoColor: 'rgba(255,80,80,0.7)',
  },
]

export const aboutValues = [
  {
    title: 'Qualidade sem concessão',
    desc: 'Cada entrega passa por revisão rigorosa. Só sai o que tem nosso padrão de qualidade.',
  },
  {
    title: 'Parceria de verdade',
    desc: 'Não somos fornecedores. Somos parceiros que querem ver seu negócio crescer.',
  },
  {
    title: 'Foco em resultado',
    desc: 'Design bonito sem resultado não nos interessa. Criamos o que funciona para o seu negócio.',
  },
  {
    title: 'Comprometimento com prazos',
    desc: 'Prazo combinado é prazo cumprido. Sua operação não pode esperar por atrasos.',
  },
]

export const processSteps = [
  { num: '01', name: 'Briefing', desc: 'Entendemos seu negócio, público, concorrência e objetivos em profundidade.' },
  { num: '02', name: 'Pesquisa', desc: 'Análise de mercado, referências visuais e mapa de posicionamento da marca.' },
  { num: '03', name: 'Desenvolvimento', desc: 'Criação com método. Cada elemento tem um motivo estratégico de existir.' },
  { num: '04', name: 'Ajustes', desc: 'Revisões colaborativas até chegar no resultado que nos orgulhamos de entregar.' },
  { num: '05', name: 'Entrega', desc: 'Todos os arquivos organizados, prontos para qualquer uso presente ou futuro.' },
]

export const instagramTiles = [
  'Identidade Visual',
  'Artes para Redes',
  'Materiais Gráficos',
  'Comunicação Visual',
  'Logotipos',
  'Consultoria de Design',
]
