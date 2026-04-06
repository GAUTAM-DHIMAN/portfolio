import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: FiGithub, href: 'https://github.com/gautamdhiman', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/gautamdhiman', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:gautamdhiman@example.com', label: 'Email' },
]

export default function Footer() {
  const handleNavClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="relative py-14 overflow-hidden"
      style={{ background: '#0a0f1e', borderTop: '1px solid rgba(99,102,241,0.15)' }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 60%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-base"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
            >
              G
            </div>
            <div>
              <div
                className="font-black text-white text-lg leading-none"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Gautam Dhiman
              </div>
              <div
                className="text-xs"
                style={{ color: 'rgba(99,102,241,0.8)', fontFamily: "'JetBrains Mono', monospace" }}
              >
                AI/ML · Full Stack · UI/UX
              </div>
            </div>
          </motion.div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                className="text-sm transition-colors duration-200 underline-animated"
                style={{ color: 'rgba(255,255,255,0.45)' }}
                onMouseEnter={(e) => e.target.style.color = 'rgba(255,255,255,0.85)'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.45)'}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.5)',
                }}
                whileHover={{
                  y: -3,
                  borderColor: 'rgba(99,102,241,0.6)',
                  color: '#818cf8',
                  background: 'rgba(99,102,241,0.1)',
                }}
                id={`footer-${label.toLowerCase()}`}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div
            className="w-full h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)' }}
          />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            <span>© {new Date().getFullYear()} Gautam Dhiman. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1">
              Built with <FiHeart size={12} className="text-red-400 mx-0.5" /> using React & Framer Motion
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
