import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi'

const experiences = [
  {
    title: 'AWS Cloud Intern',
    company: 'Cloud Technologies',
    period: '2024',
    location: 'Remote',
    color: '#f59e0b',
    icon: '☁️',
    points: [
      'Worked extensively with EC2, S3, IAM, and RDS for cloud infrastructure setup',
      'Deployed full-stack applications and monitored performance using AWS CloudWatch',
      'Automated workflows and provisioning using AWS CLI & Boto3 scripting',
      'Configured IAM roles, policies, and security groups for secure deployments',
    ],
    tags: ['AWS EC2', 'S3', 'IAM', 'RDS', 'CloudWatch', 'Boto3'],
  },
  {
    title: 'UI/UX Developer Intern',
    company: 'Tech Startup',
    period: '2023',
    location: 'Remote',
    color: '#7d2ae8',
    icon: '🎨',
    points: [
      'Built responsive, cross-browser compatible web apps using React, HTML, CSS & JavaScript',
      'Integrated RESTful APIs and managed application state efficiently',
      'Followed clean coding standards and participated in code reviews',
      'Collaborated with designers to implement pixel-perfect UI components',
    ],
    tags: ['React', 'HTML', 'CSS', 'JavaScript', 'REST APIs'],
  },
  {
    title: 'Web Development Intern',
    company: 'Digital Agency',
    period: '2023',
    location: 'Remote',
    color: '#00f3ff',
    icon: '🌐',
    points: [
      'Designed modern UI/UX interfaces using Figma with focus on user experience',
      'Created wireframes, prototypes, and interactive mockups for web applications',
      'Improved UX flows and user journey maps, increasing engagement metrics',
      'Collaborated with development team to deliver design-dev handoffs',
    ],
    tags: ['Figma', 'UI Design', 'Wireframing', 'Prototyping', 'UX'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
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
            My Journey
          </p>
          <h2 className="section-title mb-4 text-[var(--text-primary)]">Experience</h2>
          <div className="w-16 h-1 mx-auto rounded-full bg-[var(--text-primary)] opacity-20" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-[rgba(0,0,0,0.1)]"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-0`}
              >
                {/* Content */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-16 md:pl-0`}>
                  <motion.div
                    className="glass-card p-6 group relative overflow-hidden"
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    style={{ borderColor: `${exp.color}25` }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(to top left, rgba(0,0,0,0.02), transparent)` }}
                    />

                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-2xl">{exp.icon}</span>
                      <div className="flex-1">
                        <h3
                          className="font-bold text-lg text-[var(--text-primary)] mb-0.5"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                          {exp.title}
                        </h3>
                        <p className="text-sm font-semibold" style={{ color: exp.color }}>
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                        <FiCalendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                        <FiMapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Points */}
                    <ul className="space-y-2 mb-4">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                          <span style={{ color: exp.color, marginTop: '2px', flexShrink: 0 }}>▹</span>
                          {pt}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-xs rounded-full font-medium"
                          style={{
                            background: `${exp.color}12`,
                            border: `1px solid ${exp.color}30`,
                            color: exp.color,
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot — centered */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-6 flex items-center justify-center">
                  <motion.div
                    className="w-5 h-5 rounded-full border-2 z-10 flex items-center justify-center bg-white"
                    style={{ borderColor: exp.color, boxShadow: `0 4px 6px rgba(0,0,0,0.05)` }}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: i * 0.18 + 0.3, type: 'spring', stiffness: 200 }}
                  >
                    <FiBriefcase size={9} color="#080810" />
                  </motion.div>
                </div>

                {/* Empty spacer for alternating layout */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
