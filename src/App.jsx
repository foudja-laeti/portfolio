import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'
import Competences from './pages/Competences'
import Projets from './pages/Projets'
import Contact from './pages/Contact'
import NonTrouvee from './pages/NonTrouvee'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/projets" element={<Projets />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NonTrouvee />} />
      </Route>
    </Routes>
  )
}

export default App