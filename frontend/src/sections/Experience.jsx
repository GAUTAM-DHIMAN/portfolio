import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCalendar, FiMapPin } from 'react-icons/fi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    title: 'AWS Cloud Intern',
    company: 'Cloud Technologies',
    period: '2024',
    location: 'Remote',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
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
    title: 'UI/UX Designer Intern',
    company: 'Tech Startup',
    period: '2023',
    location: 'Remote',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.08)',
    icon: '🎨',
    points: [
      'Designed modern UI/UX interfaces using Figma, Adobe XD, and Photoshop',
      'Created wireframes, prototypes, and interactive mockups for web and mobile apps',
      'Collaborated with development teams for pixel-perfect design handoffs',
      'Improved UX flows, user journey maps, and increased engagement metrics by 35%',
    ],
    tags: ['Figma', 'Adobe XD', 'Photoshop', 'Sketch', 'Wireframing', 'Prototyping'],
  },
  {
    title: 'Web Development Intern',
    company: 'Digital Agency',
    period: '2023',
    location: 'Remote',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.08)',
    icon: '🌐',
    points: [
      'Built responsive, cross-browser compatible web apps using React, HTML, CSS & JavaScript',
      'Integrated RESTful APIs and managed application state efficiently',
      'Followed clean coding standards and participated in team code reviews',
      'Collaborated with designers to implement pixel-perfect UI components from Figma specs',
    ],
    tags: ['React', 'HTML', 'CSS', 'JavaScript', 'REST APIs', 'Git'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const lineRef = useRef(null)

  useEffect(() => {
    if (!lineRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* BG blob */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)', filter: 'blur(50px)' }}
      />

      <div style={{ maxWidth: '940px', margin: '0 auto', padding: '0 40px' }} ref={ref}>
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
            where I've worked
          </p>
          <h2 className="section-title" style={{ marginBottom: '18px' }}>Experience</h2>
          <div style={{ width: '48px', height: '3px', borderRadius: '99px', background: 'linear-gradient(90deg, #6366f1, #8b5cf6)', margin: '0 auto' }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Growing line */}
          <div
            ref={lineRef}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, #6366f1, #8b5cf6, #ec4899, transparent)', transformOrigin: 'top' }}
          />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-0`}
              >
                {/* Card */}
                <div className={`w-full md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-16 md:pl-0`}>
                  <motion.div
                    className="glass-card p-6 group relative overflow-hidden"
                    style={{ borderColor: `${exp.color}25` }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Accent line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5"
                      style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }}
                    />

                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(circle at 50% 0%, ${exp.color}10, transparent 60%)` }}
                    />

                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: exp.bg, border: `1px solid ${exp.color}25` }}
                      >
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h3
                          className="font-bold text-lg text-[var(--text-primary)] leading-tight"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                          {exp.title}
                        </h3>
                        <p className="text-sm font-semibold" style={{ color: exp.color }}>{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
                        <FiCalendar size={12} />{exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
                        <FiMapPin size={12} />{exp.location}
                      </span>
                    </div>

                    {/* Points */}
                    <ul className="space-y-2 mb-4">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                          <span style={{ color: exp.color, marginTop: '2px', flexShrink: 0 }}>▹</span>
                          {pt}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="tag-chip"
                          style={{
                            background: `${exp.color}10`,
                            border: `1px solid ${exp.color}25`,
                            color: exp.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-7 flex items-center justify-center">
                  <motion.div
                    className="w-6 h-6 rounded-full border-2 z-10 flex items-center justify-center bg-white"
                    style={{ borderColor: exp.color, boxShadow: `0 0 0 4px ${exp.color}20` }}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: i * 0.2 + 0.3, type: 'spring', stiffness: 250 }}
                  >
                    <span style={{ fontSize: '10px' }}>{exp.icon}</span>
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-[calc(50%-2.5rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
