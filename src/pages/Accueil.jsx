import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import Icone from '../components/Icone'
import { profil } from '../data'

const pages = [
  { to: '/a-propos', icone: 'apropos', titre: 'À propos', texte: 'Mon profil, mon expérience, ma formation et mes langues.' },
  { to: '/competences', icone: 'competences', titre: 'Compétences', texte: 'Backend, frontend, mobile, outils et bases de données.' },
  { to: '/projets', icone: 'projets', titre: 'Projets', texte: "Les applications que j'ai conçues et développées." },
  { to: '/contact', icone: 'contact', titre: 'Contact', texte: 'Écrivons-nous : stage, collaboration, échange.' },
]

function Accueil() {
  return (
    <>
      <Hero profil={profil} />
      <section className="section">
        <div className="container">
          
          <div className="grid">
            {pages.map((p, i) => (
              <Reveal key={p.to} delay={i * 0.1}>
                
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Accueil