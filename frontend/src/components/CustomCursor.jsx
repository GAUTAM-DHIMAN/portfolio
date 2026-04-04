import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const ringX = useMotionValue(-100)
  const ringY = useMotionValue(-100)

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
  const smoothRingX = useSpring(ringX, springConfig)
  const smoothRingY = useSpring(ringY, springConfig)

  const isHoveringRef = useRef(false)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 4)
      cursorY.set(e.clientY - 4)
      ringX.set(e.clientX - 18)
      ringY.set(e.clientY - 18)
    }

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], .tilt-card')) {
        isHoveringRef.current = true
      }
    }
    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"], .tilt-card')) {
        isHoveringRef.current = false
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <motion.div
        className="cursor-dot"
        style={{ x: cursorX, y: cursorY }}
        transition={{ duration: 0 }}
      />
      {/* Ring */}
      <motion.div
        style={{ x: smoothRingX, y: smoothRingY }}
        className="cursor-ring"
        animate={{
          scale: isHoveringRef.current ? 1.6 : 1,
          opacity: 1,
        }}
      />
    </>
  )
}
