import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiCpu, FiCloud, FiLayout } from 'react-icons/fi'

const specialties = [
  {
    icon: FiCpu,
    title: 'AI & Machine Learning',
    desc: 'Data pipelines, ML model integration, AI-driven automation.',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.07)',
    border: 'rgba(99,102,241,0.18)',
  },
  {
    icon: FiCode,
    title: 'Full Stack Development',
    desc: 'React frontends, FastAPI & Node.js backends, end-to-end apps.',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.07)',
    border: 'rgba(139,92,246,0.18)',
  },
  {
    icon: FiLayout,
    title: 'UI / UX Design',
    desc: 'Figma, Photoshop, Sketch, Adobe XD — pixels & prototypes.',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.07)',
    border: 'rgba(236,72,153,0.18)',
  },
  {
    icon: FiCloud,
    title: 'Cloud & AWS',
    desc: 'EC2, S3, IAM, RDS, CloudWatch, Boto3 automation.',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.07)',
    border: 'rgba(6,182,212,0.18)',
  },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })
  const [cardsRef, cardsInView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section
      id="about"
      style={{ position: 'relative', padding: '120px 0', overflow: 'hidden' }}
      ref={ref}
    >
      {/* subtle bg blob */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── centred container ── */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 40px',
        }}
      >

        {/* ── Section heading — less template-y ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ marginBottom: '72px', textAlign: 'center' }}
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
            a bit about me
          </p>
          <h2
            className="section-title"
            style={{ marginBottom: '18px' }}
          >
            Who I am
          </h2>
          {/* squiggly-ish underline */}
          <div
            style={{
              width: '48px',
              height: '3px',
              borderRadius: '99px',
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
              margin: '0 auto',
            }}
          />
        </motion.div>

        {/* ── 2-col layout ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '72px',
            alignItems: 'start',
            marginBottom: '88px',
          }}
        >
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              style={{
                fontSize: '1.07rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                marginBottom: '22px',
              }}
            >
              I'm a CS student specialising in{' '}
              <strong style={{ color: '#6366f1', fontWeight: 700 }}>AI & Machine Learning</strong>{' '}
              at Chandigarh University. I like building things that actually work — clean code on the
              back, something beautiful on the front.
            </p>

            <p
              style={{
                fontSize: '1.07rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                marginBottom: '22px',
              }}
            >
              Outside of coding I have a genuine interest in{' '}
              <strong style={{ color: '#ec4899', fontWeight: 700 }}>design</strong> — I use Figma,
              Photoshop, and Adobe XD regularly and try to bridge the gap between how something looks
              and how it feels to use.
            </p>

            <p
              style={{
                fontSize: '1.07rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
              }}
            >
              I've interned in AWS cloud, UI/UX design, and web development — three pretty different
              worlds that ended up giving me a useful 360° view of building software.
            </p>

            {/* Numbers — simple, airy */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                marginTop: '44px',
              }}
            >
              {[
                { num: '200+', label: 'DSA problems', color: '#6366f1' },
                { num: '3', label: 'internships', color: '#8b5cf6' },
                { num: '7+', label: 'projects', color: '#06b6d4' },
              ].map(({ num, label, color }) => (
                <motion.div
                  key={label}
                  style={{
                    padding: '18px 12px',
                    borderRadius: '18px',
                    background: 'rgba(255,255,255,0.8)',
                    border: '1px solid var(--border-light)',
                    textAlign: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.18 }}
                >
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 900,
                      fontSize: '1.6rem',
                      color,
                      lineHeight: 1.1,
                      marginBottom: '4px',
                    }}
                  >
                    {num}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — code card */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '-20px',
                borderRadius: '30px',
                background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
                filter: 'blur(30px)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'relative',
                background: '#0d1117',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 24px 60px rgba(0,0,0,0.18)',
              }}
            >
              {/* title bar dots */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', alignItems: 'center' }}>
                {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
                  <div key={c} style={{ width: '11px', height: '11px', borderRadius: '50%', background: c }} />
                ))}
                <span
                  style={{
                    marginLeft: 'auto',
                    fontSize: '0.72rem',
                    color: 'rgba(255,255,255,0.25)',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  gautam.js
                </span>
              </div>
              <pre
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.8rem',
                  lineHeight: 1.8,
                  overflowX: 'auto',
                }}
              >
                <code>
                  <span style={{ color: '#79c0ff' }}>const </span>
                  <span style={{ color: '#c9d1d9' }}>me = {'{'}</span>
                  {'\n'}
                  <span style={{ color: '#79c0ff' }}>  name</span>
                  <span style={{ color: '#c9d1d9' }}>: </span>
                  <span style={{ color: '#a5d6ff' }}>"Gautam Dhiman"</span>
                  <span style={{ color: '#c9d1d9' }}>,</span>
                  {'\n'}
                  <span style={{ color: '#79c0ff' }}>  based</span>
                  <span style={{ color: '#c9d1d9' }}>: </span>
                  <span style={{ color: '#a5d6ff' }}>"Chandigarh, India 🇮🇳"</span>
                  <span style={{ color: '#c9d1d9' }}>,</span>
                  {'\n'}
                  <span style={{ color: '#79c0ff' }}>  studying</span>
                  <span style={{ color: '#c9d1d9' }}>: </span>
                  <span style={{ color: '#a5d6ff' }}>"B.E. CSE (AI/ML)"</span>
                  <span style={{ color: '#c9d1d9' }}>,</span>
                  {'\n'}
                  <span style={{ color: '#79c0ff' }}>  loves</span>
                  <span style={{ color: '#c9d1d9' }}>: [</span>
                  <span style={{ color: '#a5d6ff' }}>"building"</span>
                  <span style={{ color: '#c9d1d9' }}>, </span>
                  <span style={{ color: '#a5d6ff' }}>"design"</span>
                  <span style={{ color: '#c9d1d9' }}>, </span>
                  <span style={{ color: '#a5d6ff' }}>"coffee"</span>
                  <span style={{ color: '#c9d1d9' }}>],</span>
                  {'\n'}
                  <span style={{ color: '#79c0ff' }}>  currentlyLearning</span>
                  <span style={{ color: '#c9d1d9' }}>: </span>
                  <span style={{ color: '#a5d6ff' }}>"more AI stuff 🤖"</span>
                  {'\n'}
                  <span style={{ color: '#c9d1d9' }}>{'}'}</span>
                  <span style={{ color: '#c9d1d9' }}>;</span>
                </code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* ── Specialty cards ── */}
        <div ref={cardsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {specialties.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: '24px',
                borderRadius: '20px',
                background: card.bg,
                border: `1px solid ${card.border}`,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
              whileHover={{ y: -6 }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: `linear-gradient(90deg, ${card.color}, transparent)`,
                }}
              />
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  background: `${card.color}18`,
                  border: `1px solid ${card.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <card.icon size={20} style={{ color: card.color }} />
              </div>
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                }}
              >
                {card.title}
              </h3>
              <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
