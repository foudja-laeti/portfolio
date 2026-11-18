import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function Counter({ valeur, suffixe = '', label }) {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!visible) return
    const duree = 1500
    const debut = performance.now()
    let id
    const tick = (now) => {
      const p = Math.min((now - debut) / duree, 1)
      setN(Math.round(valeur * p))
      if (p < 1) id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [visible, valeur])

  return (
    <div ref={ref} className="stat">
      <span className="stat-num">
        {n}
        {suffixe}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default Counter