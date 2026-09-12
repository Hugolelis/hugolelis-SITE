import { useState } from 'react'
import { Nav, PdfModal, Reveal } from '../components'
import { useApp } from '../context/AppContext'
import { certificates, posts } from '../data'
import type { Certificate } from '../types'
import { useShowMore } from '../hooks/useShowMore'
import { getIssuerBadge, type BadgeColor } from '../utils/issuerBadge'
import styles from './MorePage.module.css'

const BADGE_CLASS: Record<BadgeColor, string> = {
  blue: styles.badgeBlue,
  purple: styles.badgePurple,
  green: styles.badgeGreen,
  amber: styles.badgeAmber,
}

const INITIAL_COUNT = 4

export function MorePage() {
  const { t, lang } = useApp()
  const [selected, setSelected] = useState<Certificate | null>(null)
  const certsShown = useShowMore(certificates, INITIAL_COUNT)
  const postsShown = useShowMore(posts, INITIAL_COUNT)

  return (
    <div className={styles.page}>
      <Nav />
      <main id="main-content" className={styles.main}>
        <Reveal>
          <header className={styles.header}>
            <h1 className={styles.title}>{lang === 'pt' ? 'Mais' : 'More'}</h1>
            <p className={styles.intro}>
              {lang === 'pt'
                ? 'Certificados que já tirei e conteúdo que compartilho no LinkedIn.'
                : 'Certificates I\'ve earned and content I share on LinkedIn.'}
            </p>
          </header>
        </Reveal>

        <section id="certificados" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.count}>{t.certificates.count.replace('{n}', String(certificates.length))}</span>
            <h2 className={styles.sectionTitle}>{t.certificates.title}</h2>
          </div>
          <div className={styles.grid}>
            {certsShown.visible.map((cert, i) => {
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
          {certsShown.remaining > 0 && (
            <div className={styles.showMore}>
              <button className="btn btn--ghost" onClick={certsShown.showMore}>
                {lang === 'pt' ? `Ver mais (${certsShown.remaining})` : `Show more (${certsShown.remaining})`}
              </button>
            </div>
          )}
        </section>

        <section id="linkedin" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.count}>{lang === 'pt' ? `${posts.length} publicações` : `${posts.length} posts`}</span>
            <h2 className={styles.sectionTitle}>LinkedIn</h2>
          </div>
          <div className={styles.list}>
            {postsShown.visible.map(post => (
              <a
                key={post.number}
                className={styles.post}
                href={post.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.number}>{post.number}</span>
                <span className={styles.postTitle}>{post.title[lang]}</span>
                <span className={styles.arrow} aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          {postsShown.remaining > 0 && (
            <div className={styles.showMore}>
              <button className="btn btn--ghost" onClick={postsShown.showMore}>
                {lang === 'pt' ? `Ver mais (${postsShown.remaining})` : `Show more (${postsShown.remaining})`}
              </button>
            </div>
          )}
        </section>

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
