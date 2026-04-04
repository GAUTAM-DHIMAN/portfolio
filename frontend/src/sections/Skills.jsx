import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    title: 'Languages',
    color: '#00f3ff',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 82 },
      { name: 'C++', level: 78 },
      { name: 'TypeScript', level: 70 },
    ],
  },
  {
    title: 'Frontend',
    color: '#7d2ae8',
    skills: [
      { name: 'ReactJS', level: 85 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 85 },
    ],
  },
  {
    title: 'Backend',
    color: '#0066ff',
    skills: [
      { name: 'FastAPI', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'REST APIs', level: 88 },
      { name: 'Express.js', level: 72 },
    ],
  },
  {
    title: 'Database',
    color: '#ff006e',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 72 },
    ],
  },
  {
    title: 'Cloud & Tools',
    color: '#f59e0b',
    skills: [
      { name: 'AWS (EC2, S3)', level: 78 },
      { name: 'AWS IAM/RDS', level: 72 },
      { name: 'Git & Linux', level: 85 },
      { name: 'Boto3 / CLI', level: 68 },
    ],
  },
  {
    title: 'Concepts & UI',
    color: '#10b981',
    skills: [
      { name: 'Data Structures', level: 88 },
      { name: 'System Design', level: 75 },
      { name: 'UI/UX & Figma', level: 80 },
      { name: 'Algorithms', level: 85 },
    ],
  },
]

function SkillBar({ name, level, color, inView, delay }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-[var(--text-primary)]">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="w-full h-1.5 rounded-full" style={{ background: 'rgba(0,0,0,0.05)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
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
            What I Work With
          </p>
          <h2 className="section-title mb-4 text-[var(--text-primary)]">Tech Stack</h2>
          <div className="w-16 h-1 mx-auto rounded-full bg-[var(--text-primary)] opacity-20" />
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-6"
              whileHover={{ y: -4 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-2 h-8 rounded-full"
                  style={{ background: cat.color }}
                />
                <h3
                  className="font-bold text-base"
                  style={{ color: cat.color, fontFamily: "'Outfit', sans-serif" }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Skill bars */}
              {cat.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  inView={inView}
                  delay={catIdx * 0.1 + skillIdx * 0.08 + 0.2}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Floating tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {['Python', 'React', 'FastAPI', 'AWS', 'MySQL', 'MongoDB', 'Git', 'Linux', 'Tailwind', 'TypeScript'].map((tech, i) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-1.5 rounded-full text-sm font-medium"
              style={{
                border: '1px solid rgba(0,0,0,0.08)',
                background: 'white',
                color: 'var(--text-primary)',
                fontFamily: "'JetBrains Mono', monospace",
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
