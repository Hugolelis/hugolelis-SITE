import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 1,
    title: { pt: 'Generator', en: 'Generator' },
    tag: 'Node.js · TypeScript · PostgreSQL',
    type: 'API',
    description: {
      pt: [
        'Geração de CPF, senha, UUID e números sorteados',
        'Encurtador de URL e serviços de data via REST API em Node.js/TypeScript',
      ],
      en: [
        'CPF, password, UUID, and sorted number generation',
        'URL shortener and date services via a REST API in Node.js/TypeScript',
      ],
    },
    year: '2026',
    link: 'https://github.com/Hugolelis/Generator-API',
  },
  {
    id: 2,
    title: { pt: 'YT Downloader', en: 'YT Downloader' },
    tag: 'Python · yt-dlp · Typer',
    type: 'CLI',
    description: {
      pt: [
        'Download de vídeo e áudio do YouTube direto do terminal',
        'Seleção de qualidade e extração em MP3, construído com yt-dlp e Typer',
      ],
      en: [
        'Downloads YouTube video and audio directly from the terminal',
        'Quality selection and MP3 extraction, built with yt-dlp and Typer',
      ],
    },
    year: '2026',
    link: 'https://github.com/Hugolelis/YT_Downloader-CLI',
  },
  {
    id: 3,
    title: { pt: 'Lexio', en: 'Lexio' },
    tag: 'Python · Typer · pymupdf · rich',
    type: 'CLI',
    description: {
      pt: [
        'Análise léxica de textos e PDFs, com extração de termos e frequência',
        'Estatísticas de corpus via CLI em Python com Typer e rich',
      ],
      en: [
        'Lexical analysis of text and PDF files, with term extraction and frequency',
        'Corpus statistics via a Python CLI built with Typer and rich',
      ],
    },
    year: '2026',
    link: 'https://github.com/Hugolelis/Lexio-CLI',
  },
  {
    id: 4,
    title: { pt: 'QrCode', en: 'QrCode' },
    tag: 'C++ · Reed-Solomon · Galois Field',
    type: 'TOOL',
    description: {
      pt: [
        'Codificação Reed-Solomon e aritmética em corpo de Galois implementadas do zero',
        'Montagem da matriz e exportação para PNG/PBM, sem bibliotecas externas',
      ],
      en: [
        'Reed-Solomon error correction and Galois field arithmetic implemented from scratch',
        'Matrix placement and PNG/PBM export, with no external libraries',
      ],
    },
    year: '2026',
    link: 'https://github.com/Hugolelis/qrcode-TOOL',
  },
]
