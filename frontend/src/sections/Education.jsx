import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCalendar } from 'react-icons/fi'

const education = [
  {
    degree: 'B.E. Computer Science (AI/ML)',
    institution: 'Chandigarh University',
    period: '2022 – 2026',
    location: 'Chandigarh, India',
    icon: '🎓',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.2)',
    highlights: [
      'Specialization in Artificial Intelligence & Machine Learning',
      'Strong foundation in Data Structures, Algorithms & System Design',
      'Hands-on projects in ML, full-stack development, and cloud computing',
      'Active participant in coding competitions and hackathons',
    ],
    badge: 'Current',
  },
  {
    degree: 'Senior Secondary (12th Grade)',
    institution: 'Bhartiya Public School',
    period: '2020 – 2022',
    location: 'India',
    icon: '📚',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
    highlights: [
      'Science stream with Computer Science',
      'Strong academic performance in Mathematics and Physics',
      'Foundation for engineering and computer science studies',
    ],
    badge: 'Completed',
  },
  {
    degree: 'Secondary (10th Grade)',
    institution: 'Bhartiya Public School',
    period: '2018 – 2020',
    location: 'India',
    icon: '🏫',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.2)',
    highlights: [
      'Excellent academic standing across all subjects',
      'Early introduction to computers and programming concepts',
      'Developed strong analytical and problem-solving skills',
    ],
    badge: 'Completed',
  },
]

/* Animated counter hook */
function useCounter(target, inView, duration = 1800) {
  const ref = useRef(null)
  useEffect(() => {
    if (!inView || !ref.current) return
    let start = 0
    const end = parseInt(target)
    if (isNaN(end)) return
    const step = Math.ceil(end / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      if (ref.current) ref.current.textContent = start + '+'
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return ref
}

const achievements = [
  { icon: '⚡', num: 200, label: 'DSA Problems', desc: 'Solved on LeetCode — arrays, trees, graphs, DP', color: '#f59e0b' },
  { icon: '☁️', num: 3, label: 'Internships', desc: 'AWS Cloud, UI/UX Design, Web Development', color: '#6366f1' },
  { icon: '🚀', num: 7, label: 'Projects Built', desc: 'Production-grade apps across different domains', color: '#8b5cf6' },
  { icon: '🎨', num: 5, label: 'Design Tools', desc: 'Figma, Photoshop, Adobe XD, Sketch & more', color: '#ec4899' },
]

function AchCard({ ach, index, inView }) {
  const numRef = useCounter(ach.num, inView)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card p-6 text-center group relative overflow-hidden"
      whileHover={{ y: -6 }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(90deg, ${ach.color}, transparent)` }}
      />
      <div className="text-4xl mb-3">{ach.icon}</div>
      <div
        ref={numRef}
        className="text-3xl font-black mb-1"
        style={{ fontFamily: "'Outfit', sans-serif", color: ach.color }}
      >
        0+
      </div>
      <h4 className="font-bold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{ach.label}</h4>
      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{ach.desc}</p>
    </motion.div>
  )
}

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [achRef, achInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="education" className="relative py-32 overflow-hidden">
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }}>
        {/* Education header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
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
            my background
          </p>
          <h2 className="section-title" style={{ marginBottom: '18px' }}>Education</h2>
          <div style={{ width: '48px', height: '3px', borderRadius: '99px', background: 'linear-gradient(90deg, #6366f1, #8b5cf6)', margin: '0 auto' }} />
        </motion.div>

        {/* Education cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-28">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution + edu.degree}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-6 group relative overflow-hidden"
              style={{ borderColor: edu.border }}
              whileHover={{ y: -6 }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${edu.color}, transparent)` }}
              />

              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: edu.bg, border: `1px solid ${edu.border}` }}
                >
                  {edu.icon}
                </div>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-semibold"
                  style={{ background: edu.bg, border: `1px solid ${edu.border}`, color: edu.color }}
                >
                  {edu.badge}
                </span>
              </div>

              <h3
                className="font-bold text-[var(--text-primary)] text-base mb-1"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {edu.degree}
              </h3>
              <p className="text-sm font-semibold mb-3" style={{ color: edu.color }}>{edu.institution}</p>
              <div className="flex items-center gap-1.5 text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
                <FiCalendar size={11} />
                {edu.period} · {edu.location}
              </div>

              <ul className="space-y-1.5">
                {edu.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: edu.color, flexShrink: 0, marginTop: '1px' }}>▹</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Achievements header */}
        <motion.div
          ref={achRef}
          initial={{ opacity: 0, y: 30 }}
          animate={achInView ? { opacity: 1, y: 0 } : {}}
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
            numbers & milestones
          </p>
          <h2 className="section-title" style={{ marginBottom: '18px' }}>Achievements</h2>
          <div style={{ width: '48px', height: '3px', borderRadius: '99px', background: 'linear-gradient(90deg, #6366f1, #8b5cf6)', margin: '0 auto' }} />
        </motion.div>

        {/* Achievement cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((ach, i) => (
            <AchCard key={ach.label} ach={ach} index={i} inView={achInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
