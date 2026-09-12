import { useState } from 'react'
import { Nav, PdfModal, Reveal } from '../components'
import { useApp } from '../context/AppContext'
import { certificates } from '../data'
import type { Certificate } from '../types'
import { getIssuerBadge, type BadgeColor } from '../utils/issuerBadge'
import styles from './CertificatesPage.module.css'

const BADGE_CLASS: Record<BadgeColor, string> = {
  blue: styles.badgeBlue,
  purple: styles.badgePurple,
  green: styles.badgeGreen,
  amber: styles.badgeAmber,
}

export function CertificatesPage() {
  const { t, lang } = useApp()
  const [selected, setSelected] = useState<Certificate | null>(null)

  return (
    <div className={styles.page}>
      <Nav />
        <main className={styles.main}>
          <Reveal>
            <header className={styles.header}>
              <span className={styles.count}>{t.certificates.count.replace('{n}', String(certificates.length))}</span>
              <h1 className={styles.title}>{t.certificates.title}</h1>
            </header>
          </Reveal>
        <div className={styles.grid}>
            {certificates.map((cert, i) => {
              const badge = getIssuerBadge(cert.issuer)
              return (
              <button
                key={i}
                className={styles.card}
                style={{ animation: `fadeUp 0.4s ease ${i * 0.06}s both` }}
                onClick={() => setSelected(cert)}
              >
              <div className={`${styles.icon} ${BADGE_CLASS[badge.color]}`} aria-hidden="true" title={badge.org}>
                {badge.initials}
              </div>
              <div className={styles.info}>
                <span className={styles.name}>{cert.name}</span>
                <span className={styles.issuer}>{cert.issuer}</span>
              </div>
              <div className={styles.meta}>
                <span className={styles.year}>{cert.year}</span>
                <span className={styles.arrow} aria-hidden="true">↗</span>
              </div>
            </button>
              )
            })}
        </div>
        <div className={styles.profileCta}>
          <span>{lang === 'pt' ? 'Quer ver meu perfil?' : 'Want to see my profile?'}</span>
          <a href="https://www.linkedin.com/in/hugolelis/" target="_blank" rel="noreferrer">
            {lang === 'pt' ? 'Acessar LinkedIn' : 'Visit LinkedIn'} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </main>

      {selected && (
        <PdfModal
          name={selected.name}
          issuer={`${selected.issuer} · ${selected.year}`}
          file={selected.file}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}
