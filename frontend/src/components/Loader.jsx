import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3800)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Radial background pulse */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 243, 255, 0.08) 0%, transparent 65%)',
          }}
          animate={{ opacity: [0, 1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Horizontal scan line */}
        <motion.div
          className="absolute w-full h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #00f3ff, transparent)' }}
          initial={{ top: '0%', opacity: 0 }}
          animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.3 }}
        />

        {/* Logo container */}
        <div className="relative flex flex-col items-center gap-6">
          {/* G.D. initials */}
          <div className="relative flex items-center gap-2">
            {['G', '.', 'D', '.'].map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  delay: 0.4 + i * 0.15,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: char === '.' ? '3rem' : '7rem',
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  background: char === '.'
                    ? 'rgba(0, 243, 255, 0.5)'
                    : 'linear-gradient(135deg, #00f3ff, #7d2ae8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  alignSelf: char === '.' ? 'flex-end' : 'auto',
                  paddingBottom: char === '.' ? '12px' : '0',
                }}
              >
                {char}
              </motion.span>
            ))}

            {/* Glow ring around logo */}
            <motion.div
              className="absolute -inset-6 rounded-full"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.6, 0], scale: [0.8, 1.4, 1.8] }}
              transition={{ delay: 1.2, duration: 1.5, ease: 'easeOut' }}
              style={{
                background: 'radial-gradient(circle, rgba(0, 243, 255, 0.15) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.85rem',
              color: 'rgba(0, 243, 255, 0.7)',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
            }}
          >
            AI/ML · Full Stack · Cloud
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="relative w-64 h-px overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            <motion.div
              className="absolute inset-y-0 left-0"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 1.7, duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: 'linear-gradient(90deg, #00f3ff, #7d2ae8)' }}
            />
          </motion.div>
        </div>

        {/* Corner decorations */}
        {[
          { top: 24, left: 24, borderTop: '2px solid', borderLeft: '2px solid' },
          { top: 24, right: 24, borderTop: '2px solid', borderRight: '2px solid' },
          { bottom: 24, left: 24, borderBottom: '2px solid', borderLeft: '2px solid' },
          { bottom: 24, right: 24, borderBottom: '2px solid', borderRight: '2px solid' },
        ].map((style, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8"
            style={{ ...style, borderColor: 'rgba(0, 243, 255, 0.4)' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
