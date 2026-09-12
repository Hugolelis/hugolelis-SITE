import type { CSSProperties } from 'react'
import { useApp } from '../context/AppContext'
import { timeline } from '../data'
import type { TimelineCategory } from '../types'
import type { BadgeColor } from '../utils/issuerBadge'
import styles from './Timeline.module.css'

type ItemStyle = CSSProperties & { '--item-accent': string }

const CATEGORY_COLOR: Record<TimelineCategory, BadgeColor> = {
  internship: 'green',
  work: 'purple',
  education: 'blue',
  milestone: 'amber',
}

const TAG_CLASS: Record<BadgeColor, string> = {
  blue: styles.tagBlue,
  purple: styles.tagPurple,
  green: styles.tagGreen,
  amber: styles.tagAmber,
}

const DOT_CLASS: Record<BadgeColor, string> = {
  blue: styles.dotBlue,
  purple: styles.dotPurple,
  green: styles.dotGreen,
  amber: styles.dotAmber,
}

const ITEM_ACCENT_VAR: Record<BadgeColor, string> = {
  blue: 'var(--badge-blue-color)',
  purple: 'var(--badge-purple-color)',
  green: 'var(--badge-green-color)',
  amber: 'var(--badge-amber-color)',
}

export function Timeline() {
  const { t, lang } = useApp()

  return (
    <section id="trajetoria" className={styles.timeline}>
      <div className="container">
        <h2 className="section-title">{t.timeline.title}</h2>
        <div className={styles.track}>
          {timeline.map((item, i) => {
            const color = CATEGORY_COLOR[item.category]
            const isCurrent = i === 0
            return (
              <div
                key={i}
                className={styles.item}
                style={{ animation: `fadeUp 0.4s ease ${i * 0.1}s both`, '--item-accent': ITEM_ACCENT_VAR[color] } as ItemStyle}
              >
                <span className={styles.year}>{item.year}</span>
                <span className={`${styles.dot} ${DOT_CLASS[color]} ${isCurrent ? styles.dotCurrent : ''}`} aria-hidden="true" />
                <div className={styles.content}>
                  <span className={`${styles.tag} ${TAG_CLASS[color]}`}>
                    {item.type[lang]}
                    {isCurrent && <span className={styles.current}>{lang === 'pt' ? ' · atual' : ' · current'}</span>}
                  </span>
                  <h3 className={styles.role}>{item.role[lang]}</h3>
                  <p className={styles.place}>{item.place[lang]}</p>
                  <ul className={styles.desc}>
                    {item.description[lang].map((line, j) => (
                      <li key={j}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
