import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observers = new Map()

    navLinks.forEach(({ href }) => {
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.3, rootMargin: '-70px 0px -40% 0px' }
      )
      observer.observe(el)
      observers.set(id, observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] pointer-events-auto"
        style={{
          background: scrolled
            ? 'rgba(248, 249, 251, 0.88)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(148,163,184,0.12)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
            className="flex items-center gap-2"
            id="nav-logo"
          >
            <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 4px 12px rgba(99,102,241,0.35)' }}
          >
            GD
          </div>
          <span
            className="font-bold text-[var(--text-primary)] hidden sm:block"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1rem', letterSpacing: '-0.01em' }}
          >
            Gautam Dhiman
          </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = activeSection === id
              return (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                  id={`nav-${label.toLowerCase()}`}
                  className="relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200"
                  style={{
                    color: isActive ? 'var(--accent-indigo)' : 'var(--text-secondary)',
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'rgba(99,102,241,0.1)' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </a>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            id="nav-cta"
            className="text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              boxShadow: '0 4px 15px rgba(99,102,241,0.35)',
              borderRadius: '14px',
              padding: '10px 28px',
              letterSpacing: '0.01em',
              display: 'inline-block',
              lineHeight: 1.5,
            }}
          >
            Hire Me
          </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors"
            style={{ background: menuOpen ? 'rgba(99,102,241,0.1)' : 'transparent', border: '1px solid var(--border-light)' }}
            id="nav-hamburger"
          >
            {menuOpen ? <FiX size={20} color="var(--text-primary)" /> : <FiMenu size={20} color="var(--text-primary)" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[98] bg-black/20 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 z-[99] w-72 md:hidden"
              style={{
                background: 'rgba(248,249,251,0.97)',
                backdropFilter: 'blur(24px)',
                borderLeft: '1px solid var(--border-light)',
                boxShadow: '-20px 0 60px rgba(0,0,0,0.1)',
              }}
            >
              <div className="pt-20 pb-8 px-6 flex flex-col h-full">
                <div className="flex flex-col gap-2 flex-1">
                  {navLinks.map(({ label, href }, i) => {
                    const id = href.replace('#', '')
                    const isActive = activeSection === id
                    return (
                      <motion.a
                        key={label}
                        href={href}
                        onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all"
                        style={{
                          color: isActive ? 'var(--accent-indigo)' : 'var(--text-secondary)',
                          background: isActive ? 'rgba(99,102,241,0.08)' : 'transparent',
                        }}
                        id={`mobile-nav-${label.toLowerCase()}`}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full transition-all"
                          style={{ background: isActive ? 'var(--accent-indigo)' : 'var(--border-medium)' }}
                        />
                        {label}
                      </motion.a>
                    )
                  })}
                </div>

                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                  className="w-full py-3 text-center text-white font-semibold rounded-xl"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                >
                  Hire Me ✨
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
