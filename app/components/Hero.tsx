'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaLinkedinIn, FaFacebookF, FaCodepen, FaDownload, FaArrowDown } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Rjk-Jami', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/raihan-jami-khan-380657188/', label: 'LinkedIn' },
  { icon: FaFacebookF, href: 'https://www.facebook.com/rjk.jami/', label: 'Facebook' },
  { icon: FaCodepen, href: 'https://codepen.io/rjk_jami', label: 'CodePen' },
]

const roles = ['MERN Stack Developer', 'Frontend Specialist', 'UI/UX Enthusiast', 'Problem Solver']

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Raihan-Jami-Khan-Resume.pdf'
    link.click()
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dpphpbkkz/image/upload/v1739048399/IMG_0653_3-min_dojsxy.png"
          alt="Raihan Jami Khan"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-300/90 via-dark-200/80 to-dark-300/90" />
        <div className="absolute inset-0 hero-pattern" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-accent text-xl font-medium">Hello! I am</p>
              <h1 className="hero-title text-5xl md:text-7xl font-bold text-white leading-tight">
                Raihan Jami
                <span className="block gradient-text">Khan</span>
              </h1>
              
              <div className="h-16 flex items-center">
                <motion.p
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="hero-subtitle text-2xl md:text-3xl font-bold text-accent typing-animation"
                >
                  {roles[currentRole]}
                </motion.p>
              </div>

              <div className="flex flex-wrap gap-2 text-gray-300">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Web Developer</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Programmer</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Software Engineer</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <FaDownload />
                <span>Get Resume</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
                className="btn-outline"
              >
                About Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl text-gray-400 hover:text-accent transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-accent to-primary-500 rounded-full opacity-20 blur-xl"
              />
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl"
              >
                <Image
                  src="https://res.cloudinary.com/dpphpbkkz/image/upload/v1739048399/IMG_0653_3-min_dojsxy.png"
                  alt="Raihan Jami Khan - Profile"
                  fill
                  className="object-cover object-center"
                  quality={95}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToAbout}
            className="text-white/60 hover:text-accent transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <FaArrowDown className="text-2xl" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}