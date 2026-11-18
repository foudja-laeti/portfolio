import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

function NonTrouvee() {
  return (
    <PageWrapper titre="Page introuvable">
      <p className="texte">Cette page n'existe pas.</p>
      <Link className="btn primary" to="/">Retour à l'accueil</Link>
    </PageWrapper>
  )
}

export default NonTrouvee