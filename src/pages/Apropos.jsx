import PageWrapper from '../components/PageWrapper'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import ParcoursCard from '../components/ParcoursCard'
import Icone from '../components/Icone'
import { apropos, bilingue, stats, experiences, formations } from '../data'

function Apropos() {
  return (
    <PageWrapper titre="À propos">
      {apropos.map((p, i) => (
        <Reveal key={p} delay={i * 0.1}>
          <p className="texte">{p}</p>
        </Reveal>
      ))}

      <Reveal className="langue-card">
        <span className="langue-icone">
          <Icone nom="langues" />
        </span>
        <div>
          <h3>{bilingue.titre}</h3>
          <p>{bilingue.texte}</p>
        </div>
      </Reveal>

      <div className="stats">
        {stats.map((s) => (
          <Counter key={s.label} {...s} />
        ))}
      </div>

      <h2 className="sous-titre sous-titre-grand">Expérience</h2>
      <div className="parcours-grid">
        {experiences.map((e, i) => (
          <ParcoursCard key={e.titre} delai={i * 0.1} {...e} />
        ))}
      </div>

      <h2 className="sous-titre sous-titre-grand">Formation</h2>
      <div className="parcours-grid">
        {formations.map((f, i) => (
          <ParcoursCard key={f.titre} delai={i * 0.1} {...f} />
        ))}
      </div>
    </PageWrapper>
  )
}

export default Apropos