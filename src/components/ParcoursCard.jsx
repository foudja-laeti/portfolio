import { motion } from 'framer-motion'
import Icone from './Icone'

function ParcoursCard({ icone, titre, lieu, date, description, points, tags, delai = 0 }) {
  return (
    <motion.article
      className="card pcard"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: delai }}
      whileHover={{ y: -6 }}
    >
      <div className="pcard-head">
        <span className="pcard-icone">
          <Icone nom={icone} />
        </span>
        <div>
          <h3>{titre}</h3>
          <p className="lieu">{lieu}</p>
        </div>
        <span className="pcard-date">{date}</span>
      </div>
      {description && <p className="pcard-desc">{description}</p>}
      {points && (
        <ul className="pcard-points">
          {points.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
      )}
      {tags && (
        <ul className="tags">
          {tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}
    </motion.article>
  )
}

export default ParcoursCard