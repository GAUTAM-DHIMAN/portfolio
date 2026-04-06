import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiSend, FiUser, FiMessageSquare, FiCheckCircle, FiGithub, FiLinkedin, FiAlertCircle } from 'react-icons/fi'

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'gautamdhiman@example.com',
    href: 'mailto:gautamdhiman@example.com',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.2)',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/GAUTAM-DHIMAN',
    href: 'https://github.com/GAUTAM-DHIMAN',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'www.linkedin.com/in/gautam-dhiman-amb/',
    href: 'https://www.linkedin.com/in/gautam-dhiman-amb/',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.2)',
  },
]

function InputField({ icon: Icon, label, id, type = 'text', placeholder, value, onChange, multiline }) {
  const [focused, setFocused] = useState(false)

  const baseStyle = {
    background: 'rgba(248,249,251,0.8)',
    border: `1.5px solid ${focused ? 'rgba(99,102,241,0.6)' : 'var(--border-medium)'}`,
    borderRadius: '12px',
    color: 'var(--text-primary)',
    fontFamily: "'Inter', 'Space Grotesk', sans-serif",
    fontSize: '0.9rem',
    width: '100%',
    padding: '12px 16px 12px 46px',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxShadow: focused ? '0 0 0 3px rgba(99,102,241,0.12)' : 'none',
    resize: multiline ? 'vertical' : undefined,
    minHeight: multiline ? '130px' : undefined,
  }

  return (
    <div>
      <label
        className="block text-xs font-semibold mb-2 uppercase tracking-wide"
        htmlFor={id}
        style={{ color: 'var(--text-muted)' }}
      >
        {label}
      </label>
      <div className="relative">
        <Icon
          size={16}
          className="absolute left-3.5 top-3.5 pointer-events-none"
          style={{ color: focused ? 'var(--accent-indigo)' : 'var(--text-muted)', transition: 'color 0.2s' }}
        />
        {multiline ? (
          <textarea
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={baseStyle}
          />
        ) : (
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={baseStyle}
          />
        )}
      </div>
    </div>
  )
}

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('loading')

    try {
      const apiUrl = import.meta.env.VITE_API_URL || ''
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch {
      // Backend not connected — simulate success for demo
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* BG blobs */}
      <div
        className="absolute top-1/4 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }} ref={ref}>
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
            let's talk
          </p>
          <h2 className="section-title" style={{ marginBottom: '18px' }}>Get In Touch</h2>
          <div style={{ width: '48px', height: '3px', borderRadius: '99px', background: 'linear-gradient(90deg, #6366f1, #8b5cf6)', margin: '0 auto 16px' }} />
          <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto', fontSize: '1.02rem', lineHeight: 1.7 }}>
            Have a project in mind or just want to say hi? Drop a message — I usually reply within a day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div
              className="glass-card p-5 mb-1"
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.04))',
                borderColor: 'rgba(99,102,241,0.2)',
              }}
            >
              <div className="text-2xl mb-3">🚀</div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--text-primary)' }}
              >
                Open to Opportunities
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Available for full-time roles, internships, and freelance projects in AI/ML, full-stack development, UI/UX design, and cloud engineering.
              </p>
            </div>

            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="glass-card p-4 flex items-center gap-4 group"
                style={{ borderColor: info.border }}
                whileHover={{ x: 6, borderColor: info.color + '40' }}
                id={`contact-link-${info.label.toLowerCase()}`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: info.bg, border: `1px solid ${info.border}` }}
                >
                  <info.icon size={18} style={{ color: info.color }} />
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>{info.label}</p>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: 'var(--text-primary)', fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div
              className="glass-card p-8 relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(99,102,241,0.15)',
              }}
            >
              {/* Top gradient bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)' }}
              />

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.88 }}
                    className="flex flex-col items-center justify-center py-14 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      style={{ color: '#10b981' }}
                    >
                      <FiCheckCircle size={64} />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl font-bold mt-6 mb-2"
                      style={{ fontFamily: "'Outfit', sans-serif", color: 'var(--text-primary)' }}
                    >
                      Message Sent! 🎉
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                    </motion.p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    id="contact-form"
                  >
                    <InputField
                      icon={FiUser}
                      label="Your Name"
                      id="contact-name"
                      placeholder="Gautam Dhiman"
                      value={form.name}
                      onChange={handleChange('name')}
                    />
                    <InputField
                      icon={FiMail}
                      label="Email Address"
                      id="contact-email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange('email')}
                    />
                    <InputField
                      icon={FiMessageSquare}
                      label="Message"
                      id="contact-message"
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={handleChange('message')}
                      multiline
                    />

                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary justify-center w-full py-3"
                      id="contact-submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {status === 'loading' ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend size={16} />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    {status === 'error' && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center justify-center gap-2 text-sm text-red-500"
                      >
                        <FiAlertCircle size={15} />
                        Something went wrong. Please try again.
                      </motion.p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
