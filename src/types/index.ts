export interface LocalizedText {
  pt: string
  en: string
}

export interface LocalizedList {
  pt: string[]
  en: string[]
}

export interface Project {
  id: number
  title: LocalizedText
  tag: string
  type: 'API' | 'CLI' | 'WEB' | 'LIB' | 'TOOL' | 'OTHER'
  description: LocalizedList
  year: string
  link?: string
  deploy?: string
}

export interface Certificate {
  name: string
  issuer: string
  year: string
  file: string
}

export type TimelineCategory = 'milestone' | 'education' | 'work' | 'internship'

export interface TimelineEntry {
  year: string
  category: TimelineCategory
  type: LocalizedText
  role: LocalizedText
  place: LocalizedText
  description: LocalizedList
}

export interface LinkedInPost {
  number: string
  title: LocalizedText
  url: string
}

export type Theme = 'dark' | 'light'
export type Lang = 'pt' | 'en'
