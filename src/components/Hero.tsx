import { useState, useEffect } from 'react'
import { useApp } from '../context/AppContext'
import { PdfModal } from './PdfModal'
import ShapeGrid from './ShapeGrid'
import styles from './Hero.module.css'

import cvUrl from '/Hugolelis_cv.pdf'

const email = 'hugodelelis05@gmail.com'

interface TerminalField {
  key: string
  labelPt: string
  labelEn: string
  valuePt: string
  valueEn: string
}

const fields: TerminalField[] = [
  { key: 'name',     labelPt: 'nome',        labelEn: 'name',     valuePt: 'Hugo de Lelis',            valueEn: 'Hugo de Lelis' },
  { key: 'stack',    labelPt: 'stack',       labelEn: 'stack',    valuePt: 'Python · Node · C++',       valueEn: 'Python · Node · C++' },
  { key: 'database', labelPt: 'dados',       labelEn: 'data',     valuePt: 'PostgreSQL · MySQL',       valueEn: 'PostgreSQL · MySQL' },
  { key: 'infra',    labelPt: 'infra',       labelEn: 'infra',    valuePt: 'Docker · Linux · Git',      valueEn: 'Docker · Linux · Git' },
  { key: 'location', labelPt: 'localizacao', labelEn: 'location', valuePt: 'Brasil',                    valueEn: 'Brazil' },
]

function useTypewriter(text: string, speed = 28) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    if (!text) return
    let i = 0
    const id = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => {
      clearInterval(id)
      setDisplayed('')
    }
  }, [text, speed])
  return displayed
}

export function Hero() {
  const { t, lang, theme } = useApp()
  const [animStep, setAnimStep] = useState(0)
  const [cvOpen, setCvOpen] = useState(false)

  const displayedTitle = useTypewriter('Hugo de Lelis', 30)

  useEffect(() => {
    const timers = fields.map((_, i) =>
      setTimeout(() => setAnimStep(i + 1), i * 150 + 400)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className={styles.hero} id='hero'>
      <div className={styles.shapeGrid} aria-hidden>
        <ShapeGrid
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor={theme === 'light' ? 'rgba(66, 66, 66, 0.1)' : 'rgba(255, 255, 255, 0.09)'}
          hoverFillColor={theme === 'light' ? 'rgba(168, 85, 247, 0.12)' : 'rgba(168, 85, 247, 0.2)'}
          shape="square"
          hoverTrailAmount={5}
        />
      </div>
      <div className={styles.layout}>

        <div className={styles.leftCol}>
          <h1 className={styles.title}>
            <span className={styles.accent}>{displayedTitle}</span>
            <span className={styles.cursor}>_</span>
          </h1>
          <p className={styles.role}>{lang === 'pt' ? 'Desenvolvedor' : 'Developer'}</p>
          <p className={styles.sub}>{t.hero.sub}</p>
          <div className={styles.cta}>
            <a href="/projetos" className="btn btn--primary">{t.hero.cta_projects}</a>
            <button
              className="btn btn--ghost"
              onClick={() => setCvOpen(true)}
            >
              {t.hero.cta_cv}
            </button>
            <a
              href={`mailto:${email}`}
              className={`btn btn--ghost ${styles.emailCta}`}
              aria-label={`${t.hero.cta_email}: ${email}`}
            >
              <span>{t.hero.cta_email}</span>
              <span className={styles.emailArrow} aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className={styles.terminal}>
          <div className={styles.termBar}>
            <span className={styles.termDot} style={{ background: '#ff5f57' }} />
            <span className={styles.termDot} style={{ background: '#ffbd2e' }} />
            <span className={styles.termDot} style={{ background: '#28c840' }} />
            <span className={styles.termTitle}>portfolio.config</span>
          </div>

          <div className={styles.termBody}>
            <p className={styles.termComment}>{lang === 'pt' ? '# configuração do portfólio' : '# portfolio config'}</p>
            <p className={styles.termComment}>export default {'{'}</p>

            {fields.map((field, i) => {
              const label = lang === 'pt' ? field.labelPt : field.labelEn
              const value = lang === 'pt' ? field.valuePt : field.valueEn

              return (
                <div
                  key={field.key}
                  className={`${styles.termLine} ${animStep > i ? styles.termLineVisible : ''}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className={styles.termKey}>&nbsp;&nbsp;{label}</span>
                  <span className={styles.termColon}>:</span>
                  <span className={styles.termQuote}>"</span>
                  <span className={styles.termValue}>{value}</span>
                  <span className={styles.termQuote}>"</span>
                  <span className={styles.termComma}>,</span>
                </div>
              )
            })}

            <p className={styles.termComment}>{'}'}</p>

            <div className={styles.termFooter}>
              <span className={styles.termSuccess}>
                {lang === 'pt' ? 'configuração carregada' : 'config loaded'}
              </span>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.scrollArrow} aria-hidden>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>

      {cvOpen && (
        <PdfModal
          name="Hugolelis_cv.pdf"
          issuer="Hugo de Lelis"
          file={cvUrl}
          onClose={() => setCvOpen(false)}
        />
      )}
    </section>
  )
}
