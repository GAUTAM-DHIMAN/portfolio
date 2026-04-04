import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="fixed top-6 left-6 right-6 z-[100] flex items-center justify-between pointer-events-auto"
      >
        {/* Left Breadcrumb Container */}
        <div className="flex items-center gap-3 bg-[var(--bg-card)] px-5 py-3 rounded-2xl shadow-sm border border-[rgba(0,0,0,0.03)] cursor-pointer hover:bg-white transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-secondary)' }}>
            <path d="M23 4v6h-6"></path>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
          </svg>
          <span className="text-[var(--text-primary)] font-semibold text-sm font-mono tracking-tight">/ home</span>
        </div>

        {/* Right Action Container (Hamburger) */}
        {!menuOpen && (
          <button 
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-1.5 bg-white p-4 rounded-xl shadow-sm border border-[rgba(0,0,0,0.03)] hover:scale-105 transition-transform"
          >
            <div className="w-6 h-[2px] bg-[#3b342d] rounded-full"></div>
            <div className="w-6 h-[2px] bg-[#3b342d] rounded-full"></div>
            <div className="w-6 h-[2px] bg-[#3b342d] rounded-full"></div>
          </button>
        )}
      </motion.div>

      {/* Slide out Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-6 right-6 z-[101] bg-[#f8f6f2] shadow-xl border border-[rgba(0,0,0,0.05)] rounded-3xl p-6 w-64 pointer-events-auto"
          >
            <div className="flex justify-end mb-8">
              <button 
                onClick={() => setMenuOpen(false)}
                className="bg-white p-3 rounded-xl shadow-sm hover:scale-105 transition-transform"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b342d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col gap-6 items-start px-2 mb-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="text-2xl font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:translate-x-2 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
