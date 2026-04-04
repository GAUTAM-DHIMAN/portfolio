import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiCpu, FiDatabase, FiCloud } from 'react-icons/fi'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const cards = [
  {
    icon: FiCpu,
    title: 'AI & Machine Learning',
    desc: 'Specializing in intelligent systems, data pipelines, and ML model integration to solve real-world problems.',
    color: '#00f3ff',
  },
  {
    icon: FiCode,
    title: 'Full Stack Development',
    desc: 'Building end-to-end web applications using React, FastAPI, and Node.js with clean, scalable architecture.',
    color: '#7d2ae8',
  },
  {
    icon: FiDatabase,
    title: 'Backend & APIs',
    desc: 'Designing robust REST APIs, database schemas, and data pipelines optimized for performance and reliability.',
    color: '#0066ff',
  },
  {
    icon: FiCloud,
    title: 'Cloud & DevOps',
    desc: 'Deploying apps on AWS (EC2, S3, RDS), automating workflows with CLI & Boto3, and monitoring with CloudWatch.',
    color: '#ff006e',
  },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  const [cardsRef, cardsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          {...fadeUp(0)}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3 text-[var(--text-secondary)]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Who I Am
          </p>
          <h2 className="section-title mb-4 text-[var(--text-primary)]">About Me</h2>
          <div className="w-16 h-1 mx-auto rounded-full bg-[var(--text-primary)] opacity-20" />
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              Computer Science student specializing in{' '}
              <span className="font-semibold text-[var(--text-primary)]">AI & Machine Learning</span>{' '}
              with strong skills in backend development, data structures, and scalable system design.
            </p>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              Experienced in building{' '}
              <span className="font-semibold text-[var(--text-primary)]">APIs, data pipelines</span>, and
              real-world applications using Python and React. Passionate about solving complex
              problems and contributing to AI-driven systems.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Currently pursuing{' '}
              <span className="font-semibold text-[var(--text-primary)]">B.E. CSE (AI/ML)</span>{' '}
              at Chandigarh University, with hands-on experience across AWS cloud infrastructure,
              UI/UX design, and modern web development.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { num: '200+', label: 'DSA Problems' },
                { num: '3+', label: 'Internships' },
                { num: '4+', label: 'Projects Built' },
              ].map(({ num, label }) => (
                <div key={label} className="glass-card p-4 text-center">
                  <div
                    className="text-2xl font-black mb-1 text-[var(--text-primary)]"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {num}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)]">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual — animated code block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden bg-[#242424]">
              {/* Window dots */}
              <div className="flex gap-2 mb-5">
                {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
                  <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <pre
                className="text-sm leading-relaxed overflow-x-auto text-[var(--text-primary)]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <code>
                  <span style={{ color: '#569cd6' }}>const</span>
                  <span style={{ color: '#fff' }}> gautam </span>
                  <span style={{ color: '#d4d4d4' }}>= {'{'}</span>
                  {'\n'}
                  <span style={{ color: '#9cdcfe' }}>  name</span>
                  <span style={{ color: '#d4d4d4' }}>:</span>
                  <span style={{ color: '#ce9178' }}> "Gautam Dhiman"</span>
                  <span style={{ color: '#d4d4d4' }}>,</span>
                  {'\n'}
                  <span style={{ color: '#9cdcfe' }}>  role</span>
                  <span style={{ color: '#d4d4d4' }}>:</span>
                  <span style={{ color: '#ce9178' }}> "AI/ML, Full Stack, UI/UX"</span>
                  <span style={{ color: '#d4d4d4' }}>,</span>
                  {'\n'}
                  <span style={{ color: '#9cdcfe' }}>  university</span>
                  <span style={{ color: '#d4d4d4' }}>:</span>
                  <span style={{ color: '#ce9178' }}> "Chandigarh Univ"</span>
                  <span style={{ color: '#d4d4d4' }}>,</span>
                  {'\n'}
                  <span style={{ color: '#9cdcfe' }}>  skills</span>
                  <span style={{ color: '#d4d4d4' }}>: [</span>
                  {'\n'}
                  <span style={{ color: '#ce9178' }}>    "Python"</span>
                  <span style={{ color: '#d4d4d4' }}>,</span>
                  <span style={{ color: '#ce9178' }}> "React"</span>
                  <span style={{ color: '#d4d4d4' }}>,</span>
                  {'\n'}
                  <span style={{ color: '#ce9178' }}>    "Figma"</span>
                  <span style={{ color: '#d4d4d4' }}>,</span>
                  <span style={{ color: '#ce9178' }}> "AWS"</span>
                  {'\n'}
                  <span style={{ color: '#d4d4d4' }}>  ],</span>
                  {'\n'}
                  <span style={{ color: '#9cdcfe' }}>  passion</span>
                  <span style={{ color: '#d4d4d4' }}>:</span>
                  <span style={{ color: '#ce9178' }}> "Building the future"</span>
                  {'\n'}
                  <span style={{ color: '#d4d4d4' }}>{'}'};</span>
                </code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Specialty Cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-6 group"
              whileHover={{ y: -6 }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `rgba(0,0,0,0.04)`, border: `1px solid rgba(0,0,0,0.05)` }}
              >
                <card.icon size={22} style={{ color: 'var(--text-primary)' }} />
              </div>
              <h3 className="font-bold text-base mb-2 text-[var(--text-primary)]">{card.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
