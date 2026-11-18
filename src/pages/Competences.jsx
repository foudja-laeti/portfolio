import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import Icone from '../components/Icone'
import { competences, profil } from '../data'

const items = competences.flatMap((c) => c.items.map((it) => ({ ...it, cat: c.id })))

function pointsSphere(n) {
  const phi = Math.PI * (3 - Math.sqrt(5))
  return Array.from({ length: n }, (_, i) => {
    const y = n === 1 ? 0 : 1 - (i / (n - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const t = phi * i
    return { x: Math.cos(t) * r, y, z: Math.sin(t) * r }
  })
}
const points = pointsSphere(items.length)

const AUTO = { x: 0.0015, y: 0.004 }

function Competences() {
  const [filtre, setFiltre] = useState(null)
  const scene = useRef(null)
  const refs = useRef([])
  const angle = useRef({ x: 0.3, y: 0 })
  const vitesse = useRef({ x: 0, y: 0.004 })
  const cible = useRef({ ...AUTO })
  const pause = useRef(false)
  const rayon = useRef(200)

  useEffect(() => {
    const el = scene.current

    const mesurer = () => {
      rayon.current = Math.max(70, el.clientWidth / 2 - 30)
    }

    const dessiner = () => {
      const R = rayon.current
      const { x: ax, y: ay } = angle.current
      const cx = Math.cos(ax)
      const sx = Math.sin(ax)
      const cy = Math.cos(ay)
      const sy = Math.sin(ay)
      const fov = 3.5

      refs.current.forEach((node, i) => {
        if (!node) return
        const p = points[i]
        // rotation autour de l'axe Y puis de l'axe X
        const x1 = p.x * cy + p.z * sy
        const z1 = -p.x * sy + p.z * cy
        const y2 = p.y * cx - z1 * sx
        const z2 = p.y * sx + z1 * cx
        // perspective : plus c'est proche, plus c'est grand
        const s = fov / (fov - z2)
        node.style.transform = `translate(${x1 * R}px, ${y2 * R}px) translate(-50%, -50%) scale(${s.toFixed(3)})`
        node.style.zIndex = String(Math.round((z2 + 1) * 50))
        node.style.setProperty('--prof', ((z2 + 1) / 2).toFixed(3))
      })
    }

    mesurer()
    dessiner()
    window.addEventListener('resize', mesurer)

    const reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let id

    const tick = () => {
      const v = vitesse.current
      const c = cible.current
      if (pause.current) {
        v.x *= 0.9
        v.y *= 0.9
      } else {
        v.x += (c.x - v.x) * 0.05
        v.y += (c.y - v.y) * 0.05
      }
      angle.current.x += v.x
      angle.current.y += v.y
      dessiner()
      id = requestAnimationFrame(tick)
    }

    if (!reduit) id = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(id)
      window.removeEventListener('resize', mesurer)
    }
  }, [])

  const bouger = (e) => {
    const r = scene.current.getBoundingClientRect()
    const dx = (e.clientX - r.left) / r.width - 0.5
    const dy = (e.clientY - r.top) / r.height - 0.5
    cible.current = { x: -dy * 0.03, y: dx * 0.04 }
  }

  const quitter = () => {
    cible.current = { ...AUTO }
  }

  const cat = competences.find((c) => c.id === filtre)
  const affichees = cat ? [cat] : competences

  return (
    <PageWrapper titre="Compétences">
      <p className="aide">
        <Icone nom="astuce" /> Survole la sphère pour l'explorer · choisis une catégorie pour voir le détail
      </p>

      <div className="comp-layout">
        <div className="comp-gauche">
          <div className="sphere" ref={scene} onPointerMove={bouger} onPointerLeave={quitter}>
            <div className="anneau a1" />
            <div className="anneau a2" />
            <div className="anneau a3" />
            <div className="coeur">
              <img src={profil.logo} alt="" />
            </div>

            {items.map((it, i) => (
              <div
                key={it.nom}
                ref={(el) => {
                  refs.current[i] = el
                }}
                className={`sphere-item${filtre ? (it.cat === filtre ? ' actif' : ' attenue') : ''}`}
                onPointerEnter={() => {
                  pause.current = true
                }}
                onPointerLeave={() => {
                  pause.current = false
                }}
              >
                <span className="sphere-sigle">
                  <Icone nom={it.icone} />
                </span>
                {it.nom}
              </div>
            ))}
          </div>
        </div>

        <div className="comp-droite">
          <div className="filtres" role="tablist">
            <button
              role="tab"
              aria-selected={!filtre}
              className={!filtre ? 'onglet actif' : 'onglet'}
              onClick={() => setFiltre(null)}
            >
              {!filtre && (
                <motion.span
                  layoutId="filtre-fond"
                  className="onglet-fond"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <Icone nom="tout" /> Tout
              <span className="onglet-count">{items.length}</span>
            </button>
            {competences.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={filtre === c.id}
                className={filtre === c.id ? 'onglet actif' : 'onglet'}
                onClick={() => setFiltre(c.id)}
              >
                {filtre === c.id && (
                  <motion.span
                    layoutId="filtre-fond"
                    className="onglet-fond"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <Icone nom={c.icone} /> {c.categorie}
                <span className="onglet-count">{c.items.length}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filtre ?? 'tout'}
              className="detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {affichees.map((c) => (
                <div key={c.id} className="detail-bloc">
                  <h3>
                    <Icone nom={c.icone} /> {c.categorie}
                    <span className="detail-count">{c.items.length}</span>
                  </h3>
                  <p className="panneau-desc">{c.description}</p>
                  <div className="tuiles">
                    {c.items.map((it, i) => (
                      <motion.div
                        key={it.nom}
                        className="tuile"
                        initial={{ opacity: 0, scale: 0.5, y: 30, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 + i * 0.05 }}
                        whileHover={{ scale: 1.08, y: -6 }}
                      >
                        <span className="sigle">
                          <Icone nom={it.icone} />
                        </span>
                        <span>{it.nom}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </PageWrapper>
  )
}

export default Competences