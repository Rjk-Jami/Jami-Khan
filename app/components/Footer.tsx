'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaFacebookF, FaCodepen, FaHeart, FaArrowUp } from 'react-icons/fa'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Rjk-Jami', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/raihan-jami-khan-380657188/', label: 'LinkedIn' },
  { icon: FaFacebookF, href: 'https://www.facebook.com/rjk.jami/', label: 'Facebook' },
  { icon: FaCodepen, href: 'https://codepen.io/rjk_jami', label: 'CodePen' },
]

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-t from-dark-300 to-dark-200 border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary-500 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">RJ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Raihan Jami Khan</h3>
                <p className="text-accent text-sm">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Crafting digital experiences with passion and precision. 
              Let's build something amazing together.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-accent transition-colors duration-300 text-left"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
            <div className="space-y-2 text-gray-400">
              <p>raihanjamikhan@gmail.com</p>
              <p>+880-17860-76080</p>
              <p>Sukrabad, Dhaka, Bangladesh</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-accent hover:bg-accent/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-gray-400">
            <span>© 2024 Raihan Jami Khan. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-500" />
            </motion.div>
            <span>and lots of ☕</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-gray-400 hover:text-accent transition-colors duration-300"
          >
            <span>Back to top</span>
            <FaArrowUp />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
    </footer>
  )
}