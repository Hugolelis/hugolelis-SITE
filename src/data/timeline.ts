import type { TimelineEntry } from '../types'

export const timeline: TimelineEntry[] = [
  {
    year: '2025',
    category: 'internship',
    type: { pt: 'Estágio', en: 'Internship' },
    role: { pt: 'Desenvolvedor de Software (Estagiário)', en: 'Software Developer (Intern)' },
    place: { pt: 'Metta Innovations', en: 'Metta Innovations' },
    description: {
      pt: [
        'Desenvolvimento backend em Visão Computacional e IA com C++ e Python',
        'Bancos de dados MySQL e PostgreSQL, aplicações Qt/QML',
        'Ambientes containerizados com Docker, testes unitários e controle de versão em GitLab',
        'Metodologia ágil SCRUMBAN',
      ],
      en: [
        'Backend development for Computer Vision and AI with C++ and Python',
        'MySQL and PostgreSQL databases, Qt/QML applications',
        'Containerized environments with Docker, unit testing, and version control in GitLab',
        'Agile SCRUMBAN methodology',
      ],
    },
  },
  {
    year: '2024',
    category: 'work',
    type: { pt: 'Trabalho', en: 'Work' },
    role: { pt: 'Desenvolvedor de Software (Autônomo)', en: 'Software Developer (Freelance)' },
    place: { pt: 'Autônomo', en: 'Self-employed' },
    description: {
      pt: [
        'Arquiteturas backend priorizando funcionalidade, desempenho e segurança',
        'Design de APIs focado em confiabilidade do tráfego de dados',
        'Ciclo de vida completo: planejamento técnico até deploy',
        'Otimização de performance em aplicações existentes',
      ],
      en: [
        'Backend architectures prioritizing functionality, performance, and security',
        'API design focused on reliable data traffic',
        'Full lifecycle: technical planning through deploy',
        'Performance optimization on existing applications',
      ],
    },
  },
  {
    year: '2024',
    category: 'education',
    type: { pt: 'Monitoria', en: 'Teaching' },
    role: { pt: 'Monitor Bolsista', en: 'Teaching Assistant' },
    place: { pt: 'UniFoa', en: 'UniFoa' },
    description: {
      pt: [
        'Monitoria em Programação Backend, Banco de Dados e Estrutura de Dados/Algoritmos',
        'Suporte direto a alunos na resolução de desafios práticos e dúvidas de disciplina',
      ],
      en: [
        'Teaching assistant for Backend Programming, Databases, and Data Structures/Algorithms',
        'Direct support helping students work through practical challenges and coursework questions',
      ],
    },
  },
  {
    year: '2024',
    category: 'education',
    type: { pt: 'Formação', en: 'Education' },
    role: { pt: 'Bacharelado em Sistemas de Informação', en: 'B.Sc. in Information Systems' },
    place: { pt: 'UniFoa', en: 'UniFoa' },
    description: {
      pt: ['Curso com foco em desenvolvimento de software, arquitetura de sistemas e banco de dados.'],
      en: ['Degree focused on software development, system architecture, and databases.'],
    },
  },
  {
    year: '2023',
    category: 'milestone',
    type: { pt: 'Primeiro contato com programação', en: 'First contact with programming' },
    role: { pt: 'Classificado para o evento programação 2.0 Inatel', en: 'Qualified for the Inatel 2.0 programming event' },
    place: { pt: 'Inatel', en: 'Inatel' },
    description: {
      pt: ['Classificado para competição de desafios de programação com foco em Python, resolvendo problemas algorítmicos sob pressão de tempo.'],
      en: ['Qualified for a competitive programming challenge focused on Python, solving algorithmic problems under time pressure.'],
    },
  },
]
