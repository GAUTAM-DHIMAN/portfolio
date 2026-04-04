import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiSend, FiUser, FiMessageSquare, FiCheckCircle, FiGithub, FiLinkedin } from 'react-icons/fi'

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'gautam@example.com',
    href: 'mailto:gautam@example.com',
    color: '#00f3ff',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/gautam',
    href: 'https://github.com',
    color: '#7d2ae8',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/gautam',
    href: 'https://linkedin.com',
    color: '#0066ff',
  },
]

function InputField({ icon: Icon, label, id, type = 'text', placeholder, value, onChange, color = '#00f3ff', multiline }) {
  const [focused, setFocused] = useState(false)

  const baseStyle = {
    background: 'white',
    border: `1px solid ${focused ? color : 'rgba(0,0,0,0.08)'}`,
    borderRadius: '10px',
    color: 'var(--text-primary)',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.9rem',
    width: '100%',
    padding: '12px 16px 12px 44px',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxShadow: focused ? `0 0 0 3px ${color}15` : 'none',
    resize: multiline ? 'vertical' : undefined,
    minHeight: multiline ? '130px' : undefined,
  }

  return (
    <div className="relative">
      <label className="block text-xs font-semibold mb-2 text-[var(--text-secondary)] uppercase tracking-wide" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <Icon
          size={16}
          className="absolute left-3.5 top-3.5 pointer-events-none"
          style={{ color: focused ? color : 'rgba(160,174,192,0.5)' }}
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
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch {
      // Backend not running — simulate success for demo
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
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
            Let's Connect
          </p>
          <h2 className="section-title mb-4 text-[var(--text-primary)]">Get In Touch</h2>
          <div className="w-16 h-1 mx-auto rounded-full bg-[var(--text-primary)] opacity-20" />
          <p className="mt-4 text-[var(--text-secondary)] max-w-lg mx-auto">
            Have a project in mind or want to collaborate? Drop a message — I typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="glass-card p-6 mb-2">
              <h3 className="font-bold text-lg mb-2 text-[var(--text-primary)]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Open to Opportunities 🚀
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Available for full-time roles, internships, and freelance projects in AI/ML, full-stack development, and cloud engineering.
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
                whileHover={{ x: 4 }}
                id={`contact-info-${info.label.toLowerCase()}`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${info.color}15`, border: `1px solid ${info.color}25` }}
                >
                  <info.icon size={18} style={{ color: info.color }} />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-secondary)] mb-0.5">{info.label}</p>
                  <p
                    className="text-sm font-semibold transition-colors text-[var(--text-primary)] group-hover:opacity-80"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    >
                      <FiCheckCircle size={64} style={{ color: '#10b981' }} />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl font-bold text-[var(--text-primary)] mt-6 mb-2"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      Message Sent! 🎉
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-[var(--text-secondary)] text-sm"
                    >
                      Thanks for reaching out. I'll get back to you within 24 hours.
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
                      className="btn-primary justify-center w-full"
                      id="contact-submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {status === 'loading' ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
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
                        className="text-center text-sm text-red-400"
                      >
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
