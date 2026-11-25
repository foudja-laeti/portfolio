import PageWrapper from '../components/PageWrapper'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { projets } from '../data'

function Projets() {
  return (
    <PageWrapper titre="Projets">
      <Reveal className="projets-resume">
        <p>
          Cette page rassemble les projets que j'ai conçus et développés :
          des applications web full stack, de l'étude du besoin jusqu'à la mise en production.
        </p>
        <p>
          Chacune ayant le contexte, les technologies utilisées, le{' '}
          <strong>code source sur GitHub</strong> et la <strong>démo hébergée</strong> pour tester
          en direct.
        </p>
      </Reveal>

      <div className="projets-grid">
        {projets.map((p, i) => (
          <ProjectCard key={p.titre} delai={i * 0.1} {...p} />
        ))}
      </div>
    </PageWrapper>
  )
}

export default Projets