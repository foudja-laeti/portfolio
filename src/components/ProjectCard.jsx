import { useState } from 'react'
import { motion } from 'framer-motion'

const GITHUB =
  'M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17 4.4 18 4.7 18 4.7c.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6C20.2 21.4 23.5 17.1 23.5 12 23.5 5.7 18.3.5 12 .5z'
const EXTERNE =
  'M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z'

function Icone({ d }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}

function Bouton({ href, icone, label, type }) {
  if (!href) {
    return (
      <span className={`btn-projet ${type} off`} title="Lien bientôt disponible">
        <Icone d={icone} /> {label}
      </span>
    )
  }
  return (
    <a className={`btn-projet ${type}`} href={href} target="_blank" rel="noreferrer">
      <Icone d={icone} /> {label}
    </a>
  )
}

function ProjectCard({ titre, description, techno, image, code, demo, delai = 0 }) {
  const [ouvert, setOuvert] = useState(false)
  const long = description.length > 120
  const initiales = titre
    .split(' ')
    .filter((m) => m.length > 2)
    .slice(0, 2)
    .map((m) => m[0])
    .join('')
    .toUpperCase()

  return (
    <motion.article
      className="projet"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: delai }}
      whileHover={{ y: -8 }}
    >
      <div className="projet-visuel">
        {image ? <img src={image} alt={`Aperçu du projet ${titre}`} /> : <span>{initiales}</span>}
      </div>

      <div className="projet-corps">
        <h3>{titre}</h3>
        <p className={ouvert ? 'projet-desc ouvert' : 'projet-desc'}>{description}</p>
        {long && (
          <button className="voir-plus" onClick={() => setOuvert(!ouvert)}>
            {ouvert ? 'Voir moins' : 'Voir plus'}
          </button>
        )}

        <ul className="tags">
          {techno.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="projet-actions">
          <Bouton href={code} icone={GITHUB} label="Code" type="code" />
          <Bouton href={demo} icone={EXTERNE} label="Démo" type="demo" />
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard