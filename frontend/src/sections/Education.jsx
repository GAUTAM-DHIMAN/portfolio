import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiBookOpen, FiCalendar } from 'react-icons/fi'

const education = [
  {
    degree: 'B.E. Computer Science (AI/ML)',
    institution: 'Chandigarh University',
    period: '2022 – 2026',
    location: 'Chandigarh, India',
    icon: '🎓',
    color: '#00f3ff',
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
    color: '#7d2ae8',
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
    color: '#0066ff',
    highlights: [
      'Excellent academic standing across all subjects',
      'Early introduction to computers and programming concepts',
      'Developed strong analytical and problem-solving skills',
    ],
    badge: 'Completed',
  },
]

const achievements = [
  {
    icon: '⚡',
    title: '200+ DSA Problems',
    desc: 'Solved on LeetCode — mastering arrays, trees, graphs, DP & more',
    color: '#f59e0b',
    platform: 'LeetCode',
  },
  {
    icon: '☁️',
    title: 'AWS Certified Intern',
    desc: 'Hands-on experience with EC2, S3, IAM, RDS & CloudWatch',
    color: '#00f3ff',
    platform: 'AWS',
  },
  {
    icon: '🏆',
    title: 'Full Stack Projects',
    desc: 'Built 4+ production-grade applications across different domains',
    color: '#7d2ae8',
    platform: 'GitHub',
  },
  {
    icon: '🛠️',
    title: '3+ Internships',
    desc: 'Completed internships in Cloud, UI/UX, and Web Development',
    color: '#10b981',
    platform: 'Industry',
  },
]

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [achRef, achInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="education" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3 text-[var(--text-secondary)]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Academic Background
          </p>
          <h2 className="section-title mb-4 text-[var(--text-primary)]">Education</h2>
          <div className="w-16 h-1 mx-auto rounded-full bg-[var(--text-primary)] opacity-20" />
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution + edu.degree}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-6 group relative overflow-hidden"
              style={{ borderColor: `${edu.color}20` }}
              whileHover={{ y: -6 }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `linear-gradient(to top left, rgba(0,0,0,0.02), transparent)` }}
              />

              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{edu.icon}</span>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-semibold"
                  style={{
                    background: `${edu.color}15`,
                    border: `1px solid ${edu.color}30`,
                    color: edu.color,
                  }}
                >
                  {edu.badge}
                </span>
              </div>

              <h3 className="font-bold text-[var(--text-primary)] text-base mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {edu.degree}
              </h3>
              <p className="text-sm font-semibold mb-3" style={{ color: edu.color }}>
                {edu.institution}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] mb-4">
                <FiCalendar size={11} />
                {edu.period} &nbsp;·&nbsp; {edu.location}
              </div>

              <ul className="space-y-1.5">
                {edu.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2 text-xs text-[var(--text-secondary)]">
                    <span style={{ color: edu.color, flexShrink: 0, marginTop: '1px' }}>▹</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          ref={achRef}
          initial={{ opacity: 0, y: 30 }}
          animate={achInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3 text-[var(--text-secondary)]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Milestones
          </p>
          <h2 className="section-title mb-4 text-[var(--text-primary)]">Achievements</h2>
          <div className="w-16 h-1 mx-auto rounded-full bg-[var(--text-primary)] opacity-20" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={achInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-6 text-center group relative overflow-hidden"
              whileHover={{ y: -6 }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `linear-gradient(to top left, rgba(0,0,0,0.02), transparent)` }}
              />
              <div className="text-4xl mb-3">{ach.icon}</div>
              <h4
                className="font-bold text-[var(--text-primary)] text-base mb-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {ach.title}
              </h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">{ach.desc}</p>
              <span
                className="text-xs px-2.5 py-0.5 rounded-full font-semibold"
                style={{
                  background: `${ach.color}12`,
                  border: `1px solid ${ach.color}30`,
                  color: ach.color,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {ach.platform}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
