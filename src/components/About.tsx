import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { useApp } from '../context/AppContext'
import styles from './About.module.css'

const CRTWarp = lazy(() => import('./CRTWarp'))

const interests = [
  'Engenharia de Software', 'Algoritmos', 'Estruturas de Dados',
  'Arquitetura de Sistemas', 'Performance', 'Backend', 'Visão Computacional', 'IA',
]
const interestsEn = [
  'Software Engineering', 'Algorithms', 'Data Structures',
  'System Architecture', 'Performance', 'Backend', 'Computer Vision', 'AI',
]

export function About() {
  const { t, lang, theme } = useApp()
  const interestTags = lang === 'pt' ? interests : interestsEn

  const bgSlotRef = useRef<HTMLDivElement>(null)
  const [showBg, setShowBg] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const slot = bgSlotRef.current
    if (!slot || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShowBg(true)
        observer.disconnect()
      },
      { rootMargin: '200px 0px' }
    )

    observer.observe(slot)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReducedMotion(query.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return (
    <section id="sobre" className={styles.about}>
      <div ref={bgSlotRef} className={styles.warpBg} aria-hidden>
        {showBg && (
          <Suspense fallback={null}>
            <CRTWarp
              color={theme === 'light' ? '#8b5cf6' : '#a855f7'}
              backgroundColor={theme === 'light' ? '#f7f7f5' : '#0a0a0a'}
              speed={0.3}
              curvature={0.2}
              scanlineStrength={theme === 'light' ? 0.1 : 0.12}
              scanlineFrequency={160}
              waveAmplitude={theme === 'light' ? 0.14 : 0.16}
              waveFrequency={2}
              bloom={theme === 'light' ? 0.7 : 0.75}
              bloomRadius={1}
              noise={theme === 'light' ? 0.02 : 0.03}
              vignette={theme === 'light' ? 0.55 : 0.5}
              brightness={theme === 'light' ? 0.75 : 0.8}
              rgbShift={theme === 'light' ? 0.004 : 0.005}
              mouseReact
              mouseStrength={0.35}
              dpr={1.5}
              fps={30}
              paused={reducedMotion}
            />
          </Suspense>
        )}
      </div>
      <div className="container">
        <h2 className={`section-title ${styles.title}`}>{t.about.title}</h2>

        <div className={styles.body}>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>

        <p className={styles.interestsLabel}>{lang === 'pt' ? 'Áreas de interesse' : 'Areas of interest'}</p>
        <div className={styles.interests}>
          {interestTags.map(tag => (
            <span key={tag} className={styles.interest}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
