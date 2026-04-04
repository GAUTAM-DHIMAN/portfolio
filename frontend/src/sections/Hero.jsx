import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <div
            className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase shadow-sm border border-[rgba(0,0,0,0.05)] bg-white text-[var(--text-secondary)]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse" />
            Available for Opportunities
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-xl md:text-2xl mb-3 font-medium text-[var(--text-primary)]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            👋 Hi, I'm
          </p>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="section-title mb-4 text-[var(--text-primary)]"
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 900,
          }}
        >
          Gautam Dhiman
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-8"
          style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
            color: 'var(--text-secondary)',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            minHeight: '2.5rem',
          }}
        >
          <TypeAnimation
            sequence={[
              'AI/ML Engineer 🤖',
              2000,
              'Full Stack Developer 💻',
              2000,
              'UI/UX Designer 🎨',
              2000,
              'Cloud & AWS Enthusiast ☁️',
              2000,
              'Problem Solver 🧠',
              2000,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
            style={{ color: 'var(--text-primary)' }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed text-[var(--text-secondary)]"
        >
          Building intelligent systems and scalable web applications. Passionate about
          <span className="font-semibold text-[var(--text-primary)]"> AI-driven solutions</span>,
          <span className="font-semibold text-[var(--text-primary)]"> full-stack development</span>, and
          <span className="font-semibold text-[var(--text-primary)]"> cloud architecture</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => handleScroll('#projects')}
            className="flex items-center gap-2 bg-[var(--text-primary)] text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform shadow-md"
            id="hero-view-projects"
          >
            View Projects
            <FiArrowRight size={18} />
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="flex items-center gap-2 bg-white text-[var(--text-primary)] border border-[rgba(0,0,0,0.1)] px-6 py-3 rounded-xl hover:scale-105 transition-transform shadow-sm"
            id="hero-contact-me"
          >
            <FiMail size={18} />
            Contact Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { href: 'https://github.com', icon: FaGithub, label: 'GitHub' },
            { href: 'https://linkedin.com', icon: FaLinkedin, label: 'LinkedIn' },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-all duration-300 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:-translate-y-1"
              aria-label={label}
            >
              <Icon size={22} className="opacity-80" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
