import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiArrowDown,
  FiArrowUpRight,
  FiMail,
  FiCode,
  FiCloud,
} from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaBrain } from 'react-icons/fa'
import { MdOutlineDesignServices } from 'react-icons/md'
import { HiOutlineChip } from 'react-icons/hi'

/* ── Subtle ambient particles ── */
function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W = (canvas.width = canvas.offsetWidth)
    let H = (canvas.height = canvas.offsetHeight)
    let animId

    const resize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', resize)

    const colors = ['rgba(99,102,241,', 'rgba(139,92,246,', 'rgba(6,182,212,']
    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 0.4,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.35 + 0.05,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color + p.alpha + ')'
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > W) p.dx *= -1
        if (p.y < 0 || p.y > H) p.dy *= -1
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}

/* ── Role cycling badge with real icons ── */
const roles = [
  { label: 'AI / ML Engineer',      Icon: HiOutlineChip,          color: '#6366f1', bg: 'rgba(99,102,241,0.09)'  },
  { label: 'Full Stack Developer',   Icon: FiCode,                 color: '#8b5cf6', bg: 'rgba(139,92,246,0.09)'  },
  { label: 'UI / UX Designer',       Icon: MdOutlineDesignServices,color: '#ec4899', bg: 'rgba(236,72,153,0.09)'  },
  { label: 'Cloud & AWS Engineer',   Icon: FiCloud,                color: '#06b6d4', bg: 'rgba(6,182,212,0.09)'   },
  { label: 'Problem Solver',         Icon: FaBrain,                color: '#f59e0b', bg: 'rgba(245,158,11,0.09)'  },
]

function RoleBadge() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2800)
    return () => clearInterval(t)
  }, [])

  const role = roles[idx]

  return (
    <div style={{ minHeight: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 16, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.94 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 22px',
            borderRadius: '50px',
            background: role.bg,
            border: `1.5px solid ${role.color}35`,
            boxShadow: `0 4px 18px ${role.color}14`,
          }}
        >
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: `${role.color}18`,
              flexShrink: 0,
            }}
          >
            <role.Icon size={15} style={{ color: role.color }} />
          </div>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: '1.05rem',
              color: role.color,
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            {role.label}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

/* ── Small ripple helper ── */
function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

/* ── Hero ── */
export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
      }}
    >
      {/* Blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <ParticleCanvas />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* ── Main centred column ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '760px',        /* tighter max-width so nothing stretches */
          margin: '0 auto',
          padding: '120px 32px 80px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0px',
        }}
      >
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.55 }}
          style={{ marginBottom: '28px' }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '6px 16px',
              borderRadius: '50px',
              background: 'rgba(16,185,129,0.08)',
              border: '1px solid rgba(16,185,129,0.25)',
              color: '#059669',
              fontSize: '0.78rem',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
              letterSpacing: '0.02em',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#10b981',
                animation: 'pulse 2s infinite',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            Available for opportunities
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.33, duration: 0.5 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.95rem',
            color: 'var(--text-muted)',
            marginBottom: '14px',
            letterSpacing: '0.02em',
          }}
        >
          hey 👋, my name is
        </motion.p>

        {/* Name — controlled size, never stretches to screen edge */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.035em',
            marginBottom: '28px',
            background: 'linear-gradient(140deg, #0f172a 20%, #6366f1 60%, #8b5cf6 85%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Gautam Dhiman.
        </motion.h1>

        {/* Role badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.68, duration: 0.5 }}
          style={{ marginBottom: '28px', width: '100%' }}
        >
          <RoleBadge />
        </motion.div>

        {/* Bio — personal, human tone */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.82, duration: 0.55 }}
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: 'var(--text-secondary)',
            marginBottom: '44px',
            maxWidth: '540px',
            textAlign: 'center',
          }}
        >
          I build things for the web — from{' '}
          <span
            style={{ color: '#6366f1', fontWeight: 600 }}
          >
            AI-powered backends
          </span>{' '}
          to{' '}
          <span style={{ color: '#8b5cf6', fontWeight: 600 }}>
            clean, fast frontends
          </span>
          . I care a lot about design and the small details that make software feel{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--text-primary)' }}>
            great to use
          </em>
          .
        </motion.p>

        {/* CTA row — centred */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.96, duration: 0.5 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px',
            justifyContent: 'center',
            marginBottom: '52px',
          }}
        >
          <button
            onClick={() => scrollTo('#projects')}
            id="hero-view-projects"
            className="btn-primary"
            style={{
              padding: '13px 34px',
              fontSize: '0.97rem',
              borderRadius: '50px',
              fontWeight: 700,
              letterSpacing: '0.01em',
            }}
          >
            See my work
            <FiArrowUpRight size={17} />
          </button>

          <button
            onClick={() => scrollTo('#contact')}
            id="hero-contact-me"
            className="btn-outline"
            style={{
              padding: '12px 34px',
              fontSize: '0.97rem',
              borderRadius: '50px',
              fontWeight: 600,
              letterSpacing: '0.01em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <FiMail size={16} />
            Say hello
          </button>
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            justifyContent: 'center',
            marginBottom: '64px',
          }}
        >
          {[
            { href: 'https://github.com/GAUTAM-DHIMAN', Icon: FaGithub, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/gautam-dhiman-amb/', Icon: FaLinkedin, label: 'LinkedIn' },
          ].map(({ href, Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              id={`hero-${label.toLowerCase()}`}
              aria-label={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: 'var(--text-muted)',
                textDecoration: 'none',
              }}
              whileHover={{ y: -3, color: '#6366f1' }}
              transition={{ duration: 0.18 }}
            >
              <Icon size={20} />
              <span>{label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.35, duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}
        >
          <span
            style={{
              fontSize: '0.68rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiArrowDown size={16} style={{ color: 'var(--accent-indigo)' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
