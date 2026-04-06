import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const ringX = useMotionValue(-100)
  const ringY = useMotionValue(-100)

  const springConfig = { damping: 22, stiffness: 320, mass: 0.4 }
  const smoothRingX = useSpring(ringX, springConfig)
  const smoothRingY = useSpring(ringY, springConfig)

  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 4)
      cursorY.set(e.clientY - 4)
      ringX.set(e.clientX - 19)
      ringY.set(e.clientY - 19)
    }

    const handleMouseOver = (e) => {
      const isInteractive = e.target.closest('a, button, [role="button"], input, textarea, select, label')
      if (isInteractive) {
        dotRef.current?.style.setProperty('transform', 'scale(1.5)')
        dotRef.current?.style.setProperty('background', '#818cf8')
        ringRef.current?.style.setProperty('transform', 'scale(1.6)')
        ringRef.current?.style.setProperty('border-color', 'rgba(129,140,248,0.7)')
      }
    }

    const handleMouseOut = (e) => {
      const isInteractive = e.target.closest('a, button, [role="button"], input, textarea, select, label')
      if (isInteractive) {
        dotRef.current?.style.setProperty('transform', 'scale(1)')
        dotRef.current?.style.setProperty('background', 'var(--accent-indigo)')
        ringRef.current?.style.setProperty('transform', 'scale(1)')
        ringRef.current?.style.setProperty('border-color', 'rgba(99,102,241,0.5)')
      }
    }

    window.addEventListener('mousemove', moveCursor, { passive: true })
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [cursorX, cursorY, ringX, ringY])

  return (
    <>
      <motion.div
        ref={dotRef}
        className="cursor-dot"
        style={{ x: cursorX, y: cursorY, transition: 'transform 0.15s ease, background 0.2s ease' }}
      />
      <motion.div
        ref={ringRef}
        style={{
          x: smoothRingX,
          y: smoothRingY,
          transition: 'transform 0.2s ease, border-color 0.2s ease',
        }}
        className="cursor-ring"
      />
    </>
  )
}
