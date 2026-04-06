import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    title: 'Languages',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.2)',
    emoji: '⌨️',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL'],
  },
  {
    title: 'Frontend',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.2)',
    emoji: '🖥️',
    skills: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion'],
  },
  {
    title: 'Backend',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
    emoji: '⚙️',
    skills: ['Node.js', 'FastAPI', 'Express.js', 'REST APIs', 'JWT Auth'],
  },
  {
    title: 'Database',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
    emoji: '🗄️',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Cloud & Tools',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.2)',
    emoji: '☁️',
    skills: ['AWS EC2', 'AWS S3', 'AWS IAM/RDS', 'Git', 'Linux', 'Boto3'],
  },
  {
    title: 'UI/UX Design',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.08)',
    border: 'rgba(236,72,153,0.2)',
    emoji: '🎨',
    skills: ['Figma', 'Adobe Photoshop', 'Adobe XD', 'Sketch', 'Wireframing', 'Prototyping'],
  },
  {
    title: 'AI / ML',
    color: '#f97316',
    bg: 'rgba(249,115,22,0.08)',
    border: 'rgba(249,115,22,0.2)',
    emoji: '🤖',
    skills: ['Data Pipelines', 'ML Integration', 'NLP Basics', 'Model Evaluation', 'Automation'],
  },
  {
    title: 'Concepts',
    color: '#64748b',
    bg: 'rgba(100,116,139,0.08)',
    border: 'rgba(100,116,139,0.2)',
    emoji: '🧠',
    skills: ['Data Structures', 'Algorithms', 'System Design', 'OOP', 'Clean Code'],
  },
]

const allTechs = [
  'Python', 'React', 'FastAPI', 'Node.js', 'AWS', 'MySQL', 'MongoDB',
  'Git', 'Linux', 'TypeScript', 'Tailwind', 'Figma', 'Photoshop',
  'Adobe XD', 'Sketch', 'PostgreSQL',
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background blobs */}
      <div
        className="absolute top-1/4 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }} ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
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
            tools I use
          </p>
          <h2 className="section-title" style={{ marginBottom: '18px' }}>Tech Stack & Skills</h2>
          <div style={{ width: '48px', height: '3px', borderRadius: '99px', background: 'linear-gradient(90deg, #6366f1, #8b5cf6)', margin: '0 auto 16px' }} />
          <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto', fontSize: '1.02rem', lineHeight: 1.7 }}>
            From AI systems to pixel-perfect UI — here's what I actually know and use.
          </p>
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-5 group relative overflow-hidden"
              style={{
                borderColor: cat.border,
                '--card-accent': cat.color + '40',
              }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }}
              />

              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${cat.color}12, transparent 70%)` }}
                transition={{ duration: 0.3 }}
              />

              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: cat.bg, border: `1px solid ${cat.border}` }}
                >
                  {cat.emoji}
                </div>
                <h3
                  className="font-bold text-sm"
                  style={{ color: cat.color, fontFamily: "'Outfit', sans-serif" }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="tag-chip"
                    style={{
                      background: cat.bg,
                      border: `1px solid ${cat.border}`,
                      color: cat.color,
                    }}
                    whileHover={{ scale: 1.08, y: -1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2.5 mt-8"
        >
          {allTechs.map((tech, i) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.12, y: -3 }}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + i * 0.04 }}
              className="px-4 py-1.5 rounded-full text-sm font-medium"
              style={{
                border: '1px solid var(--border-medium)',
                background: 'var(--bg-card-solid)',
                color: 'var(--text-secondary)',
                fontFamily: "'JetBrains Mono', monospace",
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
