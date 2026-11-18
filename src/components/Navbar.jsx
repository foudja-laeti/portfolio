import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import Icone from './Icone'
import { profil } from '../data'

const liens = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/competences', label: 'Compétences' },
  { to: '/projets', label: 'Projets' },
  { to: '/contact', label: 'Contact' },
]

function Navbar({ nom }) {
  const [ouvert, setOuvert] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <header className="navbar">
      <motion.div className="progress" style={{ scaleX }} />
      <div className="container navbar-inner">
        <Link to="/" className="logo">
          <img src={profil.logo} alt="" className="logo-img" />
          <span>{nom}</span>
        </Link>

        <nav className={ouvert ? 'nav-links open' : 'nav-links'}>
          {liens.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setOuvert(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-droite">
          <ThemeToggle />
          <button
            className="menu-btn"
            aria-label="Ouvrir le menu"
            aria-expanded={ouvert}
            onClick={() => setOuvert(!ouvert)}
          >
            <Icone nom="menu" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar