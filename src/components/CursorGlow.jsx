import { useEffect, useRef } from 'react'

function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const bouger = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`
      }
    }
    window.addEventListener('mousemove', bouger)
    return () => window.removeEventListener('mousemove', bouger)
  }, [])

  return <div ref={ref} className="cursor-glow" />
}

export default CursorGlow