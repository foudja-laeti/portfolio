import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Icone from './Icone'

function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'dark',
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // stockage indisponible : le thème ne sera pas mémorisé
    }
  }, [theme])

  const sombre = theme === 'dark'

  return (
    <button
      className="theme-btn"
      onClick={() => setTheme(sombre ? 'light' : 'dark')}
      aria-label={sombre ? 'Passer en mode clair' : 'Passer en mode sombre'}
      title={sombre ? 'Mode clair' : 'Mode sombre'}
    >
      <motion.span
        key={theme}
        style={{ display: 'flex' }}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {sombre ? <Icone nom="soleil" /> : <Icone nom="lune" />}
      </motion.span>
    </button>
  )
}

export default ThemeToggle