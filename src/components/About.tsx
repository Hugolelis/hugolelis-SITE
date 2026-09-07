import { useApp } from '../context/AppContext'
import styles from './About.module.css'

const interests = [
  'Engenharia de Software', 'Algoritmos', 'Estruturas de Dados',
  'Arquitetura de Sistemas', 'Performance', 'Backend', 'Visão Computacional', 'IA',
]
const interestsEn = [
  'Software Engineering', 'Algorithms', 'Data Structures',
  'System Architecture', 'Performance', 'Backend', 'Computer Vision', 'AI',
]

export function About() {
  const { t, lang } = useApp()
  const interestTags = lang === 'pt' ? interests : interestsEn

  return (
    <section id="sobre" className={styles.about}>
      <div className="container">
        <div className={styles.header}>
          <img
            src="/avatar.jpg"
            alt={lang === 'pt' ? 'Foto de Hugo de Lelis' : 'Photo of Hugo de Lelis'}
            className={styles.avatar}
            width={84}
            height={84}
          />
          <h2 className={`section-title ${styles.title}`}>{t.about.title}</h2>
        </div>

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
