import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiX, FiEye } from 'react-icons/fi'
import { HiOutlineDesktopComputer } from 'react-icons/hi'

const projects = [
  {
    id: 'amazon-clone',
    emoji: '🛒',
    title: 'Amazon Clone',
    subtitle: 'Full-Stack E-Commerce Platform',
    description:
      'A complete Amazon-inspired e-commerce application featuring user authentication with JWT, dynamic product listings, shopping cart management, and a full checkout flow. Built with a REST API backend integrated with MongoDB.',
    longDesc:
      'This project replicates the core Amazon shopping experience. Features include login/signup with JWT-based auth, product listing pages with search & filter, cart persistence, order checkout, and a responsive layout. Backend is built with Node.js and Express connected to MongoDB.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    color: '#f59e0b',
    github: 'https://github.com/GAUTAM-DHIMAN',
    live: null,
    driveLink: null,
    featured: true,
    category: 'fullstack',
    features: ['User Auth & JWT', 'Shopping Cart', 'Product Listings', 'Order Checkout', 'REST API'],
  },
  {
    id: 'starbucks-redesign',
    emoji: '☕',
    title: 'Starbucks Redesign',
    subtitle: 'UI/UX Design Concept',
    description:
      'A premium redesign of the Starbucks website with a modern, immersive UI — featuring glassmorphism effects, smooth scroll animations, and a refined menu experience.',
    longDesc:
      'A full UI/UX redesign concept for Starbucks. Built with HTML, CSS, and JavaScript — features a cinematic hero section, animated menu cards, glassmorphism components, and smooth transitions. Designed in Figma first, then developed pixel-perfect.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Figma', 'UI Design'],
    color: '#10b981',
    github: 'https://github.com/GAUTAM-DHIMAN',
    live: null,
    driveLink: 'https://drive.google.com/drive/folders/1-o7ob7TAtDyZySBNR15doGXO0y-w6lm4?usp=sharing',
    featured: true,
    category: 'design',
    features: ['Figma Design', 'Glassmorphism', 'Scroll Animations', 'Responsive Layout', 'Menu UI'],
  },
  {
    id: 'news-app',
    emoji: '📰',
    title: 'News Application',
    subtitle: 'Dark Mode News Aggregator',
    description:
      'A dark-mode news application that fetches real-time news from API endpoints, with category filters, search functionality, and a clean card-based layout.',
    longDesc:
      'Built with React, this news app pulls live articles from a news API with categorized browsing (Tech, Sports, Business, etc.), a powerful search bar, and an elegant dark UI. Responsive across all screen sizes with lazy-loaded images.',
    tags: ['React', 'News API', 'CSS', 'Dark Mode'],
    color: '#6366f1',
    github: 'https://github.com/GAUTAM-DHIMAN',
    live: null,
    driveLink: 'https://drive.google.com/drive/folders/1UyUCuM5z6hNZToTiEHx4x15jOz8cgF8K?usp=drive_link',
    featured: false,
    category: 'frontend',
    features: ['Live News API', 'Category Filters', 'Search', 'Dark Mode', 'Responsive'],
  },
  {
    id: 'ecommerce-card-ui',
    emoji: '🛍️',
    title: 'E-Commerce Product Card UI',
    subtitle: 'UI Component Design',
    description:
      'A premium e-commerce product card UI component with hover animations, color variant selection, add-to-cart interaction, and smooth micro-animations.',
    longDesc:
      'A standalone UI component project showcasing a polished product card with interactive 3D hover tilt, colour swatch selection, quantity controls, animated add-to-cart button with ripple effect, and a wishlist toggle. Designed in Figma and built with HTML/CSS/JS.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Animations'],
    color: '#ec4899',
    github: 'https://github.com/GAUTAM-DHIMAN',
    live: null,
    driveLink: 'https://drive.google.com/drive/folders/1kWaBm6bEscM489FuZcranwKImDNnmCKq?usp=sharing',
    featured: false,
    category: 'design',
    features: ['3D Hover Tilt', 'Colour Variants', 'Wishlist Toggle', 'Micro-animations', 'Figma Design'],
  },
  {
    id: 'vortex-assistant',
    emoji: '🤖',
    title: 'VORTEX',
    subtitle: 'AI Personal Voice Assistant',
    description:
      'Python-based voice assistant that understands spoken commands, queries Wikipedia, fetches real-time data from APIs, and automates desktop tasks intelligently.',
    longDesc:
      'VORTEX is a Python-powered voice assistant leveraging speech recognition, NLP, and multiple API integrations. It can answer questions via Wikipedia, fetch weather/news data, play music, open apps, set reminders, and perform desktop automation tasks.',
    tags: ['Python', 'NLP', 'Speech Recognition', 'APIs', 'Automation'],
    color: '#8b5cf6',
    github: 'https://github.com/GAUTAM-DHIMAN',
    live: null,
    driveLink: null,
    featured: true,
    category: 'ai',
    features: ['Voice Commands', 'Wikipedia Integration', 'API Calls', 'Task Automation', 'NLP'],
  },
  {
    id: 'ai-evaluation',
    emoji: '📊',
    title: 'AI Evaluation System',
    subtitle: 'Intelligent Assessment Platform',
    description:
      'FastAPI-powered backend system for AI model evaluation with MySQL integration, comprehensive logging, and real-time performance tracking metrics dashboard.',
    longDesc:
      'This system provides a robust evaluation framework for AI/ML models. Exposes REST API endpoints via FastAPI for submitting evaluation jobs, stores results in MySQL, maintains detailed logs, and provides a metrics dashboard for tracking model performance over time.',
    tags: ['FastAPI', 'Python', 'MySQL', 'REST API', 'Logging'],
    color: '#06b6d4',
    github: 'https://github.com/GAUTAM-DHIMAN',
    live: null,
    driveLink: null,
    featured: false,
    category: 'ai',
    features: ['FastAPI Backend', 'MySQL Storage', 'Performance Logs', 'Metrics Dashboard', 'REST API'],
  },
  {
    id: 'data-pipeline',
    emoji: '🔄',
    title: 'Data Pipeline Simulator',
    subtitle: 'ETL Data Processing Engine',
    description:
      'End-to-end data pipeline simulator built in Python featuring multi-stage data ingestion, intelligent cleaning, transformation layers, and structured output generation.',
    longDesc:
      'A comprehensive ETL (Extract, Transform, Load) pipeline simulator. Supports ingesting data from CSV/JSON/API sources, applying intelligent data cleaning rules, running transformation scripts, validating output schemas, and exporting processed data in multiple formats.',
    tags: ['Python', 'Pandas', 'ETL', 'Data Processing', 'Automation'],
    color: '#10b981',
    github: 'https://github.com/GAUTAM-DHIMAN',
    live: null,
    driveLink: null,
    featured: false,
    category: 'ai',
    features: ['Data Ingestion', 'Cleaning Engine', 'Transformation', 'Output Export', 'Validation'],
  },
]

const FILTERS = ['All', 'Frontend', 'Full Stack', 'Design', 'AI/ML']
const filterMap = { 'All': null, 'Frontend': 'frontend', 'Full Stack': 'fullstack', 'Design': 'design', 'AI/ML': 'ai' }

/* ── 3D Tilt Card ── */
function ProjectCard({ project, index, inView, onOpen }) {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14
    setTilt({ x, y })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHovering(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: tilt.y,
          rotateY: tilt.x,
          scale: hovering ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="glass-card h-full flex flex-col group overflow-hidden relative"
        style={{
          transformStyle: 'preserve-3d',
          borderColor: `${project.color}25`,
        }}
      >
        {/* Top color bar */}
        <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}40)` }} />

        {/* Hover glow overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}10, transparent 60%)` }}
        />

        <div className="p-6 md:p-7 flex flex-col flex-1">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: `${project.color}15`, border: `1px solid ${project.color}25` }}
              >
                {project.emoji}
              </div>
              <div>
                <h3
                  className="font-bold text-[var(--text-primary)] text-base leading-tight"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-xs mt-0.5" style={{ color: project.color }}>
                  {project.subtitle}
                </p>
              </div>
            </div>
            {project.featured && (
              <span
                className="text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0"
                style={{
                  background: `${project.color}15`,
                  border: `1px solid ${project.color}30`,
                  color: project.color,
                }}
              >
                Featured
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-3 flex-1" style={{ color: 'var(--text-secondary)' }}>
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="tag-chip"
                style={{
                  background: `${project.color}10`,
                  border: `1px solid ${project.color}25`,
                  color: project.color,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action row */}
          <div className="flex gap-2 mt-auto">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg flex-1 transition-all"
              style={{ border: '1px solid var(--border-medium)', color: 'var(--text-secondary)' }}
              whileHover={{ background: 'rgba(0,0,0,0.04)', color: 'var(--text-primary)' }}
              id={`card-github-${project.id}`}
            >
              <FiGithub size={13} />
              GitHub
            </motion.a>

            <motion.button
              onClick={() => onOpen(project)}
              className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg flex-1 transition-all"
              style={{
                background: `${project.color}12`,
                border: `1px solid ${project.color}30`,
                color: project.color,
              }}
              whileHover={{ background: `${project.color}25` }}
              id={`card-details-${project.id}`}
            >
              <FiEye size={13} />
              Details
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Project Modal ── */
function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 40 }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto hide-scrollbar"
          style={{
            background: 'var(--bg-card-solid)',
            borderRadius: '24px',
            border: `1px solid ${project.color}30`,
            boxShadow: `0 30px 80px rgba(0,0,0,0.2), 0 0 0 1px ${project.color}15`,
          }}
        >
          {/* Top accent */}
          <div className="h-1.5 rounded-t-3xl" style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}50)` }} />

          <div className="p-7">
            {/* Close button */}
            <button
              onClick={onClose}
              id="modal-close"
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
              style={{ background: 'var(--border-light)', color: 'var(--text-secondary)' }}
            >
              <FiX size={16} />
            </button>

            {/* Header */}
            <div className="flex items-start gap-4 mb-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: `${project.color}15`, border: `1px solid ${project.color}25` }}
              >
                {project.emoji}
              </div>
              <div>
                <h3
                  className="text-2xl font-black mb-1"
                  style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--text-primary)' }}
                >
                  {project.title}
                </h3>
                <p className="font-semibold text-sm" style={{ color: project.color }}>
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Long description */}
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              {project.longDesc}
            </p>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                Key Features
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {project.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 text-sm py-1.5 px-3 rounded-lg"
                    style={{ background: `${project.color}08`, color: 'var(--text-secondary)' }}
                  >
                    <span style={{ color: project.color, fontWeight: 'bold' }}>▹</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className="mb-6">
              <h4 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag-chip"
                    style={{
                      background: `${project.color}12`,
                      border: `1px solid ${project.color}30`,
                      color: project.color,
                      fontSize: '0.8rem',
                      padding: '5px 12px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              {/* GitHub button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                id={`modal-github-${project.id}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                style={{
                  border: '1.5px solid var(--border-medium)',
                  color: 'var(--text-primary)',
                }}
              >
                <FiGithub size={16} />
                View on GitHub
              </a>

              {/* Live demo button */}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`modal-live-${project.id}`}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                  style={{
                    background: `${project.color}15`,
                    border: `1.5px solid ${project.color}35`,
                    color: project.color,
                  }}
                >
                  <FiExternalLink size={16} />
                  Live Demo
                </a>
              )}

              {/* View Design / Drive link button */}
              {project.driveLink && (
                <a
                  href={project.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`modal-design-${project.id}`}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.12))',
                    border: '1.5px solid rgba(99,102,241,0.3)',
                    color: 'var(--accent-indigo)',
                  }}
                >
                  <HiOutlineDesktopComputer size={17} />
                  View Design
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === filterMap[activeFilter])

  return (
    <section id="projects" style={{ position: 'relative', padding: '120px 0', overflow: 'hidden' }}>
      {/* Background blobs */}
      <div
        className="absolute top-0 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }} ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent-indigo)',
              fontFamily: "'JetBrains Mono', monospace",
              marginBottom: '14px',
            }}
          >
            things I've built
          </p>
          <h2 className="section-title" style={{ marginBottom: '18px' }}>Featured Projects</h2>
          <div style={{ width: '48px', height: '3px', borderRadius: '99px', background: 'linear-gradient(90deg, #6366f1, #8b5cf6)', margin: '0 auto 16px' }} />
          <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto', fontSize: '1.02rem', lineHeight: 1.7 }}>
            A mix of AI, full-stack, design, and cloud projects — some big, some small, all real.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              id={`filter-${f.toLowerCase().replace(/\//g,'-').replace(/ /g,'-')}`}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              style={
                activeFilter === f
                  ? {
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      color: '#fff',
                      boxShadow: '0 4px 15px rgba(99,102,241,0.3)',
                    }
                  : {
                      background: 'var(--bg-card-solid)',
                      border: '1px solid var(--border-medium)',
                      color: 'var(--text-secondary)',
                    }
              }
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                inView={inView}
                onOpen={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/GAUTAM-DHIMAN"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
            id="view-all-github"
          >
            <FiGithub size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
