export const profile = {
  name: 'Leonardo de Lima',
  role: 'Full Stack Developer',
  location: 'Rio de Janeiro, Brasil',
  tagline:
    'Construo e mantenho produtos em produção. Python, TypeScript, React, Node.js e automação.',
  github: 'https://github.com/Prodenxo',
  linkedin: 'https://www.linkedin.com/in/leonardo-de-lima-dev/',
  email: 'leo.irak@hotmail.com',
  whatsapp: '5521996185328',
  whatsappDisplay: '(21) 99618-5328',
  available: true,
  photos: {
    portrait: '/images/leonardo-portrait.png',
    event: '/images/leonardo-event.png'
  }
}

export const stack = [
  'Python',
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'React Native',
  'Node.js',
  'Express',
  'PostgreSQL',
  'MySQL',
  'Redis',
  'Docker',
  'Git',
  'n8n'
]

export const highlights = [
  { label: 'Serviços em produção', value: '15+' },
  { label: 'Repos no GitHub', value: '18' },
  { label: 'Stack principal', value: 'Full Stack' },
  { label: 'Automação', value: 'Python + n8n' }
]

export const projects = [
  {
    name: 'Focomei',
    description:
      'Ecossistema full stack para MEI e contadores: web, mobile, backend Node.js, PostgreSQL, robô Python de contratos e integrações em produção.',
    stack: ['TypeScript', 'React', 'React Native', 'PostgreSQL', 'Python', 'Docker'],
    github: 'https://github.com/Prodenxo/focomei',
    featured: true
  },
  {
    name: 'Foco Simples',
    description:
      'App mobile de produtividade e finanças com Expo, React Native, backend e PostgreSQL. Builds EAS para Android e iOS.',
    stack: ['TypeScript', 'Expo', 'React Native', 'PostgreSQL', 'Zustand'],
    github: 'https://github.com/Prodenxo/FOCOSIMPLES',
    featured: true
  },
  {
    name: 'Robozap',
    description: 'Bot de WhatsApp com IA generativa, Express, Prisma e Docker.',
    stack: ['TypeScript', 'Node.js', 'Prisma', 'OpenAI'],
    github: 'https://github.com/Prodenxo/Robozap',
    featured: true
  },
  {
    name: 'Robô Tributação NCM',
    description: 'Automação fiscal em Python com interface web e deploy containerizado.',
    stack: ['Python', 'Docker', 'API REST'],
    github: 'https://github.com/Prodenxo/robo-tributacao-ncm',
    featured: true
  },
  {
    name: 'Disparador Mensagem',
    description: 'Ferramenta TypeScript para automação e disparo de mensagens.',
    stack: ['TypeScript', 'Node.js'],
    github: 'https://github.com/Prodenxo/disparador-mensagem',
    featured: false
  },
  {
    name: 'Ingresso',
    description: 'Plataforma de ingressos desenvolvida em TypeScript.',
    stack: ['TypeScript', 'React'],
    github: 'https://github.com/Prodenxo/Ingresso',
    featured: false
  }
]

export const experience = [
  {
    company: 'CF Contabilidade',
    role: 'Desenvolvedor Full Stack',
    period: 'abr 2026 · atual',
    type: 'Tempo integral',
    bullets: [
      'Ecossistemas full stack em produção com Docker/Easypanel',
      'Robôs Python, APIs REST, React, React Native e n8n',
      '15+ serviços ativos entre backends, frontends e automações'
    ]
  },
  {
    company: 'CF Contabilidade',
    role: 'Estagiário em Desenvolvimento de Sistemas',
    period: '13 jan 2026 · 31 mar 2026',
    type: 'Estágio',
    bullets: [
      'Apps web Full Stack com Node.js, React e Next.js',
      'APIs REST, PostgreSQL/MySQL e Git/GitHub',
      'Estágio durante ADS na UVA'
    ]
  }
]

export const education = [
  {
    school: 'Universidade Veiga de Almeida',
    degree: 'Graduação em Análise e Desenvolvimento de Sistemas',
    period: '2026 · em andamento'
  },
  {
    school: 'Firjan Senai Maracanã',
    degree: 'Curso Técnico em Desenvolvimento de Sistemas',
    period: '2023 · 2025'
  }
]
