import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:gautam@example.com', label: 'Email' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleNavClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t mt-10" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.03 }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg bg-white"
              style={{
                fontFamily: "'Outfit', sans-serif",
                color: 'var(--text-primary)',
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
              }}
            >
              GD
            </div>
            <div>
              <p className="font-bold text-[var(--text-primary)]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Gautam Dhiman
              </p>
              <p className="text-xs text-[var(--text-secondary)]">AI/ML · Full Stack · Cloud</p>
            </div>
          </motion.div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:-translate-y-0.5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ border: '1px solid rgba(0,0,0,0.08)', color: 'var(--text-secondary)' }}
                whileHover={{
                  borderColor: 'rgba(0,0,0,0.2)',
                  color: 'var(--text-primary)',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                }}
              >
                <Icon size={15} />
              </motion.a>
            ))}

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ml-2"
              style={{
                background: 'white',
                border: '1px solid rgba(0,0,0,0.08)',
                color: 'var(--text-primary)',
              }}
              whileHover={{ scale: 1.1, boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}
              whileTap={{ scale: 0.95 }}
              id="back-to-top"
            >
              <FiArrowUp size={15} />
            </motion.button>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}
        >
          <p className="text-xs text-[var(--text-secondary)]">
            © {new Date().getFullYear()} Gautam Dhiman. Built with React + Framer Motion.
          </p>
          <p className="text-xs font-semibold" style={{ color: 'var(--text-secondary)', fontFamily: "'JetBrains Mono', monospace" }}>
            {'<'} Made with ☕ and lots of code {'>'}
          </p>
        </div>
      </div>
    </footer>
  )
}
