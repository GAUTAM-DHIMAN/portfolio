import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'

import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'

import Experience3D from './components/3d/Experience3D'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  const handleLoaderComplete = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <CustomCursor />

      <AnimatePresence>
        {loading && <Loader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      {!loading && (
        <Experience3D>
          <div className="portfolio-wrapper text-white hide-scrollbar pointer-events-auto">
            {/* The actual HTML portfolio is now mapped onto the 3D laptop screen */}
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Education />
              <Contact />
            </main>
            <Footer />
          </div>
        </Experience3D>
      )}
    </>
  )
}

