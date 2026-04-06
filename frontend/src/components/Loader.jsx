import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onComplete }) {
  const progressRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(onComplete, 3600)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
        style={{ background: '#050b18' }}
        exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Radial background glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.08) 30%, transparent 70%)',
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Scan line */}
        <motion.div
          className="absolute w-full h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)' }}
          initial={{ top: '0%', opacity: 0 }}
          animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.3 }}
        />

        {/* Main logo container */}
        <div className="relative flex flex-col items-center gap-8">
          {/* Initials */}
          <div className="relative flex items-center gap-1">
            {['G', 'D'].map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, filter: 'blur(20px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  delay: 0.3 + i * 0.2,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 'clamp(5rem, 12vw, 8rem)',
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  background: i === 0
                    ? 'linear-gradient(135deg, #60a5fa, #818cf8)'
                    : 'linear-gradient(135deg, #818cf8, #c084fc)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {char}
              </motion.span>
            ))}

            {/* Dot separator */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                fontWeight: 900,
                color: 'rgba(99,102,241,0.6)',
                alignSelf: 'flex-end',
                paddingBottom: '10px',
                lineHeight: 1,
              }}
            >
              .
            </motion.span>

            {/* Glow ring */}
            <motion.div
              className="absolute -inset-8 rounded-full pointer-events-none"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: [0, 0.4, 0], scale: [0.8, 1.5, 2] }}
              transition={{ delay: 1.0, duration: 1.8, ease: 'easeOut' }}
              style={{
                background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
              }}
            />
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.78rem',
              color: 'rgba(99,102,241,0.7)',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
            }}
          >
            AI/ML · Full Stack · UI/UX · Cloud
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="relative w-72 h-px overflow-hidden rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            style={{ background: 'rgba(255,255,255,0.08)' }}
          >
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 1.6, duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: 'linear-gradient(90deg, #60a5fa, #818cf8, #c084fc)' }}
            />
          </motion.div>

          {/* Loading percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.2em',
            }}
          >
            Loading experience...
          </motion.div>
        </div>

        {/* Corner brackets */}
        {[
          { top: 24, left: 24, borderTop: '2px solid', borderLeft: '2px solid' },
          { top: 24, right: 24, borderTop: '2px solid', borderRight: '2px solid' },
          { bottom: 24, left: 24, borderBottom: '2px solid', borderLeft: '2px solid' },
          { bottom: 24, right: 24, borderBottom: '2px solid', borderRight: '2px solid' },
        ].map((style, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8"
            style={{ ...style, borderColor: 'rgba(99,102,241,0.4)' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
