import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icone from './Icone'
import { roles } from '../data'

function useTyping(mots, vitesse = 80, pause = 1400) {
  const [index, setIndex] = useState(0)
  const [texte, setTexte] = useState('')
  const [suppression, setSuppression] = useState(false)

  useEffect(() => {
    const mot = mots[index]
    let delai = suppression ? vitesse / 2 : vitesse
    if (!suppression && texte === mot) delai = pause

    const t = setTimeout(() => {
      if (!suppression && texte === mot) {
        setSuppression(true)
      } else if (suppression && texte === '') {
        setSuppression(false)
        setIndex((index + 1) % mots.length)
      } else {
        setTexte(mot.slice(0, texte.length + (suppression ? -1 : 1)))
      }
    }, delai)

    return () => clearTimeout(t)
  }, [texte, suppression, index, mots, vitesse, pause])

  return texte
}

const monter = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
})

function Hero({ profil }) {
  const role = useTyping(roles)

  return (
    <section className="hero">
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="container hero-grid">
        <div className="hero-texte">
          <motion.p className="eyebrow" {...monter(0)}>
            Bonjour, moi c'est Laetitia <Icone nom="etincelle" />
          </motion.p>
          <motion.h1 {...monter(0.15)}>{profil.nom}</motion.h1>
          <motion.h2 {...monter(0.3)}>
            <span className="role">{role}</span>
            <span className="caret">|</span>
          </motion.h2>
          <motion.p className="lead" {...monter(0.45)}>
            {profil.accroche}
          </motion.p>
          <motion.div className="actions" {...monter(0.6)}>
            <a className="btn primary" href={profil.cv} download>Télécharger mon CV</a>
            <Link className="btn" to="/projets">Voir mes projets</Link>
            <Link className="btn" to="/contact">Me contacter</Link>
          </motion.div>
          <motion.p className="meta" {...monter(0.8)}>
            <Icone nom="lieu" /> {profil.ville} · Mobilité : disponible pour me déplacer
          </motion.p>
        </div>

        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="photo-frame">
            <img src={profil.photo} alt={`Portrait de ${profil.nom}`} />
          </div>
          <span className="chip c1">Dev Full Stack</span>
          <span className="chip c2">Product Owner</span>
          <span className="chip c3">Architecte logiciel</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero