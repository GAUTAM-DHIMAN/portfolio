const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// ── Middleware ──
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true,
}))
app.use(express.json())

// ── MongoDB Connection ──
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio'

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err.message))

// ── Contact Message Schema ──
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
  read: { type: Boolean, default: false },
})

const Contact = mongoose.model('Contact', contactSchema)

// ── Routes ──

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio API is running 🚀', timestamp: new Date().toISOString() })
})

// Submit contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' })
  }

  try {
    const contact = new Contact({ name, email, message })
    await contact.save()
    console.log(`📩 New message from ${name} <${email}>`)
    res.status(201).json({ success: true, message: 'Message received! I will get back to you soon.' })
  } catch (err) {
    console.error('Error saving contact:', err.message)
    res.status(500).json({ error: 'Server error. Please try again later.' })
  }
})

// Get all messages (admin)
app.get('/api/contact', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 })
    res.json({ count: messages.length, messages })
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages.' })
  }
})

// ── Start Server ──
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
    console.log(`📡 Health check: http://localhost:${PORT}/api/health`)
  })
}

module.exports = app
