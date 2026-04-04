import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    emoji: '🛒',
    title: 'Amazon Clone',
    subtitle: 'Full-Stack E-Commerce Platform',
    description:
      'A complete Amazon-inspired e-commerce application featuring user authentication, dynamic product listings, shopping cart, and checkout flow. Full backend deployed with REST API endpoints.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    color: '#f59e0b',
    github: 'https://github.com',
    live: 'https://github.com',
    featured: true,
    features: ['User Auth & JWT', 'Shopping Cart', 'Product Listings', 'Order Checkout'],
  },
  {
    emoji: '🤖',
    title: 'VORTEX',
    subtitle: 'AI Personal Voice Assistant',
    description:
      'Python-based voice assistant that understands spoken commands, queries Wikipedia, fetches real-time data from external APIs, and automates desktop tasks intelligently.',
    tags: ['Python', 'NLP', 'Speech Recognition', 'APIs', 'Automation'],
    color: '#7d2ae8',
    github: 'https://github.com',
    live: null,
    featured: true,
    features: ['Voice Commands', 'Wikipedia Integration', 'API Calls', 'Task Automation'],
  },
  {
    emoji: '📊',
    title: 'AI Evaluation System',
    subtitle: 'Intelligent Assessment Platform',
    description:
      'FastAPI-powered backend system for AI model evaluation with MySQL integration for persistent storage, comprehensive logging, and real-time performance tracking metrics.',
    tags: ['FastAPI', 'Python', 'MySQL', 'REST API', 'Logging'],
    color: '#00f3ff',
    github: 'https://github.com',
    live: null,
    featured: false,
    features: ['FastAPI Backend', 'MySQL Storage', 'Performance Logs', 'Metrics Dashboard'],
  },
  {
    emoji: '🔄',
    title: 'Data Pipeline Simulator',
    subtitle: 'ETL Data Processing Engine',
    description:
      'End-to-end data pipeline simulator built in Python featuring multi-stage data ingestion, intelligent cleaning, transformation layers, and structured output generation.',
    tags: ['Python', 'Pandas', 'ETL', 'Data Processing', 'Automation'],
    color: '#10b981',
    github: 'https://github.com',
    live: null,
    featured: false,
    features: ['Data Ingestion', 'Cleaning Engine', 'Transformation', 'Output Export'],
  },
]

function ProjectCard({ project, index, inView }) {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16
    setTilt({ x, y })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHovering(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: '1000px' }}
      className={project.featured ? 'md:col-span-1' : ''}
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
          borderColor: `${project.color}20`,
        }}
      >
        <div
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
        />

        {/* Subtle shadow overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `linear-gradient(to top, rgba(0,0,0,0.02), transparent)` }}
        />

        <div className="p-6 flex flex-col flex-1">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: `${project.color}15`, border: `1px solid ${project.color}25` }}
              >
                {project.emoji}
              </div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {project.title}
                </h3>
                <p className="text-xs mt-0.5" style={{ color: project.color }}>
                  {project.subtitle}
                </p>
              </div>
            </div>
            {project.featured && (
              <span
                className="text-xs px-2.5 py-1 rounded-full font-semibold"
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
          <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-4 flex-1">
            {project.description}
          </p>

          {/* Feature chips */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.features.map((f) => (
              <span
                key={f}
                className="text-xs px-2 py-0.5 rounded shadow-sm"
                style={{
                  background: 'rgba(0,0,0,0.03)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  color: 'var(--text-primary)',
                }}
              >
                {f}
              </span>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs rounded-full font-medium"
                style={{
                  background: `${project.color}10`,
                  border: `1px solid ${project.color}25`,
                  color: project.color,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 mt-auto">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200"
              style={{
                border: `1px solid rgba(0,0,0,0.08)`,
                color: 'var(--text-primary)',
              }}
              whileHover={{
                background: 'rgba(0,0,0,0.03)',
                borderColor: `rgba(0,0,0,0.15)`,
              }}
              id={`project-github-${project.title.toLowerCase().replace(/\s/g, '-')}`}
            >
              <FiGithub size={14} />
              GitHub
            </motion.a>
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200"
                style={{
                  background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                  border: `1px solid ${project.color}30`,
                  color: project.color,
                }}
                whileHover={{
                  background: `linear-gradient(135deg, ${project.color}35, ${project.color}20)`,
                  boxShadow: `0 0 20px ${project.color}30`,
                }}
                id={`project-live-${project.title.toLowerCase().replace(/\s/g, '-')}`}
              >
                <FiExternalLink size={14} />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3 text-[var(--text-secondary)]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            What I've Built
          </p>
          <h2 className="section-title mb-4 text-[var(--text-primary)]">Featured Projects</h2>
          <div className="w-16 h-1 mx-auto rounded-full bg-[var(--text-primary)] opacity-20" />
          <p className="mt-4 text-[var(--text-secondary)] max-w-xl mx-auto">
            A selection of projects that showcase my skills in AI/ML, full-stack development, and cloud architecture.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} inView={inView} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
            id="view-all-projects"
          >
            <FiGithub size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
