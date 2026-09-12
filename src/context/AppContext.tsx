import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { Theme, Lang } from '../types'
import { pt, en } from '../i18n'
import type { Translations } from '../i18n'

interface AppContextValue {
  theme: Theme
  toggleTheme: () => void
  lang: Lang
  toggleLang: () => void
  t: Translations
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    return 'light'
  })

  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'pt' || saved === 'en') return saved
    return 'en'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  const toggleLang = () => setLang(l => l === 'pt' ? 'en' : 'pt')

  const t = lang === 'pt' ? pt : en

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, toggleLang, t }}>
      {children}
    </AppContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
