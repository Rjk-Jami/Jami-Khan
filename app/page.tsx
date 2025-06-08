'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

// Dynamic imports for better performance
const ScrollToTop = dynamic(() => import('./components/ScrollToTop'), {
  ssr: false,
})

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="about" className="py-20">
        <About />
      </section>
      
      <section id="skills" className="py-20">
        <Skills />
      </section>
      
      <section id="projects" className="py-20">
        <Projects />
      </section>
      
      <section id="contact" className="py-20">
        <Contact />
      </section>
      
      <Footer />
      <ScrollToTop />
    </main>
  )
}